import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { ChevronDown, ChevronUp, RotateCcw, Shield } from 'lucide-react';

export type ShieldMode = 'lattice' | 'zero-trust' | 'mesh';

// Pre-allocated module-scope helpers for zero GC inside useFrame
const _dummyObj = new THREE.Object3D();
const _tempVec = new THREE.Vector3();
const _nodeColor = new THREE.Color();

const detectSoftwareWebGL = (): boolean => {
  if (typeof document === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return true;
  }
};

interface StudioEnvironmentProps {
  isSoftwareGl: boolean;
}

const StudioEnvironment: React.FC<StudioEnvironmentProps> = ({ isSoftwareGl }) => {
  const { gl, scene, invalidate } = useThree();

  useEffect(() => {
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.12;

    const pmremGenerator = new THREE.PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();
    const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;
    scene.fog = new THREE.FogExp2(0x08090c, 0.075);
    pmremGenerator.dispose();

    return () => {
      envTexture.dispose();
    };
  }, [gl, scene]);

  // Software WebGL fence-synced pacing loop so CPU rasterizers never starve main thread
  useEffect(() => {
    if (!isSoftwareGl) return;
    let timerId = 0;
    let active = true;

    const scheduleNextFrame = () => {
      if (!active) return;
      invalidate();
      const context = gl.getContext() as WebGL2RenderingContext | null;
      if (context && typeof context.fenceSync === 'function') {
        const sync = context.fenceSync(context.SYNC_GPU_COMMANDS_COMPLETE, 0);
        context.flush();
        const poll = () => {
          if (!active) return;
          const state = sync && context.getSyncParameter(sync, context.SYNC_STATUS);
          if (state === context.UNSIGNALED) {
            timerId = window.setTimeout(poll, 8);
          } else {
            if (sync) context.deleteSync(sync);
            timerId = window.setTimeout(scheduleNextFrame, 85);
          }
        };
        timerId = window.setTimeout(poll, 8);
      } else {
        timerId = window.setTimeout(scheduleNextFrame, 90);
      }
    };

    scheduleNextFrame();
    return () => {
      active = false;
      window.clearTimeout(timerId);
    };
  }, [gl, invalidate, isSoftwareGl]);

  return null;
};

interface CryptographicLatticeProps {
  mode: ShieldMode;
  explodedFactor: number;
  isMobile: boolean;
  reducedMotion: boolean;
  isSoftwareGl: boolean;
}

const NODE_COUNT = 36;

const CryptographicLattice: React.FC<CryptographicLatticeProps> = ({
  mode,
  explodedFactor,
  isMobile,
  reducedMotion,
  isSoftwareGl,
}) => {
  const rootGroupRef = useRef<THREE.Group>(null);
  const outerLatticeRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.LineSegments>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const primaryRingRef = useRef<THREE.Mesh>(null);
  const secondaryRingRef = useRef<THREE.Mesh>(null);
  const splineGroupRef = useRef<THREE.Group>(null);
  const instancedNodesRef = useRef<THREE.InstancedMesh>(null);

  const smoothExplode = useRef(0);

  // Precompute geometries and spline trajectories
  const {
    outerGeo,
    outerEdgesGeo,
    innerCoreGeo,
    ringPrimaryGeo,
    ringSecondaryGeo,
    nodeGeo,
    splineGeometries,
    nodeOrbits,
    contactShadowTexture,
  } = useMemo(() => {
    const outer = new THREE.IcosahedronGeometry(1.72, 1);
    const outerEdges = new THREE.EdgesGeometry(outer, 1);
    const inner = new THREE.OctahedronGeometry(0.92, 2);
    const ring1 = new THREE.TorusGeometry(2.18, 0.022, 16, 96);
    const ring2 = new THREE.TorusGeometry(2.48, 0.016, 12, 96);
    const node = new THREE.IcosahedronGeometry(0.068, 0);

    // 3 closed orbital spline curves
    const createOrbitalTube = (radius: number, tiltX: number, tiltZ: number, waveAmp: number) => {
      const pts: THREE.Vector3[] = [];
      const segments = 24;
      const euler = new THREE.Euler(tiltX, 0, tiltZ);
      for (let i = 0; i < segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const v = new THREE.Vector3(
          Math.cos(theta) * radius,
          Math.sin(theta * 3) * waveAmp,
          Math.sin(theta) * radius
        ).applyEuler(euler);
        pts.push(v);
      }
      const curve = new THREE.CatmullRomCurve3(pts, true);
      return new THREE.TubeGeometry(curve, 72, 0.012, 6, true);
    };

    const splines = [
      createOrbitalTube(1.98, 0.45, 0.25, 0.18),
      createOrbitalTube(2.32, -0.52, 0.38, 0.22),
      createOrbitalTube(2.62, 0.18, -0.62, 0.15),
    ];

    // Precompute deterministic orbit metadata for 36 instanced telemetry nodes
    const orbits = Array.from({ length: NODE_COUNT }, (_, idx) => {
      const layer = idx % 3;
      const baseRadius = 1.85 + layer * 0.36 + (idx % 5) * 0.04;
      const speed = (0.28 + (idx % 7) * 0.06) * (idx % 2 === 0 ? 1 : -1);
      const phase = (idx / NODE_COUNT) * Math.PI * 2;
      const inclination = ((idx % 9) - 4) * 0.24;
      const scale = 0.85 + (idx % 4) * 0.12;
      return { baseRadius, speed, phase, inclination, scale, layer };
    });

    // Procedural radial contact shadow canvas texture
    let shadowTex: THREE.CanvasTexture | null = null;
    if (typeof document !== 'undefined') {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 6, 64, 64, 60);
        grad.addColorStop(0, 'rgba(6, 182, 212, 0.28)');
        grad.addColorStop(0.45, 'rgba(37, 99, 235, 0.12)');
        grad.addColorStop(1, 'rgba(8, 9, 12, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
      }
      shadowTex = new THREE.CanvasTexture(canvas);
      shadowTex.colorSpace = THREE.SRGBColorSpace;
    }

    return {
      outerGeo: outer,
      outerEdgesGeo: outerEdges,
      innerCoreGeo: inner,
      ringPrimaryGeo: ring1,
      ringSecondaryGeo: ring2,
      nodeGeo: node,
      splineGeometries: splines,
      nodeOrbits: orbits,
      contactShadowTexture: shadowTex,
    };
  }, []);

  // Initialize InstancedMesh colors and bounding sphere
  useEffect(() => {
    const mesh = instancedNodesRef.current;
    if (!mesh) return;

    const palette =
      mode === 'zero-trust'
        ? ['#10B981', '#06B6D4', '#2563EB']
        : mode === 'mesh'
        ? ['#06B6D4', '#38BDF8', '#10B981']
        : ['#2563EB', '#06B6D4', '#10B981'];

    for (let i = 0; i < NODE_COUNT; i++) {
      _nodeColor.set(palette[i % palette.length]);
      mesh.setColorAt(i, _nodeColor);
    }
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }

    // Set initial transforms so bounding sphere is valid immediately
    for (let i = 0; i < NODE_COUNT; i++) {
      const o = nodeOrbits[i];
      _dummyObj.position.set(
        Math.cos(o.phase) * o.baseRadius,
        Math.sin(o.phase) * o.inclination,
        Math.sin(o.phase) * o.baseRadius
      );
      _dummyObj.scale.setScalar(o.scale);
      _dummyObj.updateMatrix();
      mesh.setMatrixAt(i, _dummyObj.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
  }, [mode, nodeOrbits]);

  // Cleanup geometries on unmount
  useEffect(() => {
    return () => {
      outerGeo.dispose();
      outerEdgesGeo.dispose();
      innerCoreGeo.dispose();
      ringPrimaryGeo.dispose();
      ringSecondaryGeo.dispose();
      nodeGeo.dispose();
      splineGeometries.forEach((g) => g.dispose());
      contactShadowTexture?.dispose();
    };
  }, [
    outerGeo,
    outerEdgesGeo,
    innerCoreGeo,
    ringPrimaryGeo,
    ringSecondaryGeo,
    nodeGeo,
    splineGeometries,
    contactShadowTexture,
  ]);

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.1);
    const elapsed = state.clock.getElapsedTime();

    // Smoothly damp exploded view separation factor
    smoothExplode.current = THREE.MathUtils.damp(
      smoothExplode.current,
      explodedFactor,
      6,
      delta
    );
    const exp = smoothExplode.current;

    if (rootGroupRef.current) {
      const targetRotY =
        !isMobile && !reducedMotion
          ? state.pointer.x * 0.48 + elapsed * 0.14
          : elapsed * (reducedMotion ? 0.03 : 0.12);
      const targetRotX =
        !isMobile && !reducedMotion ? -state.pointer.y * 0.34 : Math.sin(elapsed * 0.25) * 0.1;

      rootGroupRef.current.rotation.y = THREE.MathUtils.damp(
        rootGroupRef.current.rotation.y,
        targetRotY,
        4.5,
        delta
      );
      rootGroupRef.current.rotation.x = THREE.MathUtils.damp(
        rootGroupRef.current.rotation.x,
        targetRotX,
        4.5,
        delta
      );
    }

    // Scale parts according to exploded slider & mode
    const outerScale = (mode === 'mesh' ? 0.88 : 1.0) + exp * 0.32;
    if (outerLatticeRef.current && outerWireRef.current) {
      outerLatticeRef.current.scale.setScalar(outerScale);
      outerWireRef.current.scale.setScalar(outerScale);
      outerLatticeRef.current.rotation.y = -elapsed * 0.08;
      outerWireRef.current.rotation.y = -elapsed * 0.08;
    }

    if (innerCoreRef.current) {
      const coreBase = mode === 'zero-trust' ? 1.18 : 1.0;
      const corePulse = reducedMotion ? 1 : 1 + Math.sin(elapsed * 2.2) * 0.035;
      innerCoreRef.current.scale.setScalar(coreBase * corePulse * (1 - exp * 0.12));
      innerCoreRef.current.rotation.y = elapsed * 0.32;
      innerCoreRef.current.rotation.z = elapsed * 0.18;
    }

    if (primaryRingRef.current) {
      primaryRingRef.current.scale.setScalar(1 + exp * 0.42);
      primaryRingRef.current.rotation.x = Math.PI / 2.6 + elapsed * 0.22;
      primaryRingRef.current.rotation.y = elapsed * 0.15;
    }

    if (secondaryRingRef.current) {
      secondaryRingRef.current.scale.setScalar(1 + exp * 0.56);
      secondaryRingRef.current.rotation.x = -Math.PI / 3.1 - elapsed * 0.18;
      secondaryRingRef.current.rotation.z = elapsed * 0.24;
    }

    if (splineGroupRef.current) {
      splineGroupRef.current.scale.setScalar(1 + exp * 0.48);
      splineGroupRef.current.rotation.y = elapsed * 0.1;
    }

    // Update orbiting InstancedMesh data nodes
    const mesh = instancedNodesRef.current;
    if (mesh) {
      const orbitSpread = 1 + exp * 0.55 + (mode === 'mesh' ? 0.15 : 0);
      for (let i = 0; i < NODE_COUNT; i++) {
        const o = nodeOrbits[i];
        const angle = o.phase + (reducedMotion ? 0 : elapsed * o.speed);
        const r = o.baseRadius * orbitSpread;
        _tempVec.set(
          Math.cos(angle) * r,
          Math.sin(angle * 1.5) * o.inclination * orbitSpread,
          Math.sin(angle) * r
        );
        _dummyObj.position.copy(_tempVec);
        _dummyObj.rotation.set(angle, angle * 0.5, 0);
        _dummyObj.scale.setScalar(o.scale);
        _dummyObj.updateMatrix();
        mesh.setMatrixAt(i, _dummyObj.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }
  });

  const primaryAccentHex =
    mode === 'zero-trust' ? '#10B981' : mode === 'mesh' ? '#06B6D4' : '#2563EB';
  const secondaryAccentHex = mode === 'zero-trust' ? '#06B6D4' : '#2563EB';

  return (
    <group position={[0, 0.15, 0]}>
      <group ref={rootGroupRef}>
        {/* Part 1: Inner Cryptographic Core (PBR Anisotropic Metallic / Glass) */}
        <mesh ref={innerCoreRef} geometry={innerCoreGeo}>
          <meshPhysicalMaterial
            color={primaryAccentHex}
            emissive={primaryAccentHex}
            emissiveIntensity={0.28}
            metalness={0.88}
            roughness={0.18}
            clearcoat={1.0}
            clearcoatRoughness={0.12}
          />
        </mesh>

        {/* Part 2: Geodesic Shield Translucent Shell */}
        <mesh ref={outerLatticeRef} geometry={outerGeo} renderOrder={2}>
          <meshPhysicalMaterial
            color="#0F172A"
            metalness={0.4}
            roughness={0.25}
            transparent
            opacity={isSoftwareGl ? 0.16 : 0.22}
            depthWrite={false}
          />
        </mesh>

        {/* Part 3: Geodesic Shield Precision Wireframe */}
        <lineSegments ref={outerWireRef} geometry={outerEdgesGeo} renderOrder={3}>
          <lineBasicMaterial color="#06B6D4" transparent opacity={0.68} />
        </lineSegments>

        {/* Part 4: Primary Gyroscopic Verification Ring */}
        <mesh ref={primaryRingRef} geometry={ringPrimaryGeo}>
          <meshStandardMaterial
            color={primaryAccentHex}
            emissive={primaryAccentHex}
            emissiveIntensity={0.45}
            metalness={0.75}
            roughness={0.3}
          />
        </mesh>

        {/* Part 5: Secondary Orthogonal Ring */}
        <mesh ref={secondaryRingRef} geometry={ringSecondaryGeo}>
          <meshStandardMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.35}
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>

        {/* Part 6: 3 Orbital Spline Trajectories */}
        <group ref={splineGroupRef}>
          {splineGeometries.map((geo, idx) => (
            <mesh key={idx} geometry={geo}>
              <meshStandardMaterial
                color={idx === 1 ? '#06B6D4' : secondaryAccentHex}
                emissive={idx === 1 ? '#06B6D4' : secondaryAccentHex}
                emissiveIntensity={0.3}
                metalness={0.5}
                roughness={0.35}
                transparent
                opacity={0.55}
              />
            </mesh>
          ))}
        </group>

        {/* Part 7: Instanced Orbiting Cryptographic Nodes */}
        <instancedMesh
          ref={instancedNodesRef}
          args={[nodeGeo, undefined, NODE_COUNT]}
          frustumCulled={false}
        >
          <meshStandardMaterial
            metalness={0.7}
            roughness={0.22}
            emissive="#06B6D4"
            emissiveIntensity={0.2}
          />
        </instancedMesh>
      </group>

      {/* Part 8: Grounded Contact Shadow Plane */}
      {contactShadowTexture && (
        <mesh position={[0, -2.85, 0]} rotation={[-Math.PI / 2, 0, 0]} renderOrder={1}>
          <planeGeometry args={[6.5, 6.5]} />
          <meshBasicMaterial
            map={contactShadowTexture}
            transparent
            opacity={0.75}
            depthWrite={false}
            polygonOffset
            polygonOffsetFactor={-1}
            polygonOffsetUnits={-1}
          />
        </mesh>
      )}
    </group>
  );
};

export const NetworkShield3D: React.FC = () => {
  const [mode, setMode] = useState<ShieldMode>('lattice');
  const [explodedFactor, setExplodedFactor] = useState<number>(0);
  const [dockCollapsed, setDockCollapsed] = useState<boolean>(false);
  const [webglLost, setWebglLost] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  const isSoftwareGl = useMemo(() => detectSoftwareWebGL(), []);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    checkViewport();

    window.addEventListener('resize', checkViewport, { passive: true });
    motionQuery.addEventListener('change', handleMotionChange);
    return () => {
      window.removeEventListener('resize', checkViewport);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Keyboard shortcut 'H' to toggle HUD dock
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === 'h' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        setDockCollapsed((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] lg:h-full min-h-[460px] rounded-2xl bg-[#0F1219] border border-white/10 overflow-hidden select-none">
      {/* Subtle Ambient Radial Glow Behind 3D Lattice */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.16),rgba(6,182,212,0.06)_48%,transparent_75%)]"
      />

      {/* Top-Left Minimal Spec Header (Unobstructed Viewport Center) */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08090C]/90 border border-white/10 text-xs text-[#9CA3AF]">
        <Shield className="w-3.5 h-3.5 text-[#06B6D4]" />
        <span className="font-medium text-[#F9FAFB]">Cryptographic Mesh Lattice</span>
        <span aria-hidden="true">·</span>
        <span className="font-mono tabular-nums text-[11px] text-[#06B6D4]">
          {mode === 'lattice'
            ? 'GAMP-5 / Zero-Trust'
            : mode === 'zero-trust'
            ? 'WebCrypto Enclave'
            : 'P2P Node Topology'}
        </span>
      </div>

      {/* Dedicated WebGL Canvas Container or Fallback */}
      {webglLost ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
          <svg
            className="w-32 h-32 text-[#06B6D4] mb-4 opacity-80"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <polygon
              points="60,18 98,40 98,80 60,102 22,80 22,40"
              stroke="#2563EB"
              strokeWidth="1.8"
              fill="rgba(37,99,235,0.1)"
            />
            <circle cx="60" cy="60" r="16" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="2" />
          </svg>
          <p className="text-sm font-semibold text-[#F9FAFB] mb-1">
            Static Cryptographic Topology View
          </p>
          <p className="text-xs text-[#9CA3AF] max-w-xs mb-4">
            WebGL rendering context is paused. Click below to restore the interactive 3D lattice.
          </p>
          <button
            type="button"
            onClick={() => setWebglLost(false)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#2563EB] text-[#F9FAFB] hover:bg-[#1D4ED8] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restore 3D Viewport</span>
          </button>
        </div>
      ) : (
        <div className="w-full h-full">
          <Canvas
            dpr={isSoftwareGl ? 1 : [1, 1.5]}
            frameloop={isSoftwareGl ? 'demand' : 'always'}
            camera={{ position: [0, 0.3, 6.2], fov: 42, near: 0.1, far: 50 }}
            gl={{
              antialias: !isSoftwareGl,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            onCreated={({ gl }) => {
              const canvas = gl.domElement;
              canvas.addEventListener(
                'webglcontextlost',
                (event) => {
                  event.preventDefault();
                  setWebglLost(true);
                },
                false
              );
              canvas.addEventListener(
                'webglcontextrestored',
                () => {
                  setWebglLost(false);
                },
                false
              );
            }}
          >
            <StudioEnvironment isSoftwareGl={isSoftwareGl} />

            {/* 3-Point Warm/Cool Studio Lighting Rig */}
            <hemisphereLight args={[0x38bdf8, 0x08090c, 0.85]} />
            <directionalLight position={[5, 6, 5]} intensity={2.2} color="#F8FAFC" />
            <directionalLight position={[-5, -3, -4]} intensity={1.4} color="#06B6D4" />
            <pointLight position={[0, 3.5, -3]} intensity={1.6} color="#2563EB" />

            <CryptographicLattice
              mode={mode}
              explodedFactor={explodedFactor}
              isMobile={isMobile}
              reducedMotion={reducedMotion}
              isSoftwareGl={isSoftwareGl}
            />
          </Canvas>
        </div>
      )}

      {/* Unified Collapsible Bottom Control Dock (Solid dark surface — zero backdrop-filter over WebGL) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 w-[94%] max-w-[520px] flex flex-col items-center">
        <button
          type="button"
          onClick={() => setDockCollapsed((prev) => !prev)}
          aria-expanded={!dockCollapsed}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-t-lg bg-[#08090C] border border-b-0 border-white/10 text-[11px] font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors cursor-pointer"
        >
          {dockCollapsed ? (
            <>
              <ChevronUp className="w-3 h-3 text-[#06B6D4]" />
              <span>Show Controls</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-3 h-3 text-[#06B6D4]" />
              <span>Hide Controls</span>
            </>
          )}
        </button>

        {!dockCollapsed && (
          <div className="w-full rounded-xl bg-[#08090C] border border-white/10 px-3.5 py-2.5 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Topology Mode Selector */}
            <div className="flex items-center gap-1 bg-[#161B26] p-1 rounded-lg border border-white/5 w-full sm:w-auto justify-center">
              {(
                [
                  { id: 'lattice', label: 'Shield Lattice' },
                  { id: 'zero-trust', label: 'Zero-Trust Core' },
                  { id: 'mesh', label: 'P2P Mesh' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMode(item.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    mode === item.id
                      ? 'bg-[#2563EB] text-[#F9FAFB]'
                      : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Exploded View Separation Slider */}
            <label className="flex items-center gap-2 text-[11px] text-[#9CA3AF] w-full sm:w-auto justify-center">
              <span className="whitespace-nowrap shrink-0">Explode</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.02}
                value={explodedFactor}
                onChange={(e) => setExplodedFactor(parseFloat(e.target.value))}
                aria-label="Explode 3D lattice layers"
                className="w-20 sm:w-24 accent-[#06B6D4] cursor-pointer"
              />
              <span className="font-mono tabular-nums text-[10px] text-[#F9FAFB] w-7 text-right">
                {Math.round(explodedFactor * 100)}%
              </span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

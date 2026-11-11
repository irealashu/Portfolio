import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ABOUT_PILLARS,
  EXECUTIVE_METRICS,
  EXPERTISE_ITEMS,
  COMPETENCY_GROUPS,
  EDUCATION_ITEMS,
  CAREER_MILESTONES,
  VALIDATED_SYSTEMS,
} from './portfolioData';

test('executive metrics reflect 18 Jan 2021 - Present timeline', () => {
  assert.equal(EXECUTIVE_METRICS.length, 4);
  assert.equal(EXECUTIVE_METRICS[0].value, '5+');
  assert.equal(EXECUTIVE_METRICS[1].value, '15+');
  assert.equal(EXECUTIVE_METRICS[2].value, '0');
  assert.equal(EXECUTIVE_METRICS[3].value, 'ALCOA++');
});

test('competency groups replace percentage bars with concrete deliverables', () => {
  assert.equal(COMPETENCY_GROUPS.length, 4);
  for (const group of COMPETENCY_GROUPS) {
    assert.ok(group.deliverables.length >= 3, `Expected deliverables in ${group.category}`);
  }
});

test('education items contain only M.Sc. (2018 – 2020) and B.Sc. (2015 – 2018) from VBSPU, Jaunpur without division or CGPA', () => {
  assert.equal(EDUCATION_ITEMS.length, 2);

  const msc = EDUCATION_ITEMS[0];
  assert.equal(msc.degree, 'Master of Science (M.Sc.) in Chemistry');
  assert.equal(msc.period, '2018 – 2020');
  assert.ok(msc.institution.includes('VBSPU'));
  assert.ok(msc.institution.includes('Jaunpur'));
  assert.ok(!msc.degree.includes('CGPA'));
  assert.ok(!msc.leftColumn.includes('CGPA'));
  assert.ok(!msc.leftColumn.includes('First Division'));

  const bsc = EDUCATION_ITEMS[1];
  assert.equal(bsc.degree, 'Bachelor of Science (B.Sc.) in Chemistry');
  assert.equal(bsc.period, '2015 – 2018');
  assert.ok(bsc.institution.includes('VBSPU'));
  assert.ok(bsc.institution.includes('Jaunpur'));
});

test('career timeline starts on 18 Jan 2021, uses Jubilant Generics Limited, and includes company logos', () => {
  assert.equal(CAREER_MILESTONES.length, 4);
  assert.equal(CAREER_MILESTONES[0].organization, 'PwC India');
  assert.equal(CAREER_MILESTONES[1].organization, 'Jubilant Generics Limited');
  assert.equal(CAREER_MILESTONES[2].organization, 'Macleods Pharmaceuticals Ltd.');
  assert.equal(CAREER_MILESTONES[3].organization, 'Alkem Laboratories Ltd.');

  const earliestRole = CAREER_MILESTONES[CAREER_MILESTONES.length - 1];
  assert.ok(earliestRole.period.includes('18 Jan 2021'));

  for (const milestone of CAREER_MILESTONES) {
    assert.ok(
      milestone.logoUrl.startsWith('./logos/') && milestone.logoUrl.endsWith('.svg'),
      `Expected SVG logo path for ${milestone.organization}`
    );
  }
});

test('validated systems catalog covers all GxP and enterprise categories', () => {
  assert.ok(VALIDATED_SYSTEMS.length >= 6);
  const categories = new Set(VALIDATED_SYSTEMS.map((s) => s.category));
  assert.ok(categories.has('Enterprise & Governance'));
  assert.ok(categories.has('Chromatography & Titration'));
  assert.ok(categories.has('Spectroscopy & Thermal'));
  assert.equal(ABOUT_PILLARS.length, 4);
  assert.equal(EXPERTISE_ITEMS.length, 6);
});

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

test('education items specify VBSPU, Jaunpur for M.Sc. and B.Sc. in Chemistry', () => {
  assert.ok(EDUCATION_ITEMS[0].institution.includes('VBSPU'));
  assert.ok(EDUCATION_ITEMS[0].institution.includes('Jaunpur'));
  assert.ok(EDUCATION_ITEMS[1].institution.includes('VBSPU'));
  assert.ok(EDUCATION_ITEMS[1].institution.includes('Jaunpur'));
});

test('career timeline starts on 18 Jan 2021', () => {
  assert.equal(CAREER_MILESTONES.length, 4);
  const earliestRole = CAREER_MILESTONES[CAREER_MILESTONES.length - 1];
  assert.ok(earliestRole.period.includes('18 Jan 2021'));
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

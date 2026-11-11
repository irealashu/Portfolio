import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ABOUT_PILLARS,
  EXECUTIVE_METRICS,
  EXPERTISE_ITEMS,
  SKILL_BARS,
  EDUCATION_ITEMS,
  CAREER_MILESTONES,
  VALIDATED_SYSTEMS,
} from './portfolioData';

test('executive metrics match Ashutosh Singh portfolio specifications', () => {
  assert.equal(EXECUTIVE_METRICS.length, 4);
  assert.equal(EXECUTIVE_METRICS[0].value, '6');
  assert.equal(EXECUTIVE_METRICS[1].value, '15+');
  assert.equal(EXECUTIVE_METRICS[2].value, '0');
  assert.equal(EXECUTIVE_METRICS[3].value, '100%');
});

test('all skill bars have valid percentage bounds between 1 and 100', () => {
  assert.equal(SKILL_BARS.length, 6);
  for (const skill of SKILL_BARS) {
    assert.ok(skill.percentage > 0 && skill.percentage <= 100, `Invalid percentage for ${skill.name}`);
  }
});

test('validated systems catalog covers all GxP and enterprise categories', () => {
  assert.ok(VALIDATED_SYSTEMS.length >= 6);
  const categories = new Set(VALIDATED_SYSTEMS.map((s) => s.category));
  assert.ok(categories.has('Enterprise & Governance'));
  assert.ok(categories.has('Chromatography & Titration'));
  assert.ok(categories.has('Spectroscopy & Thermal'));
});

test('about pillars, expertise items, education, and career milestones are populated', () => {
  assert.equal(ABOUT_PILLARS.length, 4);
  assert.equal(EXPERTISE_ITEMS.length, 6);
  assert.equal(EDUCATION_ITEMS.length, 3);
  assert.equal(CAREER_MILESTONES.length, 4);
});

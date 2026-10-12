// Assert-based test for saasStore seed data integrity
import assert from 'node:assert';
import { SEED_RECORDS, SEED_APPROVALS, SEED_DOCS, SEED_TASKS } from './lib/saasStore.js';

assert(Array.isArray(SEED_RECORDS) && SEED_RECORDS.length > 0, 'SEED_RECORDS must be non-empty array');
assert(Array.isArray(SEED_APPROVALS) && SEED_APPROVALS.length > 0, 'SEED_APPROVALS must be non-empty array');
assert(Array.isArray(SEED_DOCS) && SEED_DOCS.length > 0, 'SEED_DOCS must be non-empty array');
assert(Array.isArray(SEED_TASKS) && SEED_TASKS.length > 0, 'SEED_TASKS must be non-empty array');

console.log('saasStore self-check passed.');

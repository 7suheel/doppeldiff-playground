import { describe, expect, it } from 'vitest';
import { initials, truncate } from '../src/text.js';

describe('truncate', () => {
  it('leaves short text alone', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });
});

describe('initials', () => {
  it('takes the first letter of each word', () => {
    expect(initials('Ada Lovelace')).toBe('AL');
    expect(initials('  grace   hopper ')).toBe('GH');
  });
});

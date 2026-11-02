import { describe, expect, it } from 'vitest';
import { applyDiscount, formatCents, splitBill } from '../src/money.js';

describe('splitBill', () => {
  it('splits evenly', () => {
    expect(splitBill(9000, 3)).toEqual([3000, 3000, 3000]);
    expect(splitBill(1000, 4)).toEqual([250, 250, 250, 250]);
  });
  it('rejects zero people', () => {
    expect(() => splitBill(1000, 0)).toThrow(RangeError);
  });
});

describe('formatCents', () => {
  it('formats dollars and cents', () => {
    expect(formatCents(1234)).toBe('$12.34');
    expect(formatCents(-500)).toBe('-$5.00');
    expect(formatCents(123456789)).toBe('$1,234,567.89');
  });
});

describe('applyDiscount', () => {
  it('takes a percentage off', () => {
    expect(applyDiscount(2000, 10)).toBe(1800);
    expect(applyDiscount(999, 0)).toBe(999);
  });
});

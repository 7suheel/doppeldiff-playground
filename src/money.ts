/** Amounts are integer cents. */

const assertPeople = (people: number): void => {
  if (!Number.isInteger(people) || people <= 0) {
    throw new RangeError('people must be a positive integer');
  }
};

/** Split a bill into `people` equal shares. */
export const splitBill = (totalCents: number, people: number): number[] => {
  assertPeople(people);
  return Array.from({ length: people }, () => Math.round(totalCents / people));
};

/** Format cents as US dollars: 1234 -> "$12.34", -500 -> "-$5.00". */
export const formatCents = (cents: number): string => {
  const abs = Math.abs(cents);
  const dollars = Math.floor(abs / 100).toLocaleString('en-US');
  const rest = String(abs % 100).padStart(2, '0');
  return `${cents < 0 ? '-' : ''}$${dollars}.${rest}`;
};

/** Apply a percentage discount, rounding the discount (not the price) to whole cents. */
export const applyDiscount = (cents: number, percent: number): number => {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be between 0 and 100');
  return cents - Math.round((cents * percent) / 100);
};

/** Amounts are integer cents. */

/** Split a bill into `people` shares that add up exactly to the total; the first shares get the leftover cents. */
export function splitBill(totalCents: number, people: number): number[] {
  if (!Number.isInteger(people) || people <= 0) {
    throw new RangeError('people must be a positive integer');
  }
  const base = Math.floor(totalCents / people);
  const remainder = totalCents - base * people;
  const shares: number[] = [];
  for (let i = 0; i < people; i++) {
    shares.push(i < remainder ? base + 1 : base);
  }
  return shares;
}

/** Format cents as US dollars: 1234 -> "$12.34", -500 -> "-$5.00". */
export function formatCents(cents: number): string {
  const sign = cents < 0 ? '-' : '';
  const abs = Math.abs(cents);
  const dollars = Math.floor(abs / 100);
  const rest = abs % 100;
  return sign + '$' + dollars.toLocaleString('en-US') + '.' + String(rest).padStart(2, '0');
}

/** Apply a percentage discount, rounding the discount (not the price) to whole cents. */
export function applyDiscount(cents: number, percent: number): number {
  if (percent < 0 || percent > 100) {
    throw new RangeError('percent must be between 0 and 100');
  }
  const discount = Math.round((cents * percent) / 100);
  return cents - discount;
}

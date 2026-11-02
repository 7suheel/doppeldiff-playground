/** Shorten text to at most `max` characters, ending with "…" when it was cut. */
export function truncate(text: string, max: number): string {
  if (text.length <= max) {
    return text;
  }
  return text.slice(0, Math.max(max - 1, 0)) + '…';
}

/** Initials of a name: "Ada Lovelace" -> "AL". */
export function initials(name: string): string {
  let result = '';
  for (const word of name.trim().split(/\s+/)) {
    if (word.length > 0) {
      result += word[0]!.toUpperCase();
    }
  }
  return result;
}

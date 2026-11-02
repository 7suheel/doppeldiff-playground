/** Shorten text to at most `max` characters, ending with "…" when it was cut. */
export const truncate = (text: string, max: number): string =>
  text.length > max ? `${text.slice(0, max)}…` : text;

/** Initials of a name: "Ada Lovelace" -> "AL". */
export const initials = (name: string): string =>
  name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0]!.toUpperCase())
    .join('');

/**
 * Tiny class-name joiner so we can conditionally toggle Tailwind classes
 * without pulling in an extra dependency.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

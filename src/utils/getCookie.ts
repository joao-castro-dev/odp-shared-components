/**
 * Gets a cookie by string name and return it's value or null.
 * @version 0.1.0
 * @param name Sting of the cookie to be found.
 * @returns Value of the cookie if found or null if not found.
 */
export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

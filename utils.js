// Regex to remove non-alphanumeric
export const removeNonAlphanumeric = (string) =>
  string.replace(/[^0-9a-z]/gi, "");

export const getCharacterMap = (string) => {
  let charMap = {};

  for (let str of string) {
    charMap[str] = charMap[str] + 1 || 1;
  }
  return charMap;
};

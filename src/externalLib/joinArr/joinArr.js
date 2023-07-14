export const joinArr = (arr, sep = "") => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr.length === 0) {
    return null;
  }
  return arr.join(sep);
};
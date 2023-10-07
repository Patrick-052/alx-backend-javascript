/* Function that checks whether all elements
in the array are present in the given set. */

export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!set.has(item)) return false;
  }
  return true;
}

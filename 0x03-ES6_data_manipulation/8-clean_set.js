/* Function to return a string of
the set values separated by a hyphen (-) */

export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  let result = '';

  for (let item of set) {
    if (item.startsWith(startString)) {
      if (result.length !== 0) {
        result += '-';
      }
      result += item.slice(startString.length);
    }
  }

  return result;
}

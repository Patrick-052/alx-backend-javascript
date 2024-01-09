/* Function to return a string of
the set values separated by a hyphen (-) */

export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') return '';
  const array = [];
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      const slicedString = startString === '' ? item : item.slice(startString.length);
      array.push(slicedString);
    }
  });
  return array.join('-');
}

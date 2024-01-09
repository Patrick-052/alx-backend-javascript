/* Function to return a string of
the set values separated by a hyphen (-) */

export default function cleanSet(set, startString) {
  const array = [];
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      if (startString === '') return '';
      array.push(item.slice(startString.length));
    }
  });
  return array.join('-');
}

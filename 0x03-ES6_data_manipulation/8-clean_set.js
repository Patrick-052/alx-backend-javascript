/* Function to return a string of
the set values separated by a hyphen (-) */

export default function cleanSet(_set, startString) {
  if (typeof _set !== 'object') return '';
  if (typeof startString !== 'string') return '';
  if (startString.length === 0) return '';

  const stringSet = [];
  [..._set].forEach((x) => {
    if (x && x.indexOf(startString) === 0) stringSet.push(x.replace(startString, ''));
  });
  return stringSet.join('-');
}

// export default function cleanSet(set, startString) {
//   const array = [];
//   set.forEach((item) => {
//     if (item.startsWith(startString)) {
//       if (startString === '') return '';
//       array.push(item.slice(startString.length));
//     }
//   });
//   return array.join('-');
// }

/* Function to return a string of
the set values separated by a hyphen (-) */

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const string = Array.from(set).filter((str) => str.startsWith(startString));
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].slice(startString.length);
  }
  return string.join('-');
}

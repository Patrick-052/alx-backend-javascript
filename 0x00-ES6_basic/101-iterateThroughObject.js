/* Printing iterations with a specific limitation */

export default function iterateThroughObject(reportWithIterator) {
  /* another way to do it:
  let n = reportWithIterator.next();
  let res = '';

  while (!n.done) {
    res += `${n.value} | `;
    n = reportWithIterator.next();
  }
  return res.slice(0, res.length - 3);
  */
  return `${reportWithIterator.join(' | ')}`;
}

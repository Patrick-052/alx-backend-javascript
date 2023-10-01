/* More iterators and object methods */

export default function createIteratorObject(report) {
  const myarray = [];
  for (const item of Object.values(report.allEmployees)) {
    myarray.push(...item);
  }
  return myarray;
}

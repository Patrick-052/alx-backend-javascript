/* computed property names in ES6 */

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}

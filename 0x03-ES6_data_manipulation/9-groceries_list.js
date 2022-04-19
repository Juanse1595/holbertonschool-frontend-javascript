/* Create a function named groceriesList that returns a map of groceries with
the following items (name, quantity):

Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5 */

export default function groceriesList() {
  const groceriesMap = new Map();
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  for (const grocery of groceries) {
    groceriesMap.set(...grocery);
  }
  return groceriesMap;
}

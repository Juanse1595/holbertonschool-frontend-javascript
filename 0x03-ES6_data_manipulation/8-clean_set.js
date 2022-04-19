/* Create a function named cleanSet that returns a string of all
the set values that start with a specific string (startString).

It accepts two arguments: a set (Set) and a startString (String).

When a value starts with startString you only append the rest
of the string. The string contains all the values of the set separated by -. */

export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  let finalString = '';
  let firstWord = true;
  // First, loop over the set
  for (const word of set) {
    // Now, chech if substring is in string
    if (word.includes(startString)) {
      if (!firstWord) {
        finalString += '-';
      } else {
        firstWord = false;
      }
      finalString += word.replace(startString, '');
    }
  }
  return finalString;
}

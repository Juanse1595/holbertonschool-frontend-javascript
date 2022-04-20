/* Create a directory task_1 and copy these configuration files into this
folder: package.json, tsconfig.json, webpack.config.js

- firstName(string) and lastName(string). These two attributes should only
be modifiable when a Teacher is first initialized
- fullTimeEmployee(boolean) this attribute should always be defined
- yearsOfExperience(number) this attribute is optional
- location(string) this attribute should always be defined
- Add the possibility to add any attribute to the Object like contract(boolean)
without specifying the name of the attribute
*/

interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any
}

/* Write an interface named Directors that extends Teacher. It requires an
attribute named numberOfReports(number) */

interface Directors extends Teacher {
  numberOfReports: number
}

/* Write a function printTeacher:

- It accepts two arguments firstName and lastName
- It returns the first letter of the firstName and the full lastName
- Example: printTeacher("John", "Doe") -> J. Doe
Write an interface for the function named printTeacherFunction.
*/

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

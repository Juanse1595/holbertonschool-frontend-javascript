/*
Create a file React.ts and write a React Class in the same namespace.

- Add a new attribute experienceTeachingReact? (number) to the Teacher interface
- In the class, write a method named getRequirements that will return a string
Here is the list of requirements for React
- Write a method named getAvailableTeacher that will return a string
Available Teacher: <first name of teacher>
- If the teacher doesn’t have any experience in teaching React, then the method
should return a string No available teacher
*/
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React extends Subject{
    getRequirements() {
      return 'Here is the list of requirements for React';
    }
    getAvailableTeacher() {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
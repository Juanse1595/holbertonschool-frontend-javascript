/* Create a function getListStudentIds that returns an array of ids from a
list of object. */

export default function getListStudentIds(objArray) {
  if (objArray.constructor !== Array) {
    return [];
  }
  return objArray.map((obj) => obj.id);
}

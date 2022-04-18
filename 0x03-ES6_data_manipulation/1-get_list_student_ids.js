// Create a function getListStudentIds that returns an array of ids from a list of object.

export default function getListStudentIds(obj_array) {
  if (obj_array.constructor !== Array) {
    return [];
  }
  return obj_array.map((obj) => obj.id);
}

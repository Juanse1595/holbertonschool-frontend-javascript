import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classA = new ClassRoom(19);
  const classB = new ClassRoom(20);
  const classC = new ClassRoom(34);
  return [classA, classB, classC];
}

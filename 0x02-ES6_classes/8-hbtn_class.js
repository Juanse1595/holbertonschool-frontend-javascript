export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  Number() {
    return this._size;
  }

  String() {
    return this._location;
  }
}

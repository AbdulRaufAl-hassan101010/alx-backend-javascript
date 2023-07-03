class Person {
  constructor(id, firstname, location) {
    this.id = id;
    thid.firstname = firstname;
    this.location = location;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (typeof value !== "number") {
      return new TypeError("id must be a number");
    }

    this.id = value;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(value) {
    if (typeof value !== "string") {
      return new TypeError("firstname must be a number");
    }

    this.firstname = value;
  }

  get location() {
    return this.location;
  }

  set location(value) {
    if (typeof value !== "string") {
      return new TypeError("location must be a number");
    }

    this.location = value;
  }
}

export default Person;

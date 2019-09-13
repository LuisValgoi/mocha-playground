class User {
  constructor() {
    this.name = null;
    this.lastName = null;
  }

  buildFullname(name, lastName) {
    if (this._isAvailableToBuild(name, lastName)) {
      this.name = name;
      this.lastName = lastName;
    }
  }

  _isAvailableToBuild(name, lastName) {
    if (!name) {
      throw new Error("No name argument found");
    }
    if (!lastName) {
      throw new Error("No lastName argument found");
    }
  }

  getFullName() {
    return this.name + " " + this.lastName;
  }
}
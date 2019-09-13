module.exports = class User {
  constructor() {
    this.name = null;
    this.lastName = null;
    this.fullName = null;
  }

  buildFullName(name, lastName) {
    if (this.isAvailableToBuildFullName(name, lastName)) {
      this.name = name;
      this.lastName = lastName;
      if (name && lastName) {
        this.fullName = name + " " + lastName;
      }
    }
  }

  isAvailableToBuildFullName(name, lastName) {
    if (!name) {
      throw new Error("No name argument found");
    }
    if (!lastName) {
      throw new Error("No lastName argument found");
    }
  }

  getFullName() {
    let fullName = "N/A";
    if (this.lastName) { 
      fullName = this.lastName;
    }

    if(this.name && !this.lastName) { 
      fullName = this.lastName
    } else if (this.name && this.lastName) { 
      fullName = fullName + ", " + this.lastName;
    }
    return fullName;
  }
}


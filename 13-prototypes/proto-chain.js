// The almighty __proto__

const person = {
  name: "Thanos",
  getName: function () {
    console.log(this.name);
  },
};

const anotherPerson = Object.create(person);

// Constructor

// Inheritance

let person = {
  firstName: "Hanad",
  lastName: "cabdirisaq",
  age: 25,
  occupation: "software developer",
  walk: function() {
    
    console.log(this.firstName + " is walking")
  },
    jump: function() {
        
    console.log(this.firstName + " is jumping")
  }
};

// person.walk();
// person.jump();

// console.log(person["lastName"])

delete person.firstName
console.log(person);

// let person2 = {
//   firstName: "xashi",
//   lastName: " yube",
//   age: 35,
//   occupation: "docter",
// };

// let person3 = {
//   firstName: "axmad",
//   lastName: "awil",
//   age: 28,
//   occupation: "software engineer",
// };

// let person4 = {};
// person4.firstName = "ikran"
// person4.age = 20
// person4.lastName = "jamac"

// let person5 = new Object();

// person.firstName = "qalid"




// console.log(person);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// console.log(person5);

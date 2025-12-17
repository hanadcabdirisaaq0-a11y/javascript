// let docter = {
//  firstName : "Hanad",
//  lastName : "Cabdirisaaq",
//  age : 55,
//  phoneNumber: +252612789878,

//  treatPatient : function() {

//     console.log(this.firstName + " is treating a patient" )
//  }

// }

// let docter2 = {
//   firstName: "ikram",
//   lastName: "jama",
//   age: 25,
//   phoneNumber: +252614329878,

//   treatPatient: function () {
//     console.log(this.firstName + " is treating a patient");
//   },
// };
// console.log(docter2.treatPatient())

class Doctor {
  constructor(firstName, lastName, age, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }

  treatPatient() {
    console.log(this.firstName + " is treating a patient");
  }
}

// create an object (instance) from the class
const doctor1 = new Doctor("Hanad", "Cabdirisaaq", 55, "+252612789878");
const doctor2 = new Doctor("sumayo", "jama", 55, "+252612349878");
// call the method
doctor2.treatPatient();

class Patient {
  constructor(firstName, lastName, age, illness, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.illness = illness;
    this.phoneNumber = phoneNumber;
  }

  describe() {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " is " +
        this.age +
        " years old and has " +
        this.illness
    );
  }
}

// create a patient object
const patient1 = new Patient(
  "Ali",
  "Mohamed",
  30,
  "Malaria",
  "+252615123456"
);

// call method
patient1.describe();

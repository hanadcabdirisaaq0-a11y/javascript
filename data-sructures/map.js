// class Hospital {
//   constructor() {
//     this.patients = new Map();
//   }

//   addPatient(id, info) {
//     this.patients.set(id, info);
//   }

//   getPatient(id) {
//     return this.patients.get(id);
//   }
// }

// const hospital = new Hospital();

// hospital.addPatient("P001", {
//   name: "Ali",
//   illness: "Malaria",
// });

// hospital.addPatient("P002", {
//   name: "Amina",
//   illness: "Flu",
// });

// console.log(hospital.getPatient("P001"));

const fruits = new Map();

fruits.set("apple", "red");
fruits.set("banana", "yellow");
fruits.set("grape", "purple");

console.log(fruits.get("apple"));   // red
console.log(fruits.get("banana"));  // yellow


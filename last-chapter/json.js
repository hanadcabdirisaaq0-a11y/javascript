// let perso = {
//     firstName: "hanad",
// lastName: "cabdirisaaq",
// age: 30
// }

const data = { firstName: "hanad", lastName: "cabdi", age: 25 };
const jsonString = Jason.stringify(data);

console.log(jsonString);

const backToObject = jsonString.perse(jsonString);

console.log(backToObject.firstName);



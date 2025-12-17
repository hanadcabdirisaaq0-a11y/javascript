let person1 ={
    name: "hanad",
    age: 25,
    address: {
        city: "mogadisho",
        zip: "1000"
    }
};
// console.log(person1.name)
// console.log(person1.address.city)
// console.log(person1["name"]);
// console.log(person1["age"]);

let {name,age,address} = person1
console.log(name)
console.log(address.city)

let students = [  "hanad","cabdi","axmad" ]
let  [  students1,student2,student3] =students
const userNotFound = new Error("the name of the user cannot be found")

try{
    let ali; 
console.log("hello, world");
console.log(true);
console.log(1,2,3);
console.log({name: "hanad" , age: 25});
console.log("sum:", 5 +10);
console.log("current time is", new Date());
console.log("random number", Math.random());
console.log("uppercase", "helloworld".toUpperCase());
console.log("user", {id: 1, username: "coder123"});
}

catch(error){
    console.log("an error has happened and it was handled")
    console.log(error.massage)
}
finally {
    console.log("i am guaranteed to run weather there is an error or not")

}
 
class User {
  constructor(name) {
    this.name = name;
  }
  greet = () => console.log(`Hello ${this.name}`);
}
const nums = [2, 4, 6, 8];
const doubled = nums.map((n) => n * 2);
const { name: userName } = new User("Hanad");
const fetchData = async () => await Promise.resolve("Loaded");
fetchData().then(console.log);
new User("Developer").greet();
const sum = (...n) => n.reduce((a, b) => a + b);
console.log("Sum:", sum(5, 10, 20));
console.log("Doubled:", doubled);

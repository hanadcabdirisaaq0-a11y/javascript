let saySomeNames = function*() {
yield"hanad";
yield "axmad";
yield "cabdi";
yield "nuur";
yield "zalmo";

}
let generator = saySomeNames()
console.log(generator.next())
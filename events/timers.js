function  function1() {


console.log("hello");
console.log("my name is hanad");
}

// setTimeout(function1,10000)

let timer = setInterval(function1, 1000);
function canceltimer(){
    clearInterval(timer)               
}                  
setTimeout(canceltimer,10000)
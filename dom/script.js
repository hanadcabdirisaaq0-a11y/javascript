// let firstH1 = document.getElementById("firstH1")
// firstH1.textContent = "hanad waaye"

let Toph1s = document.getElementsByName("Toph1s")
Toph1s[0].style.color = "blue"

let tagElements = document.getElementsByTagName("div");
tagElements[0].style.textTransform = "upperCase"


let bigfont = document.querySelectorAll(".bigfont")
bigfont[0].style.color = "green"

for (let i = 0; i <= 10;  i++) {
    
var secondH1 = document.createElement("h1");
secondH1.textContent = i + "this h1 was created in js";
secondH1.style.color = "blue";
secondH1.style.fontSize = "50px"
document.body.appendChild(secondH1);
    
    
}

let firstH1 = document.querySelector("firstH1");
firstH1.textContent = "hanad waaye";






var secondH1 = document.createElement("h1")
secondH1.textContent = "this h1 was created in js"
document.body.appendChild(secondH1)


var paragaraph = document.createElement("p")
paragaraph.textContent = "this is my paragaraph"
document.body.appendChild(paragaraph)
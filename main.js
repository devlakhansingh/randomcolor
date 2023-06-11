let h1 = document.querySelector("h1")
let body = document.querySelector("body")
let button = document.querySelector(".btn")

console.log(button)
 
const getcolor = ()=>{
const randomnumber = Math.floor(Math.random()*16777215) 
const randomcode = "#"+randomnumber.toString(16)
console.log(randomcode,randomnumber)
h1.innerHTML = randomcode
document.body.style.backgroundColor = randomcode
}
button.addEventListener("click",getcolor )
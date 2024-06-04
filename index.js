let input = document.querySelector("input");
let button = document.querySelector("button");
let span = document.querySelector("span");


button.addEventListener("click",convert)

function convert() {
   span.innerText = input.value * 60    
}
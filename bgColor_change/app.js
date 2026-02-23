const button =document.querySelector("#button");
const body =document.querySelector("body");

let letter = "0123456789abcdef";


function changecolor (){
// loop for hex codegenrate
let hexcolor = '#';
for (let i = 0; i < 6; i++) {
    hexcolor +=  letter[Math.floor(Math.random()*16)];
}
return hexcolor;
}

button.addEventListener("click" ,()=>{
    body.style.backgroundColor = changecolor();
});

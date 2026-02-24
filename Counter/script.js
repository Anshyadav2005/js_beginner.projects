const count = document.querySelector("#count")
const addition = document.querySelector("#addition")
const subtraction =document.querySelector("#subtraction")

let numcount = 0;
addition.addEventListener("click",()=>{
    numcount += 1;
    return count.innerHTML = `${numcount}`;
    })
subtraction.addEventListener("click",()=>{
    numcount -= 1;
    return count.innerHTML = `${numcount}`;
    })




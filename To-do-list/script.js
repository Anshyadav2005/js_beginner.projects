const input = document.querySelector("#task-input")
const addbutton = document.querySelector("#add-item")


function createTask(value){
    const div = document.createElement('div');
    div.className = 'tags';

    const span =document.createElement("span");
    span.className="added-item";
    span.textContent= value;

    const remove =document.createElement("button")
    remove.className="remove-item";
    remove.textContent="remove";

    
    remove.addEventListener("click",()=>{
        div.remove();
        localStorage.removeItem(value);
        
    })
    
    div.append(span,remove);
    document.body.appendChild(div);
}
function addTask(){
    const value = input.value.trim();
    
    if (value ==="")return;
    
    localStorage.setItem(value , JSON.stringify(value)) || [];
    createTask(value);

    input.value ="";
}
function relode (){
    for (let index = 0; index < localStorage.length; index++) {
        let key = localStorage.key(index);
        let value = localStorage.getItem(key);

        createTask(value);
        
    }
}

addbutton.addEventListener("click",()=>{
    addTask();
})
relode();





































// const value =input.addEventListener("input",()=>{
//     input.value;
// })

// function addspan(value){
//     const div =document.createElement('div');
//     div.innerHTML=`<div class="tags">
//             <span id="added-item">${value}</span>
//             <button id="remove-item">Remove</button>
//         </div>`
//     document.querySelector("body").appendChild(div)
// }

// addbutton.addEventListener("click",()=>{
//     if (span.innerHTML!=="") {
//             addspan(input.value);
//     }
//     span.innerHTML=`${input.value}`;
// })




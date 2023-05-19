const nc=document.querySelector(".notes-container");
const createbt=document.querySelector(".bt");
let notes=document.querySelectorAll(".input-box");
createbt.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images.png";
    nc.appendChild(inputBox).appendChild(img);
})
function shownotes(){
    nc.innerHTML=localStorage.getItem("notes");
}
shownotes();
function update(){
    localStorage.setItem("notes",nc.innerHTML);
}
nc.addEventListener("click",function(event){
    if(event.target.tagName==="IMG"){
        event.target.parentElement.remove();
        update();
    }
    else if(event.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup=function(){
                update();
            }
        })
    }
})
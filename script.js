var field = document.querySelector("main");
loadEvents();

function createElem(e,val) {
    let elem = document.createElement("li");
    let del = document.createElement("input");
    del.type = "checkbox";
    let intext = document.createElement("p");
    elem.classList.add("item");
    del.classList.add("del");
    // sticker.appendChild(elem);
    e.parentNode.previousElementSibling.appendChild(elem);
    intext.innerHTML = val;
    elem.appendChild(intext);
    elem.appendChild(del);
}

// Enter key access
var inputBars = document.querySelectorAll(".inputBar");
inputBars.forEach((e)=>{
    e.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            e.nextElementSibling.click();
        }
    });
})

function tick(e){
    let item = e.target.previousElementSibling;
    item.classList.toggle("crossed");
}

function clearDone() {
    let checked = document.querySelectorAll(".crossed");
    for (let i of checked) {
        i.parentNode.remove();
    }
};

function loadEvents(){
    var newList = document.querySelectorAll(".del");
    var addbtn = document.querySelectorAll(".addbtn");
    var clearbtn = document.querySelectorAll(".clearbtn");
    newList.forEach((e)=>e.addEventListener("click", tick));
    clearbtn.forEach((e)=>e.addEventListener("click", clearDone));
    addbtn.forEach((e)=>{
        e.addEventListener("click", function () {
            // let todo = document.getElementById("todo");
            createElem(e,e.previousElementSibling.value);
            // createElem(e,todo.value);
            var newList = document.querySelectorAll(".del");
            newList.forEach((e)=>e.addEventListener("click",tick));
            todo.value = "";
        });
    })
}

function createNote(){
    let note = document.createElement("div");
    let addSec = document.createElement("div");
    let elemList = document.createElement("ul");
    note.classList.add("note");
    addSec.classList.add("add");
    elemList.classList.add("elemList");
    let inputText = document.createElement("input");
    let inputSubmit = document.createElement("input");
    inputText.type="text";
    inputText.classList.add("inputBar");
    inputSubmit.type="submit";
    inputSubmit.classList.add("addbtn");
    let clearbtn = document.createElement("button");
    clearbtn.innerHTML="Clear Done";
    inputSubmit.value="+";
    console.log(inputText);
    inputText.setAttribute("placeholder","Enter new task...");
    addSec.append(inputText,inputSubmit,clearbtn)
    note.append(elemList,addSec);
    field.appendChild(note);
    inputBars = document.querySelectorAll(".inputBar");
}

newNote.addEventListener("click",()=>{
    createNote();
    loadEvents();
})
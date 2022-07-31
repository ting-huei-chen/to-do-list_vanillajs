var addbtn = document.getElementById("addbtn");
var field = document.querySelector("main");
var clearbtn = document.getElementById("clearbtn");
var sticker = document.getElementById("sticker");
var newNote = document.getElementById("newNote");
loadEvents();

function createElem(val) {
    let elem = document.createElement("li");
    let del = document.createElement("input");
    del.type = "checkbox";
    let intext = document.createElement("p");
    elem.classList.add("item");
    del.classList.add("del");
    sticker.appendChild(elem);
    intext.innerHTML = val;
    elem.appendChild(intext);
    elem.appendChild(del);
}

// Enter key access
document.getElementById("todo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    addbtn.click();
    }
});

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
    newList.forEach((e)=>e.addEventListener("click", tick));
    clearbtn.addEventListener("click", clearDone);
    addbtn.addEventListener("click", function () {
        let todo = document.getElementById("todo");
        createElem(todo.value);
        var newList = document.querySelectorAll(".del");
        newList.forEach((e)=>e.addEventListener("click",tick));
        todo.value = "";
    });
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
    inputSubmit.type="submit";
    let clearbtn = document.createElement("button");
    clearbtn.innerHTML="Clear Done";
    inputSubmit.value="+";
    console.log(inputText);
    inputText.setAttribute("placeholder","Enter new task...");
    addSec.append(inputText,inputSubmit,clearbtn)
    note.append(elemList,addSec);
    field.appendChild(note);
}

newNote.addEventListener("click",()=>{
    createNote();
})
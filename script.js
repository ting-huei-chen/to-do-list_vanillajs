var field = document.querySelector("main");
loadEvents();

function createElem(e,val) {
    console.log("create from: ",e);
    let elem = document.createElement("li");
    let del = document.createElement("input");
    del.type = "checkbox";
    let intext = document.createElement("p");
    elem.classList.add("item");
    del.classList.add("del");
    intext.innerHTML = val;
    console.log(intext);
    elem.append(intext,del)
    e.parentNode.previousElementSibling.appendChild(elem);
    console.log("create Done");
    loadEvents();
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
function addTrigger(e){
    let inputVal = e.target.previousElementSibling.value;
    createElem(e.target,inputVal);
    e.target.previousElementSibling.value="";
}

function clearDone() {
    let checked = document.querySelectorAll(".crossed");
    for (let i of checked) {
        i.parentNode.remove();
    }
};

function loadEvents(){
    var newList = document.querySelectorAll(".del");
    var addBTN = document.querySelectorAll(".addbtn");
    var clearbtn = document.querySelectorAll(".clearbtn");
    newList.forEach((e)=>e.addEventListener("click", tick));
    clearbtn.forEach((e)=>e.addEventListener("click", clearDone));
    addBTN.forEach((e)=>e.addEventListener("click",addTrigger));
    console.log("Events load");
}

function createNote(){
    let note = document.createElement("div");
    note.classList.add("note");
    let addSec = document.createElement("div");
    let elemList = document.createElement("ul");
    addSec.classList.add("add");
    elemList.classList.add("elemList");
    let inputText = document.createElement("input");
    let inputSubmit = document.createElement("input");
    inputText.type="text";
    inputText.classList.add("inputBar");
    inputSubmit.type="submit";
    inputSubmit.classList.add("addbtn");
    let clearbtn = document.createElement("button");
    clearbtn.classList.add("clearbtn");
    clearbtn.innerHTML="Clear Done";
    inputSubmit.value="+";
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
var addbtn = document.getElementById("addbtn");
var clearbtn = document.getElementById("clearbtn");
var sticker = document.getElementById("sticker");

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
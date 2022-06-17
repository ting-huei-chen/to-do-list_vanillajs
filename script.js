var addbtn = document.getElementById("addbtn");
var clearbtn = document.getElementById("clearbtn");
var sticker = document.getElementById("sticker");
var arr = document.querySelectorAll(".del");
var checked = document.querySelectorAll(".crossed");
loadEvents();
function createElem(val) {
    // console.log(val);
    let elem = document.createElement("div");
    let del = document.createElement("input");
    del.type = "checkbox";
    let intext = document.createElement("p");
    elem.classList.add("item");
    del.classList.add("del");
    sticker.appendChild(elem);
    intext.innerHTML = val;
    elem.appendChild(intext);
    elem.appendChild(del);
    let newList = document.querySelectorAll(".del");
}

// Enter key access
document.getElementById("todo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    addbtn.click();
    }
});


function tick(e){
    let item = e.target.previousElementSibling;
    console.log(item);
    if(e.target.checked){
        item.classList.add("crossed");
    }else{
        item.classList.remove("crossed");
    }
}


function crossfunc(array) {
    console.log("crossfunc:");
    console.log(array);
    for (let elem of array) {
        console.log(elem);
        elem.addEventListener("click", function (e) {
        console.log(elem.parentNode.querySelector("p").innerHTML);
        e.target
        tick(e);
        // elem.parentNode.querySelector("p").classList.toggle("crossed");
        });
    }
}

//   default item cross out


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
        console.log(newList);
        crossfunc(newList);
        todo.value = "";
    });
    console.log("...Events loaded.");

}
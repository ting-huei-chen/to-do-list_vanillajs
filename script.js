var addbtn = document.getElementById("addbtn");
      var clearbtn = document.getElementById("clearbtn");
      var sticker = document.getElementById("sticker");
      var arr = document.querySelectorAll(".del");
      var checked = document.querySelectorAll(".crossed");

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
      }

      document
        .getElementById("todo")
        .addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            addbtn.click();
          }
        });
      function crossfunc(array) {
        console.log("crossfunc:");
        console.log(array);
        for (let elem of array) {
          console.log(elem);
          elem.addEventListener("click", function () {
            console.log(elem.parentNode.querySelector("p").innerHTML);
            elem.parentNode.querySelector("p").classList.toggle("crossed");
          });
        }
      }
      //   default item cross out

      addbtn.addEventListener("click", function () {
        let todo = document.getElementById("todo");
        createElem(todo.value);
        var newArr = document.querySelectorAll(".del");
        console.log(newArr);
        crossfunc(newArr);
        todo.value = "";
      });
      function clearDone(checked) {
        for (let i of checked) {
          i.parentNode.remove();
        }
      }
      clearbtn.addEventListener("click", function () {
        var checkedNew = document.querySelectorAll(".crossed");
        clearDone(checkedNew);
      });
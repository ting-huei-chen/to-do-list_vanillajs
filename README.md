# To-do List - Using JavaScript

This is a simple to-do list using plain Javascript.

## Table of contents

- [Overview](#overview)
  - [Feature](#feature)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Feature

Users are able to:

- Add new tasks
- Tick out tasks
- Clear all the ticked tasks

### Links

- Github repository: [to-do-list_vanillajs](https://github.com/hejkeikei/to-do-list_vanillajs)
- Live Site URL: [hejkeikei.github.io](https://hejkeikei.github.io/to-do-list_vanillajs)
- CodePen: [codepen.io/TingHueiChen](https://codepen.io/TingHueiChen/pen/GRQroZR)

## My process

- Write with semantic markup.
- Plan the layout.
- Go through validators.
- Set all root figures and font.
- Responsive design
- CSS
- Write the function for adding tasks
- Write the function for ticking tasks
- Write the function for clearing tasks
- Debuging
- Add key Access for adding tasks

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript

### What I learned

I divided the to-do list component into four parts:

- The list it self
- The Add button: create new element and trigger load all tasks as an array
- The checkbox for ticking tasks: toggle the task are crossed or not
- The Clear Done button: select all crossed tasks and remove them

The function of adding a task:

```js
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
```

DOM output

```html
<li class="item">
  <p>Coding challenge</p>
  <input type="checkbox" class="del" />
</li>
```

The tick function add/remove the class of the content:

```js
function tick(e) {
  let item = e.target.previousElementSibling;
  item.classList.toggle("crossed");
}
```

### Continued development

- Use cookies to store the data
- Add the ability to create new list

### Useful resources

- [previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling)
- [previousSibling and previousElementSibling](https://stackoverflow.com/questions/52467728/difference-between-previoussibling-and-previouselementsibling-javascript) - This is an amazing article which helped me figure out the difference between theese two property.
- [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

## Author

- Codepen - [TingHueiChen](https://codepen.io/TingHueiChen)
- Frontend Mentor - [@hejkeikei](https://www.frontendmentor.io/profile/hejkeikei)
- Twitter - [@hej_keikei](https://twitter.com/hej_keikei)

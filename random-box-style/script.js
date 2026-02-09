let box = document.body.firstElementChild.children
console.log(box)
console.log(box[2])
let random = Math.floor(Math.random() * box.length);
box[random].style.backgroundColor = "red"
let random2 = Math.floor(Math.random() * box.length);
box[random2].style.color = "blue"
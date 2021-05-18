// Memory leak

let array = [];

// infinite loop
for(let i=5; i > 1; i++) {
    array.push(i);
}

// Also with global variables we can generate a memory leak
var a = 1;
var b = 1;
var c = 1;

// Also with event listeners and never remove them
var element = document.getElementById("buton");
element.addEventListener("click", onClick);


// setInterval
setInterval(() => {
    // referencing-objects
})
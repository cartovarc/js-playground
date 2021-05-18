debugger;
console.log("Hello");
setTimeout(() => {console.log("ABCDEF")}, 1000); // this is executed async and added to callback queue
console.log("World");

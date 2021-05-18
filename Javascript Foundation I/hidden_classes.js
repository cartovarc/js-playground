// hiden classes
// useful for inline caching
// https://medium.com/swlh/writing-optimized-code-in-js-by-understanding-hidden-classes-3dd42862ad1d

// When V8 sees our Animal constructor 
//  function is declared, it creates a hidden class
function Animal(x, y) {
    this.x = x;
    tbis.y = y;
}

const animal1 = new Animal(1, 2);
const animal2 = new Animal(1, 2);

// When we introduce a new property in different order
//  in two different objects, results on creation of two
//  differents hidden classes. THIS IS NOT AN OPTIMIZED SOLUTION

animal1.a = 30;
animal1.b = 100;
animal2.b = 30;
animal2.a = 100;

// Same happes when we use delete
delete animal1.x;

// REMENBER:
// 1. Assign all properties of an object in its contructor
// 2. If still, assign new properties always in same order

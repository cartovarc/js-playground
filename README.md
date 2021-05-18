# Notes about Javascript
- Single threaded and code execution is synchronous using call stack
- JS text file -> ENGINE { Parse -> Abstract Syntax Tree, Compile, Optimize } -> Machine Code-> Target processor
- Babel is a compiler and translate modern Javascript to old Javascript compatible with old browsers
- Typescript compiler translate from Typescript to Javascript
- Javascript has Call Stack (keep track where we are in the code in its execution) and Memory Heap (store and write information, memory allocation and release memory)

# Notes about NodeJS
- NodeJS is a javascript runtime that runs outside browser and uses V8 engine and LIBUV

# Notes about Google V8 compiler
- Has 2 compilers Crankshaft (JIT produces optimized code) and Full-Codegen (parses Javascript directly to machine code)
- Interpreter in V8 is called Ignition responsable of creates and executes bytecode

# Take care with:
- eval()
- arguments
- for in
- with
- delete
- hidden classes
- inline caching

# Articles
## Article about WebAssembly
https://medium.com/front-end-weekly/webassembly-why-and-how-to-use-it-2a4f95c8148f

## Javascript engine pipeline
https://medium.com/front-end-weekly/webassembly-why-and-how-to-use-it-2a4f95c8148f

## Callstack and memory heap
https://medium.com/@allansendagi/javascript-fundamentals-call-stack-and-memory-heap-401eb8713204

https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/#:~:text=A%20stack%20overflow%20occurs%20when,before%20throwing%20a%20stack%20error.

https://medium.com/front-end-weekly/understanding-javascript-memory-management-using-garbage-collection-35ed4954a67f

## Memory leak
https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications

## How does NodeJS works
https://chaudharypulkit93.medium.com/how-does-nodejs-work-beginner-to-advanced-event-loop-v8-engine-libuv-threadpool-bbe9b41b5bdd

## Zero to maestry
https://zerotomastery.io/

## Advanced Javascript Cheatsheet
https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/?utm_source=udemy&utm_medium=coursecontent


## Javascript runtime
http://latentflip.com/loupe/

# Asks to solve
- Which is the maximum call stack size?
- Which is the maximum memory heap size?
- Which is the difference between var and let?
- When references (like pointers in C) or values are used in Javascript?
- What is referencing objects in Javascript?
- Difference between Javascript Runtime and Javascript Engine?
- What is Web API? Which is windows object?
- Why event loop needs check for empty call stack in order to push on it??
- How works async functions on javascript?
- How thread works on NodeJS?

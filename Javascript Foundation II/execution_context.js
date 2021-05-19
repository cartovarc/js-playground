'use strict'; // comment and uncomment this

var strict = ( function () { return !!!this } ) () // check if strict mode is enabled

var a_this, b_this, c_this;

function a() {
    a_this = this;
    console.log("a_this", a_this);
    console.log("a_hacked_b", a_this.only_in_b);
    return "hello word";
}

function b() {
    if(!strict) {
        this.only_in_b = "only_in_b";
    }
    b_this = this;
    console.log("b_this", b_this);
    return a();
}

function c() {
    c_this = this;
    console.log("c_this", c_this);
    return b();
}

c();

console.log("this", this);

if(strict){
    console.log("equals", (a_this === undefined) && (b_this === undefined) && (c_this === undefined));
}else{
    console.log("equals", (a_this === this) && (b_this === this) && (c_this === this));
}

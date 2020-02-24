// Values vs. References
var myName = "Kyle";

var yourName = myName;

myName = "Eliot";

console.log(myName);
// Frank

console.log(yourName);
// Kyle

var myAddress = {
    street: "705 Winding Hills Dr",
    city: "Clinton",
    state: "MS"
};

var yourAddress = myAddress;

// I've got to move to a new house!
myAddress.street = "110 Lake Forest Ln";

console.log(yourAddress.street);
// 110 Lake Forest Ln

// So Many Function Forms


// let awesomeFunction = function someName(coolThings) {
// const awesomeFunction = function someName(coolThings) {
var awesomeFunction = function someName(coolThings) {
    // ..
    return amazingStuff;
};

awesomeFunction.name;
// "someName"

// generator function declaration
function* two() { 
    console.log('generator function declaration');
};

two();

// async function declaration
async function three() { 
    console.log('async function declaration');
    
 };

 three();

// async generator function declaration
async function* four() { 
    console.log('async generator function declaration');
    
 };

 four();

// named function export declaration (ES6 modules)
// export function five() { 
//     console.log('named function export declaration (ES6 modules)');
    
// };
//error

//IIFE
(function(){ 
    console.log('IIFE');
    
 })();

(function namedIIFE(){
    console.log('namedIIFE');
 })();

 // asynchronous IIFE

(async function(){ 
    console.log('asynchronous IIFE');
    
 })();

(async function namedAIIFE(){ 
    console.log('namedAIIFE');
 })();

 // arrow function expressions
var f;
f = () => 42;
f = x => x * 2;
f = (x) => x * 2;
f = (x,y) => x * y;
f = x => ({ x: x * 2 });
f = x => { return x * 2; };
f = async x => {
    var y = await doSomethingAsync(x);
    return y * 2;
};
// someOperation( x => x * 2);
// someOperation(5);

class SomethingKindaGreat {
    // class methods
    coolMethod() { console.log('cool class methods') }   // no commas!
    boringMethod() { console.log('boring class method') }
}

SomethingKindaGreat.coolMethod;
SomethingKindaGreat.boringMethod;

var EntirelyDifferent = {
    // object methods
    coolMethod() { console.log('coolMethod');
     },   // commas!
    boringMethod() { console.log('boringMethod');
     },

    // (anonymous) function expression property
    oldSchool: function() { console.log('(anonymous) function expression property') }
};

EntirelyDifferent.coolMethod;
EntirelyDifferent.boringMethod;

EntirelyDifferent.oldSchool;

// Coercive Conditional Comparison
var x = 1;

if (x) {
    // will run!
    console.log('This runs bc it is true');
    
}

while (x) {
    // will run, once!
    console.log('This runs once bc it is true');
    x = false;
}

var x = 1;

if (x == true) {
    // will run!
}

while (x == true) {
    // will run, once!
    x = false;
}

var x = "hello";

if (x) {
    // will run!
    console.log('does it run "hello"?')
}

if (x == true) {
    console.log('does it run "hello" again?')
    // won't run :(
}

var x = "hello";

if (Boolean(x) == true) {
    // will run
    console.log('comparison operator will run!')
}

// which is the same as:

if (Boolean(x) === true) {
    // will run
    console.log('Converting x to boolean will also run in strict comparison!')

}

// Prototypal “Classes”
var Classroom = {
    welcome() {
        console.log("Welcome to Object style of coding, students!");
    }
};

var mathClass = Object.create(Classroom);

mathClass.welcome();
// Welcome, students!

{
    function Classroom() {
        // ..
    }
    
    Classroom.prototype.welcome = function hello() {
        console.log("Welcome to prototype, students!");
    };
    
    var mathClass = new Classroom();
    
    mathClass.welcome();
    // Welcome, students!

}

{

    class Classroom {
        constructor() {
            // ..
        }
    
        welcome() {
            console.log("Welcome to ES6 class mechanisms, students!");
        }
    }
    
    var mathClass = new Classroom();
    
    mathClass.welcome();
    // Welcome, students!
    
}








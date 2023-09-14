//console
// console.time("tike taken");
// console.log("Hello World")
// console.warn({vans: "boy", gender: 34})
// console.table({vans: "boy", gender: 34})
// console.timeEnd("tike taken")

//variable
//The values of variables declared with var and let can be change but variable declared with const can not be changed
//var, let, const
// var vansh ="male";
// let vansh ="male";
// const vansh ="male";
// const name = `vansh's iphone`
// console.log(name, vansh);
// vansh = 15
// console.log(vansh)


//Programing case types
//camelCase
//Kebab-case
//snake_case
//PascalCase


//Data types in js
//=> Prmitive Data  - number, string, boolean, null, undefined, symbol
//=> Reference Data - object, array, function, date, regexp, map, set, weakmap, weakset


//object literal
// let marks={
//     maths: 10,
//     english: 20,
//     science: 30
// }
// console.log(marks);


//type conversion
// let marks = "10";
// marks = String(marks); --> .toString()
// console.log(marks, typeof marks);
// marks = Number(marks);  -->parseInt(), parseFloat(), toNumber(), (toFixed() FOR DECIMAL after decimal point)
// console.log(marks, typeof marks);
// console.log(marks.maths)

//getting date and time from computer
// let date = new Date();
//date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
//date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()
// console.log(date);

//String functions
// let name = "vansh";
// name = name.concat(" is a boy ");
// console.log(name);
// console.log(name.length);
// console.log(name.toLOWERCASE);
// console.log(name.toUpperCase);
// console.log(name.indexOf(""));
// console.log(name.lastIndexOf(""));
// console.log(name.charAt[0]);
// console.log(name.endsWith(""));
// console.log(name.includes(""));
// console.log(name.substring(0,2));
// console.log(name.slice(0,2));
// console.log(name.split(0,2));
// console.log(name.replace("",""));


//vaiable can be called inside ""  using
//${}

//Arrays
// console.log(name.indexOf(""));
// name.push();
// name.unshift();
// name.pop();
// name.shift();
// name.splice(0,2);
// name.reverse();
// name.sort();
// name = name.concat(name2)
//array.forEach(function(element){
    //    console.log(element);
//}


//Functions in js

//offsetx
//window --> alert,confirm,prompt,console.log,console.warn,console.error,console.time,console.timeEnd,
//window.innerWidth,window.innerHeight,window.outerWidth,window.outerHeight,window.scrollX,window.scrollY
//localStorage.setItem("name", "vansh"),localStorage.getItem("name"),localStorage.removeItem("name"),localStorage.clear(),localStorage.key(0),localStorage.length,localStorage.setItem("name", JSON.stringify(marks))
// localStorage.JSON.parse(localStorage.getItem("name"))
//sessionStorage.setItem("name", "vansh"),sessionStorage.getItem("name"),sessionStorage.removeItem("name"),sessionStorage.clear(),sessionStorage.key(0),sessionStorage.length,sessionStorage.setItem("name", JSON.stringify(marks))
//document --> getElementById,getElements,links,scripts,images,forms,head,body,title,querySelector,        querySelectorAll,createElement,
//event --> addEventListener,removeEventListener,preventDefault,stopPropagation,target,currentTarget, offsetX,offsetY,pageX,pageY, clientX,clientY,
//console --> log,warn,error,time,timeEnd
//navigator --> geolocation,geolocation.getCurrentPosition
//location --> href,reload,assign,reload(),replace(),toString(),
//history --> back,forward,go,pushState,replaceState
//screen --> width,height,availWidth,availHeight,colorDepth,pixelDepth,orientation
//screen.orientation --> angle,type
//screen.navigator --> vendor,appVersion,platform,userAgent,language,languages,plugins,hardwareConcurrency,maxTouchPoints
//screen.navigator.vendor --> Apple,Google,Microsoft,Netscape,Opera,Safari
//screen.navigator.appVersion --> Chrome/58.0.3029.110 Safari/537.36
//screen.navigator.platform --> Win32,Win64,MacIntel,Linux x86_64
//screen.navigator.userAgent --> Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36
//screen.navigator.language --> en-US
//screen.navigator.languages --> en-US,en;q=0.9


//inserting, replace and remove element in dom using js
// console.log("hello world");
// let element = document.createElement("h1")
// let insert1 = document.createTextNode("vansh");
// element.className = "hello"
// element.id = "hello"
// element.innerText = "vansh"
// let insert = document.querySelector(".class")
// insert.appendChild(insert1);
// insert.appendChild(element)
// console.log(element);
//element.replaceWith("insert1");
//element.replacechild(insert1 , element);
//element.removeChild(element)


//Attribute from dom
//element.getAttribute("class");
//element.setAttribute("class","hello");
//element.removeAttribute("class");
//element.hasAttribute("class");

//Eventlisterner
//element.addEventListener("click",function(){
//element.addEventListener("dblclick",function(){
//element.addEventListener("mousedown",function(){
//element.addEventListener("mouseup",function(){
//element.addEventListener("mouseenter",function(){
//element.addEventListener("mouseleave",function(){
//element.addEventListener("mousemove",function(){
//element.removeEventListener("click",function(){
//element.preventDefault();

//math functions
//Math.random(),Math.floor(),Math.ceil(),Math.round(),Math.abs(),Math.pow(),Math.sqrt(),Math.min(),Math.max(),Math.PI,Math.E,Math.LN2,Math.LN10,Math.LOG2E,Math.LOG10E,Math.SQRT1_2,Math.SQRT2,

//Editable div using js
// let mainheading  = document.getElementById("mainheading");
// let secondheading = document.getElementById("secondheading");
// let divelem  = document.createElement("div");
// let text = document.createTextNode("This is a text node");
// divelem.appendChild(text);
// document.body.insertBefore(divelem, secondheading);

// divelem.addEventListener("click", function(){
//     let nooftextarea = document.getElementsByTagName("textarea").length;
//     if(nooftextarea == 0){
//    let html  = divelem.innerHTML;
//     divelem.innerHTML = `<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea">${html}</textarea>`;
//     }

//     let textarea = document.querySelector(".form-control");
//     textarea.addEventListener("blur", function(){
//         divelem.innerHTML = textarea.value;
//     })
// })
// ----------------------------------------------------------------------------------------------------------------
// objects function constructure (oops concept)
/*
                                    object literal
   let car = {
        name : "Create",
        color : "Midnight Black",
        Model : "X5",
   }
                                    constructor function

    function cars(carname, carmodel, carspeed){
    this.carname= carname;
    this.carmodel= carmodel;
    this.carspeed= carspeed;
}

car1 = new cars("Create", "X5", "120kmph");
console.log(car1.carname);

                                    object prototype

    create prototye for own constructor function only and not for built in function
    cars.prototype.getSpeed = function(){
        return this.carspeed;
    }
    cars.prototype.setSpeed = function(speed){
        this.carspeed = speed;
    }
                                    Inheritance

function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
let vansh = new Employee("vansh", 10000, 5);
console.log(vansh);

function programmer(name, salary, experience, Language){
    Employee.call(this, name, salary, experience)
    this.Language = Language;
}
let vansh2 = new programmer("vansh", 10000, 5, "Java");
console.log(vansh2);

programmer.prototype.slogan = function(){
    return `${this.name} is a ${this.Language} programmer`;
}
console.log(vansh2.slogan());

//for prototye we need to inhertite manually
programmer.prototype = Object.create(Employee.prototype);

//for constructor we need to inhertite manually
programmer.prototype.constructor = programmer;
*/

                                    //CLASSES (oops concept) (ES6)

/*
lass Employee{
    constructor(name, salary, experience){
        this.name = name;
        this.salary = salary;
        this.experience = experience;
    }
    slogan(){
        return `${this.name} is a ${this.experience} years experience programmer`;
    }
    getnname(){
        return this.name;
    }
}
emp1 = new Employee("vansh", 10000, 5);
console.log(emp1.getnname());

class programmer extends Employee{
    constructor(name, salary, experience, Language){
        super(name, salary, experience);
        this.Language = Language;
    }
    slogan(){
        return `${this.name} is a ${this.Language} programmer`;
    }
}

let emp2 = new programmer("vansh", 10000, 5, "Java");
console.log(emp2.slogan());
}



                                            //setTimeout

setTimeout(function(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
},1000); 
console.log("hello");

*/


/*
Vanilla JavaScript ====> pure JavaScript    


                                            AJAX
    //create xhr object

    let xhr = new XMLHttpRequest();
    //open method

    //GET ---> for get request, POST ---> for post request, PUT ---> for put request, DELETE ---> for delete request

    // xhr.open("GET", "xml.txt", true);
    // xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1', true);
    // xhr.open("POST", 'https://jsonplaceholder.typicode.com/todos/1', true);
    // xhr.getRequestHeader('Content-Type', 'application/json');
    
    //what to do on progress
    xhr.onprogress = function () {
        console.log("progress");
    }

    //what to do on load
    xhr.onload = function () {
        if (this.status == 200) {
        console.log(this.responseText);
        } else {
            console.log("error");
        } 
    }

    //send request
    xhr.send();
    // let param = the way we need to enter the data
    // xhr.send(param);

                                                    //promise


var promise = new Promise(function(resolve, reject) { 
  const x = "geeksforgeeks"; 
  const y = "geeksforgeeks"
  if(x === y) { 
    resolve(); 
  } else { 
    reject(); 
  } }); 
promise.then(function(){ 
console.log('Success, You are a GEEK');
}).catch(function () { 
console.log('Some error has occurred');
}); 

      
                                                //fech api

//fetch using normal txt file
function getdata() {
    fetch("xml.txt").then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data);
    })
}
getdata();



//post data into api
let data = {
    first_name: 'John',
    last_name: 'Adams',
    job_title: 'Software Engineer'
};
const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}

function postdata() {
    fetch("https://api.github.com/users", options).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}
postdata();


                                        //Async/Await


//if we write async function then that function returs some promise 
//await == asyncronussly (it doesnot iinrupt the flow of the program and it waits for the promise to be resolved)
async function harry(){
    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "harry";
}

console.log("Before calling harry")
let a = harry();
console.log("After calling harry")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")

                                             //try catch

let a = "Harry bhai";
a = undefined;
if (a !=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}


try {
    null.console
    console.log("We are inside try block");
    
    functionHarry();
    
} catch(error) {
    console.log(error)
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);
    
} finally {
    console.log("Finally we will run this")
}

                                                Regular Expression

let Regular = /vansh/;
// let Regular = /vansh/i; //i is for case insensitive
// let Regular = /vansh/g; // g is for global flag

console.log(Regular);
console.log(Regular.source);

//functios for regular expressions
//search, match, replace, split, test, exec, compile, execAll, execAllGlobal, execAllGlobalMulti, execAllMulti, execGlobal, execGlobalMulti, execMulti, execGlobalMulti, execMulti,


//exec()---> returns an array and index of the match and returns null if no match is found
let string = "hello my name is vansh, i am a good  programmer vansh"; 
let scan = Regular.exec(string)
console.log('scan', scan);
// console.log(scan.input);
// console.log(scan.index);

//test()---> returns true or false
scan = Regular.test(string);
console.log(scan);

//match()---> returns an array of all the matches and returns null if no match is found
scan = string.match(Regular);   
console.log(scan);

//search()---> returns the index of the first match and returns -1 if no match is found
scan = string.search(Regular);
console.log(scan);

//replace()---> returns a string with the first match replaced with the given string
scan = string.replace(Regular, 'sakshi');
console.log(scan);


//metacharakters symbols in regular expressions
/^/---> expression will match if string starts with the given string
/$/---> expression will match if string ends with the given string
/./ ---> matches 1 character
/(*)/ ---> matches 0 or more characters
/?/---> word beffore ? is optional


/\w/---> matches a word character(a-z, A-Z, 0-9, _)
/\w+/---> matches a word character(a-z, A-Z, 0-9, _) and one or more characters
/\W/---> matches a non-word character(Capital W)
/\W+/---> matches a non-word character(Capital W) and one or more characters
/\d/---> matches a digit(0-9)
/\d+/---> matches a digit(0-9) and one or more digits
/\D/---> matches a non-digit(Capital D)
/\D+/---> matches a non-digit(Capital D) and one or more digits
/\s/---> matches a whitespace character(space, tab, newline, carriage return)
/\s+/---> matches a whitespace character(space, tab, newline, carriage return) and one or more whitespace characters
/\S/---> matches a non-whitespace character(Capital S)
/\S+/---> matches a non-whitespace character(Capital S) and one or more non-whitespace characters
/\b/---> matches a word boundary
/\B/---> matches a non-word boundary

//Assertions in regular expressions
/h(?=a)rry/---> matches hry if h is followed by a
/h(?!a)rry/---> matches hry if h is not followed by a


//character sets in regular expressions
const regular = /v[abc]nsh/ [abc] ---> matches a, b or c
const regular = /v[a-z]nsh/ [a-z] ---> matches a to z
const regular = /v[a-zA-Z]nsh/ [a-zA-Z] ---> matches a to z and A to Z
const regular = /v[^abc]nsh/ [abc] ---> does not matches a, b or c

//quantifiers in regular expressions
const regular = /v[a-z]{2}nsh/ [a-z] ---> matches a to z and 2 characters
const regular = /v[a-z]{2,}nsh/ [a-z] ---> matches a to z and 2 or more characters
const regular = /v[a-z]{2,4}nsh/ [a-z] ---> matches a to z and 2 to 4 characters


//GROUPING IN REGULAR EXPRESSIONS
const regular = /v(an|sh)nsh/ [a-z] ---> matches van or vsh
const regular = /(VANS){2}/ {2} ---> matches van twice


                                            //Iterators and Generators
//iterators---> iterate over an array
function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // We will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}


const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My array is ", myArray)

// Using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)


//generators---> generate values one by one
function* numbersGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
        // yield (i++).toString();
    }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
*/
console.log(captain);
//console.log(runs);
// console.log(PIN);
var captain;
// let runs;
// const PIN = 411057;

display();

function display(){
    console.log(`Inside display function......`);
}


// show(); Not allowed
var show = function(){
    console.log(`inside show function`);
}

let arr=[];
console.log(Array.isArray(arr));

let name="Shweta";
console.log(Array.isArray(name));

let obj={};
console.log(typeof obj);
console.log(Array.isArray(obj));
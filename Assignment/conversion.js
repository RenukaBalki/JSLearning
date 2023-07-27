console.log(`>>>>>>>1`);
var result='3' + 2 ;
console.log(`${result}`);
console.log(`2 which is number type is implicitly converted to string`);
console.log(`>>>>>>>>>2`);

var result='3' + true ;
console.log(`${result}`);
console.log(`true which is of Boolean type  is implicitly converted to string`);

console.log(`>>>>>>>>>3`);
var result='3' + undefined ;
console.log(`${result}`);
console.log(`undefined  is implicitly converted to string`);
console.log(`>>>>>>>4`)

var result='3' + null ;
console.log(`${result}`);
console.log(`null  is implicitly converted to string`);

//boolean to number conversion
console.log(`.................Boolean to number conversion...................`);
console.log(`>>>>>>>>>>1`);
var result='4' - true ;
console.log(`${result}`);
console.log(`"4" is string type of data converted to number and true is boolean converted to number double conversion(implicitly)`);
console.log(`>>>>>2`);
var result=4 + true ;
console.log(`${result}`);
console.log(`true is boolean type of data is implicitly converted to number type here true means one `);
console.log(`>>>>>3`);
var result=4 + false ;
console.log(`${result}`);
console.log(`False is boolean type of data is implicitly converted to number type false means 0`);
//using arthmetic operation
console.log(`................Numeric string -,*,/ results number type....................`);
console.log(`>>>>>1`);
var result= '4' - '2' ;
console.log(`${result}`);
console.log(`when there is arthmetic operator except string then it will get convert to number type here 4 is string it get implicitly converted to number type`);
console.log(`>>>>>2`);
var result= '4' - 2 ;
console.log(`${result}`);
console.log(`when there is arthmetic operator except string then it will get convert to number type here 4 and is string type it get implicitly converted to number type`);
console.log(`>>>>>3`);
var result= '4' * 2 ;
console.log(`${result}`);
console.log(`when there is arthmetic operator except string then it will get convert to number type here 4 is string it get implicitly converted to number type`);
console.log(`>>>>>4`);
var result= '4' / 2 ;
console.log(`${result}`);
console.log(`when there is arthmetic operator except string then it will get convert to numb er type here 4 is string it get implicitly converted to number type`);


console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
var result= 0==' ';
console.log(`${result}`);
console.log(` 0==' ' -result is true space is get converted to number implicitly`);
var result= 0=='0';
console.log(`${result}`);
console.log(` 0=='0' result is true 0 is get converted to string implicitly `);
var result= 0==false;
console.log(`${result}`);
console.log(` 0==false -result is true false is get converted to number `);
var result= null==undefined;
console.log(`${result}`);
console.log(` null==undefined -result get true beacuse loosely equal as both having different type`);

var result= 1==[1];
console.log(`${result}`);
console.log(`1==[1] -result is true both are of same type that is number `);

var result= 1==true;
console.log(`${result}`);
console.log(`1==true -result is true ,true is get converted to number `);

var result= 1=='1';
console.log(`${result}`);
console.log(` 1=='1' -result is true, 1 is string  get converted to number implicitly `);

























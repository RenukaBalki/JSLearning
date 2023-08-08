console.log(`____Step 1______`);
personDetails={
    personName :"Renuka",
    age : 22,
    emailId : "renukapbalki123@gmail.com",
    mobile : 1234567890




}
collegeDetails={
    collegeName : "Azam campus",
    collegeLocation : "Pune",
    University : "Savitri Bai Phule",
    collegeDep : "Science"
}
let mergeObject = Object.assign({} , personDetails, collegeDetails)
console.table(mergeObject);

console.log(`___Step 2_________`);

const friends=["Bhavna",
"Renuka",
"Anisha",
"Gitanjali"]
     


Object.freeze(friends);
name1= "Priyanka";
console.log(friends);


for (const element of friends) 
{
    console.log(element);
}
console.log(`___Step 4____`);
let str= "Technology";
let reverse="";
    for (let index = str.length-1; index>=0; index--) 
    {
        let char=str.charAt(index);
        reverse =reverse.concat(char);
       
        
        
    }
    console.log(`${reverse}`);
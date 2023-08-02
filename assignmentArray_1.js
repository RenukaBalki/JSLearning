console.log(`_________Step 1_______________`);
let constArrayFruits=["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`First Element : ${constArrayFruits[0]}`);
console.log(`Last Element :  ${constArrayFruits[constArrayFruits.length-1]}`);

console.log(`_________Step 2_______________`);
constArrayFruits.unshift("Papaya");
console.log(`Added Papaya Element Before Banana__ [${constArrayFruits}]`);

console.log(`_________Step 3_______________`);
constArrayFruits.splice(4,1);
console.log(`Removed Mango from the Array ${constArrayFruits}`);

console.log(`_________Step 4_______________`);
constArrayFruits.push("Pineapple")
console.log(`Added Last element : ${constArrayFruits}`);

console.log(`_________Step 5_______________`);
constArrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Added element Dragon fruit before water melon ${constArrayFruits}`);

console.log(`_________Step 6_______________`);
constArrayFruits.splice(2,1,"Kiwi");
console.log(`Replaced the element orange with Kiwi__[ ${constArrayFruits}]`);

console.log(`_________Step 7_______________`);
constArrayFruits.splice(1,4);
console.log(`Index starting from 1 to 4 [${constArrayFruits}]`);

console.log(`_________Step 8_______________`);
let element1=constArrayFruits[constArrayFruits.length-1]
let element2=constArrayFruits[constArrayFruits.length-2]
let element3=constArrayFruits[constArrayFruits.length-3]
console.log(`Last Three elements of the array___${element1} ${element2} ${element3}`);





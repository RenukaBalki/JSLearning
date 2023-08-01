// A E I O U
console.log(`_____Step 1_____`);
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good IT Developer");
console.log(`______Step 2______`);

function sumCube() 
{
    let totalCount=0;
    for (let index = 1; index <= 5; index++) {
        let cube=index*index*index;
        totalCount=totalCount+cube;
        
    }
    console.log(`The sum of cube of number from 1 to 5 is ${totalCount}`);
}
sumCube();

console.log(`___Step 3______`);
function oddPositionedCharacter(str)
 {
    let merge="";
    for (let index = 0; index <= str.length; index++) {
        let char=str.charAt(index);
        if (index%2==1 && char!=" ") 
        {
            merge=merge.concat(char)
           
        }
        
    }
    console.log(`${merge}`);

}
oddPositionedCharacter("Hard work always pays back");
oddPositionedCharacter("Soon I will be Angular IT champ");

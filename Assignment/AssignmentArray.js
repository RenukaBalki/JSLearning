let arrray=[4,5,4,5,8,5,7,8,9,7,8]
let uniqueArray=[];
for (let index = 0; index < arrray.length; index++) 
{
    const element = arrray[index];
    if (!uniqueArray.includes(element)) 
    {
        uniqueArray.push(element);
    }
    
    
}
console.log(`Removed duplicate Element ${uniqueArray}`);

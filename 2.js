let arrayGirls=["Renuka","Sayali","Shweta","Tabbasum"]
var count =0;
for (let index = 0; index < arrayGirls.length; index++) {
    const element = arrayGirls[index];
    


for (let index = 0; index < element.length; index++) {
    const element1 = element.charAt(index);
    if (element1=="a" || element1=="A") 
    {
        count++
    }

}
    
}
console.log(count);

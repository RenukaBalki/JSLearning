let professor ={
    name: "Stew",
    degree : "phd",
    address: "Pune",
    yearOfExperience: 5,
    language : "Englisg",
    degrees : {
        engneering : "CSC",
        PHD : "Advance Computing",
        
        
    func:function(){
        console.log(`Degrees like ${this.engneering} ${this.PHD} ${this.certificate}` )}

     

    },
    certificate :["Hacker Rank","Certificate in IFE course","Certificate in advance Programing"],
    totalExperience : 14
   

    }
    professor.degrees.func();
    console.log("Toatl Experience :" ,professor.totalExperience);
    let element= professor.address="Mumbai";
    console.log("Address: ", element);
    professor.certificate.push("Oracle Certified");
    let element1=professor.certificate[professor.certificate.length-1]
    console.log(`Last element of array : ${element1}`);



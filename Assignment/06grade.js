function grade(marks) 
{
    var string=(typeof marks);

    var result = +marks;
    if(marks<=0 || marks>100 || isNaN(result))
    {
        console.log(`Please provide the valid marks`);
   
    } 
    else if (marks>=90)
    {
       console.log(`Fantastic marks ${marks} : your grade is A1`); 
    }
    else if(marks>=70 && marks<90)
    {
        console.log(`Good marks ${marks} : your grade is A`);
    }
    else if(marks>=50 && marks<70)
    {
        console.log(`Good marks ${marks} : your grade is B`);
    }
    else if(marks>=35 && marks<50)
    {
        console.log(`Marks is ${marks} : your grade is C, Need Improvement`);
    }
}
    

grade(98);
grade(80);
grade(90);
grade(0);
grade(150);
grade(-7);
grade(35);
grade(29);
grade(64);
grade(49);
grade(91);
grade("Eight");
grade(undefined);
grade(null);












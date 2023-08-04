sbiBank={
    bankName : "SBI Bank",
    location : "Pune",
    accountNum : 12345,
    ifsc : 125,
    interest : 6,
    showDetails: function() 
    {
        console.log(`SBI Bank : ${this.bankName} ${this.location} ${this.accountNum} ${this.ifsc} ${this.interest}`);
    }
}
axisBank={
    bankName : "Axis Bank",
    location : "Mumbai",
    accountNum : 5678,
    ifsc : 456,
    interest : 9,
    showDetails: function() 
    {
        console.log(`Axis Bank : ${this.bankName} ${this.location} ${this.accountNum} ${this.ifsc} ${this.interest}`);
    }
}
hdfcBank={
    bankName : "HDFC Bank",
    location : "Mumbai",
    accountNum : 12345,
    ifsc : 9876,
    interest : 4,
    showDetails: function() 
    {
        console.log(`HDFC Bank : ${this.bankName} ${this.location} ${this.accountNum} ${this.ifsc} ${this.interest}`);
    }
    }

yesBank={
    bankName : "SBI Bank",
    location : "Delhi",
    accountNum : 987345,
    ifsc : 1458,
    interest : 8,
    showDetails: function() 
    {
        console.log(`Yes Bank : ${this.bankName} ${this.location} ${this.accountNum} ${this.ifsc} ${this.interest}`);
    }
    }
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
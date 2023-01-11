//Number 1
var a=Number (prompt("Please enter your first value:"));
var b=Number(prompt ("Please enter your second value:"));
var c=a+b;
alert(c);


//Number 2
var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");

var fir = fname.slice(0,4);
var sec = lname.slice(0,1);

var output = fir + sec;
var final = output.toLowerCase();
document.write("Your CapacityBay userId is ",final);
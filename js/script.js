// JavaScript Document
// Angelina Castro, 11/13/2013, Conditionals_Worksheet.

//Stuff your face 1
// if the contestant weigh 250 pounds or more, the contestant quallify for the contest.
	var competitorWeigh = 260;

// if contestant weigh is less than 250 pounds
if(competitorWeigh < 250){
 	// if is less than 250 pounds
 	console.log ("the competitor will not qualify!");
}else{
	//if is greater or equal than 250 pounds.
	console.log ("the competitor will qualify!");
}

// Expression with conditionals.

//last chance for gas!
var carMPG = 25 // miles per gallon.
var carReadingTank = 100 // in percent.
var carGascapacity = 12 // gallons

// if the car has more than 200 miles in gas can make it acrross the dessert.
if("carMPG * carGascapacity > 200"){
	//if is more than 200.
	console.log ("The car can cross the dessert!");
}else{
	//if is less than 200
	console.log ( "The car can't cross the dessert!");
}

//Multiple Results.

// Check The Login.

var usernameEnter = joe1916
var passwordEnter = Joe1918
var correctUsername = Joe1919
var correctPassword = joe1918

if(usernameEnter == correctUsername && passwordEnter == correctPassword){
	// if the user name enter is the same as the correct username and the password enter is the same as correct password
	console.log("Welcome Joe1919!") // this is going to print out.
}

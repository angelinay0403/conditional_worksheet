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

var correctUsername = "janes20"
var correctPassword = "love2205"
var usernameEntered = "janes205"
var passwordEntered = "love2502"

// if the user nae enter is the same as the correct user name AND the password enter is the same as correct password.
if("correctUsername === usernameEntered && correctPassword === passwordEntered"){
	console.log("welcome janes20!") // will print out.
	
	// if the correct username is not the same as the username entered or the correct pasword is not the same as the password entered
}else if("correctUsername != usernameEntered || correctPassword != passwordEntered"){
	console.log("user name not found. please try again!")
	//else: meaning user name enter right but password enter wrong.
}else{
	console.log("password does not match our record")
}







//This will calculate if you have enough beer for you party!

var beerCurrent = prompt("How much beer do you have in your fridge?"); //This will ask the user how many beers they have
var guestCount = prompt("How many guests are you expecting?"); //This will ask how many guests are coming
var beerEach = 3; //This is the average beer drank per person

if (beerCurrent <= 3){ //This condition is true if the beer in the fridge is less than or equal to 3
	console.log("Go get more! You'll drink that all yourself!"); //this prints out if the condition is true
}else if(guestCount >= 6){ //this says if the first condition is false skip the code and ask if this condition is true
	console.log("That's a lot of people! You'll probably need more regardless...");	//this prints out if this condition is true
}else{ //this code will execute if both the previous conditions are false
	console.log("I think your beer stash is pretty good, sit back and relax."); //this will print out when it's true
}; //it works!!

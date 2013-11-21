//Calculator to calculate the margins and markup for retail and distribution in the retail environment

var retail = prompt("How much are you selling your product to stores for?"); //Asks user what the price to a store would cost
var distributor = prompt("How much are you selling your product to a distributor for?"); //Asks the user what the price is for a distributor
var marginPercent = prompt("what is the average markup percentage in decimal format for your type of product?"); //asks what percentage of a markup the client requires

function marginsCalc(retailPrice, distributorPrice, margin){ //This is a function that calculates the markup a client will give your product
	var retailP = parseInt(retailPrice); //This ensures the variable is a number not a string
	var distP = parseInt(distributorPrice); //This ensures the variable is a number not a string
	var marg = parseInt(margin); //This ensures the variable is a number not a string
	var distMarkup = distP * margin + distP; //This calculates the distributor margins
	var retailMarkup = retailP * margin + retailP; //This calculates the retail margins
	console.log("Your retail price is $" + retailMarkup + " and your distributor price is going to be $" + distMarkup); //Prints the output to the console
};

marginsCalc(retail,distributor,marginPercent); //calls the function and places the variables into the parameters
//Calculates and tells you if you are watching too much TV

var energyBill = prompt("how much is your energy bill this month?"); //asks the user the energy bill cost
var cableBill = prompt("How much did you pay for TV this month?"); //asks the user the cable cost

function tvCalc (energyBill,cableBill){ //the function for the TV calculator and it's parameters
	var energy = parseInt(energyBill); //converts the variable into a number
	var cable = parseInt(cableBill); //converts the variable into a number
	var total = energy + cable; //variable calculating each bill
	var dailyTotal = total/30; //dividing the total bill by the amount of days in the month
	console.log(dailyTotal);
	var totalCost = (dailyTotal >= 11) || (dailyTotal <= 10) ? console.log("You are spending " + dailyTotal +" per day, that's a lot.") : console.log("You are spending " + dailyTotal +" per day, you're not addicted."); //ternery that prints out to the console
};

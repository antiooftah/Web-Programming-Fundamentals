//Trevor Plaza | 18 September 2013 | Conditionals Worksheet

//Last chance for gas!
var gasEfficiency = 28;
var gasGauge = .25;
var gasCapacity = 12.5;

var gasLeft = gasGauge * gasCapacity * gasEfficiency;

if (gasLeft > 200){     
	console.log("Yes, you can make it without stopping for gas!")
}else{     
	console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can!") 
};

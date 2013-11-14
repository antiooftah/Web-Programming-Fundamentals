//Should I order more ink for my printer??

var inkLevel = .10; //this is a percentage
var inkCartridgeLeft = 1; //this is how many ink cartridges you have left

if(inkLevel < .10 || inkCartridgeLeft <= 1){ //this is the condition for the if statement
	console.log("Go get some more ink quick!"); // this prints out if the condition is true
}else{ //if the condition is false, the code below gets executed
	console.log("You're fine for now but you better keep an eye on it."); //if the code is false it prints this
};
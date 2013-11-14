//Guitar practice calculator to determine how good you will be
var guitarExperience = prompt("How many years have you played?");
var practiceAmount = prompt("How many hours per day do you practice?");

var yourSkill = (guitarExperience>=3)||(practiceAmount>=3) ? console.log("You are going to rock!") : console.log("You need to have more experience!");
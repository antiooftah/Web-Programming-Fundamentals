//Guitar practice calculator to determine how good you will be
var guitarExperience = prompt("How many years have you played?"); //user will input their experience
var practiceAmount = prompt("How many hours per day do you practice?"); //user will input how often they practice

var yourSkill = (guitarExperience>=3)||(practiceAmount>=3) ? console.log("You are going to rock!") : console.log("You need to have more experience!"); //this will print out how if they are on track to be great or if they need to practice more
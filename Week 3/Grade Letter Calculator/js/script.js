//Grade Letter Calculator

var grade = 52;

if(grade > 90) {
	console.log("You have a " + grade + ", which means you have earned an A in the class!");
}else if(grade >= 80 && grade < 90){
	console.log("You have a " + grade + ", which means you have earned a B in the class");
}else if(grade >= 73 && grade < 80){
	console.log("You have a " + grade + ", which means you have earned a C in the class");
}else if(grade >= 70 && grade < 73){
	console.log("You have a " + grade + ", which means you have earned a D in the class");
}else if(grade <= 70){
	console.log("You have a " + grade + ", which means you have earned a F in the class");
};
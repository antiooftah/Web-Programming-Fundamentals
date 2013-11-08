
var totalCost = 10000;
var alreadySaved = 5000;

var weddingMonth = new Array(); //input the number of your month
weddingMonth[1] = 1; //Jan
weddingMonth[2] = 2; //Feb
weddingMonth[3] = 3; //Mar
weddingMonth[4] = 4; //Apr
weddingMonth[5] = 5; //May
weddingMonth[6] = 6; //Jun
weddingMonth[7] = 7; //Jul
weddingMonth[8] = 8; //Aug
weddingMonth[9] = 9; //Sept
weddingMonth[10] = 10; //Oct
weddingMonth[11] = 11; //Nov
weddingMonth[12] = 12; //Dec

var currentMonth = new Array(); //input the number for the current month
currentMonth[1] = 1; //Jan
currentMonth[2] = 2; //Feb
currentMonth[3] = 3; //Mar
currentMonth[4] = 4; //Apr
currentMonth[5] = 5; //May
currentMonth[6] = 6; //Jun
currentMonth[7] = 7; //Jul
currentMonth[8] = 8; //Aug
currentMonth[9] = 9; //Sept
currentMonth[10] = 10; //Oct
currentMonth[11] = 11; //Nov
currentMonth[12] = 12; //Dec

var monthlySaving = Math.abs((totalCost-alreadySaved) / (weddingMonth[5]-currentMonth[9]));




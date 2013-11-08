/*
Amount of sips in a 16 oz can of Monster Energy!
*/

var monsterSize = 16; //16 fluid ounces in one can
var bigSip = 0.5; // .5 ounces
var smallSip = 0.1; //.1 ounces

var averageSip = (bigSip+smallSip)/2;

var totalSips = Math.round(monsterSize/averageSip); 

console.log("the total amount of times you can sip on a Monster is " + totalSips + " sips!");
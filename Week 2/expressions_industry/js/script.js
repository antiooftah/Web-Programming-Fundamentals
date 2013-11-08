/* 
This is an expression I need to use with my business. 
I own a granola manufacturer called Olde Man Granola and 
I needed to figure out how many bags of granola resulted 
from one cooked batch.
*/

var batchWeight = 93; // pounds
var granolaBagWeight = 12; // ounces
var OzToLb = 16; //16 oz in 1 lb

var totalBags = (batchWeight*OzToLb)/granolaBagWeight;

console.log("there are " + totalBags + " bags of granola made from one full batch of granola. That's pretty good.");
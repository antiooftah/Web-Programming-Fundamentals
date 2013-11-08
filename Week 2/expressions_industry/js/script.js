var batchWeight = 93; // pounds
var granolaBagWeight = 12; // ounces
var OzToLb = 16; //16 oz in 1 lb

var totalBags = (batchWeight*OzToLb)/granolaBagWeight;

console.log("there are " + totalBags + " bags of granola made from one full batch of granola. That's pretty good.");
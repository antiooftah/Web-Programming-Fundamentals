// Calculator to show how much it will cost to buy the whole series of a show vs each episode by itself.

var singleShow = prompt("How much does each episode cost?"); //asks the user how much each episode costs
var fullSeason = prompt("how much does each season cost?"); //asks the user how much each season costs
var episodeEachSeason = prompt("how many episodes are there in each season?"); //asks the user how many episodes there are in each season
var seasonEachSeries= prompt("How many seasons are there?"); //asks the user how many seasons there are

function showCalc(episodes,seasons,episodeCost,seasonCost){ //creates a function and the perameters for the function
	var eachTotal = seasonCost*seasons; //creates a variable and calculates the total price for the seasons all together
	var eachEpisode = seasons*episodes*episodeCost; //creates a variable and calculates the total price for the episodes all together
	console.log("It will cost you $" + eachEpisode + " to buy each episode individually or $" + eachTotal + " to buy the season."); //this prints out the totals
}

showCalc(episodeEachSeason,seasonEachSeries,singleShow,fullSeason); //call the function and places the variables into the perameters of the function.
//pick a target number 
var target = Math.floor(Math.random() * 9);
var guesses = [];
function keyRelease(event){
	//get user number
	var input = parseInt(event.key);
	guesses.push(input);
	console.log("input", input);
	console.log("target", target);

	//determine color

	if(Math.abs(target - input) < 6){

		console.log("red")
	}else if(Math.abs(target - input) < 7){
		console.log("pink")
	}else if(Math.abs(target - input) > 4){
		console.log("blue");
	}


	//display color and number
	document.getElementById("game").innerHTML = guesses;

}

document.addEventListener("keyup", keyRelease); 



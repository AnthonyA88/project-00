var winner = false;


$(document).ready(function(){

	const car1 = $('#car1');
	const car2 = $('#car2');
	// $("#car1").animate({left: "+=300"}, 1000);
	// $('car1').keydown("margin-left": speed 2000);
	// $('car2').animate({right: "+=200"}, 2000);



});

// setTimeout(function(){ alert("Get ready, set, go!"); }, 3000);

//make a click function for the game to start with a countdown
console.log("does this work?")

$('img').on("click", function(){
	console.log("clicked image")

})

//Make a function to start the race


$(document).on('keydown', drive);

function drive(event){
	console.log(event.key);
	if (event.key === "s") {
		$('#car1').css('left', '+=20');
		console.log("inside s")
		winner=true;
	//this is the keycode for using S as the accelerator player 1
	//make cars to move at 5 px per click
} else  if (event.key === "l") {
		$('#car2').css('left', '+=20');
	//this is the keycode for using L as the accelerator player 2
}

}

//Make ending point for race/winning criteria
var winning = function() {
	//if user clicks car past finish line
 console.log("Did I win?");
};
	//if player goes past 50 clicks they win
// if (car1 === 1000) {
// 	alert("You win!") 
//  winner = true;
// } else{
// 	$("#car1").css('margin-left': car1);
// 	car1 += 20;
// }







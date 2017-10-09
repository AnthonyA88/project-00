$(document).ready(function(){

	const car1 = $('#car1');
	const car2 = $('#car2');

});

alert("Get ready!");

//make a click function for the game to start with a countdown
console.log("does this work?")

$('img').on("click", function(){

})


$(document).on('keydown', drive);

function drive(event){
	if (event.keyCode == 83) {
	//this is the keycode for using S as the accelerator player 1
	//make cars to move at 5 px per click
} else  if (event.keyCode == 76) {
	//this is the keycode for using L as the accelerator player 2
}

}

//Make starting point for race with countdown

function countDown(start){

	console.log("get ready");
	setTimeout(function() {
		alert("Get ready!"); 
	}, 2000);
}





//Make ending point for race/winning criteria
var winning = function() {
	//if user clicks car past finish line
}

function movePlayers(player){
  //remove classes for player1-playing and player2-playing from current divs
  //and add them to the next sibling div
  if(player === "p1"){
  $('.player1-playing').removeClass("player1-playing").next().addClass('player1-playing fadeIn')
  }
  if(player === "p2"){
    $('.player2-playing').removeClass("player2-playing").next().addClass('player2-playing')
  }
  //run a calculateWinner function
  // calculateWinner("p1", "p2")
}





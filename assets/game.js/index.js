var wins = 0;
var losses = 0; 
var guesses_made, guesses_left;
var win_element, lose_element, guesses_left_element, guesses_made_element;
var alphabet_array, current_letter;

$(document).ready(function(){
	initVariables();
	alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
					  "j", "k", "l", "m", "n", "o", "p","q", "r",
					  "t", "u", "v", "w", "x", "y", "z"];

	random_letter();

	$(document).keypress(function(event){
		var letter_guessed = String.fromCharCode(event.which);
		guess_made();
		$("#guesses_made").append(letter_guessed + " ");
		//User has won
		if(letter_guessed == current_letter){
			wins+=1;
			$("#winTag").css("color", "green");
			reset_game();
		}else{ //User has lost
			if(guesses_left == 0){
				$("#loseTag").css("color", "red");
				losses+=1;
				reset_game();

			}
		}
	});
});

function initVariables(){
	guesses_left = 9;
	win_element = $("#wins").text(wins);
	lose_element = $("#losses").text(losses);
	guesses_left_element = $("#guesses_left").text(guesses_left);
}



function guess_made(){
	guesses_left-=1;
    guesses_left_element = $("#guesses_left").text(guesses_left);

}

function random_letter(){
	var random_num = Math.floor((Math.random() * 25));
	current_letter = alphabet_array[random_num];
}


function reset_game(){
	initVariables();
	$("#guesses_made").text("");
	random_letter();

}
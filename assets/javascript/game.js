$(document).ready(function() {
	var randomNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var redCrystalNum;
	var yellowCrystalNum;
	var blueCrystalNum;
    var greenCrystalNum;

	function newNumbers() {
		randomNumber = Math.floor(Math.random() * 102) + 19;
		redCrystalNum = Math.floor(Math.random() * 12) + 1;
		yellowCrystalNum = Math.floor(Math.random() * 12) + 1;
		blueCrystalNum = Math.floor(Math.random() * 12) + 1;
		greenCrystalNum = Math.floor(Math.random() * 12) + 1;
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#randomNumber").text(randomNumber);
		$("#totalScore").text(totalScore);
		$("#redCrystal").attr("data-crystalvalue", redCrystalNum);
		$("#yellowCrystal").attr("data-crystalvalue", yellowCrystalNum);
		$("#blueCrystal").attr("data-crystalvalue", blueCrystalNum);
		$("#greenCrystal").attr("data-crystalvalue", greenCrystalNum);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

	}

	function playerWins() {
		$("#winOrLose").text("Congrats! You win!");
		wins++;
		$("#wins").text(wins);
	}

	function playerLoses() {
		$("#winOrLose").text("Sorry! You lose!");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".crystalimg").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});


	$(".crystalimg").on("click", function() {
		if (totalScore >= randomNumber) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === randomNumber) {
			playerWins();
        } 
        
        else if (totalScore > randomNumber) {
			playerLoses();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});

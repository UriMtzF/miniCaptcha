var firstNumber = Math.floor((Math.random() * 10) + 1);
var secondNumber = Math.floor((Math.random() * 10) + 1);
var result = firstNumber + secondNumber;
var userAnswer;
function load(){
	document.getElementById("generatedCaptcha").placeholder = firstNumber + "+" + secondNumber;
}

function check(){
	userAnswer = document.getElementById("userInput").value;

	if (userAnswer == result){
		document.getElementById("userInput").classList.remove("bg-warning");
		document.getElementById("userInput").classList.add("bg-success");
		document.getElementById("finalSubmit").classList.remove("disabled");
	}
	else{
		load();
	}
}

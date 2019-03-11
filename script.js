var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var output = document.querySelector("h3");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
init();


function init(){
	changeBackground();
	color1.addEventListener("input", changeBackground);
	color2.addEventListener("input", changeBackground);
	randomButton.addEventListener("click", getRandomBackground);
}

function changeBackground(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	changeOutput();
}

function changeOutput(){
	output.textContent = body.style.background + ";";
}

function getRandomBackground() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  changeBackground();
}

function getRandomColor(){
	var letters = '0123456789ABCDEF';
 	var color = '#';
  	for (var i = 0; i < 6; i++) {
  	  color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}













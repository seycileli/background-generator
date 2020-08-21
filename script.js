const css = document.querySelector("h3");
const colorOne = document.querySelector(".colorOne");
const colorTwo = document.querySelector(".colorTwo");
const body = document.getElementById("generator");
const random = document.querySelector(".random");

/* Generate colors */
function setColor() {
	body.style.background = 
	"linear-gradient(to right, " + 
	colorOne.value + 
	", " + 
	colorTwo.value + ")";

	css.textContent = body.style.background + ";";
}

colorOne.addEventListener("input", setColor);
colorTwo.addEventListener("input", setColor);

/* Random color generator */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 
function randomColor() {
  colorOne.value = getRandomColor();
  colorTwo.value = getRandomColor();
  setColor();
}

random.addEventListener("click", randomColor);

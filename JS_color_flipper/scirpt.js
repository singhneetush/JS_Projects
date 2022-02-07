/* DOM Elements */

const heading = document.querySelector('.content-head');
const colorName = document.getElementById('col-name');
const button = document.getElementById('btn');
console.log(colorName);

/* declaring an array to store various color codes */
const colorArray = ['green', 'red', 'rgba(133,122,200)', '#f15025', 'blue'];
button.addEventListener('click', function () {
	const randomNumber = getRandomNumber();
	heading.style.backgroundColor = colorArray[randomNumber];
	colorName.textContent = colorArray[randomNumber];
	console.log(randomNumber);
});

function getRandomNumber() {
	return Math.floor(Math.random() * colorArray.length);
}

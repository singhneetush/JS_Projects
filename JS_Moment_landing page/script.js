//DOM Elemets
const time = document.getElementById('time');
const date = document.getElementById('date');
const greet = document.getElementById('greet');
const name = document.getElementById('name');
const mssg = document.getElementById('mssg');
const focus = document.getElementById('focus');

//setting the AmPm

const showAmPm = true;

//js has an in-built object named date
//we will declare a variable d and initialize it to new date .

//showTime()

function showDateTime() {
	let d = new Date();
	let currHour = d.getHours();
	let currDate = d.getDate();
	let currMonth = d.getMonth();
	let currYear = d.getFullYear();

	let currMin = d.getMinutes();
	let currSec = d.getSeconds();

	//adding zero to minutes
	//check for the minute to be < 10
	/* if currMin < 10 
    do '0' + 'currMin'*/

	//show amPm()
	const amPm = currHour >= 12 ? 'PM' : 'AM';

	currHour %= 12;

	//let fullCurrTime = currHour + ':' + currMin + ':' + currSec;

	let fullCurrTime = `${currHour}:${addZero(currMin)}:${addZero(
		currSec
	)} ${amPm} `;

	let fullDate = currDate + '-' + currMonth + 1 + '-' + currYear;

	time.innerHTML = fullCurrTime;
	date.innerHTML = fullDate;

	//The first parameter is a function to be executed.
	//The second parameter indicates the number of milliseconds before execution.
	setTimeout(showDateTime, 1000);
}

//The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN.
// Add Zeros
function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//setting the background image
//setting the greeting

function greetBack() {
	let today = new Date(),
		hour = today.getHours();
	if (hour < 12) {
		//morning
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/7vDLJFb/morning.jpg')";
		greet.textContent = 'Good Morning';
	} else if (hour < 16) {
		//afternoon
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
		greet.textContent = 'Good Afternoon';
	} else if (hour < 19) {
		//evening
		document.body.style.backgroundImage = "url('eve.jpeg')";
		greet.textContent = 'Good Evening';
	}
	//night
	else {
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/924T2Wv/night.jpg')";
		greet.textContent = 'Good Night !';
		mssg.textContent = 'Hope you sleep on time ! ';
		document.body.style.color = 'white';
	}
}

//getting the name

function getName() {
	const grt = localStorage.getItem('name');
	if (grt == null) {
		name.textContent = '[Enter Your Name ]';
	} else {
		name.textContent = grt;
	}
}

//setting the name
function setName(e) {
	if (e.type === 'keypress') {
		//make sure enter key is pressed

		if (e.which == 13 || e.keycode == 13) {
			localStorage.setItem('name', e.target.innerText);

			name.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText);
	}
}

// Get Focus
function getFocus() {
	const f = localStorage.getItem('focus');
	if (f == null) {
		focus.textContent = '[Enter Focus]';
	} else {
		focus.textContent = '[Enter Focus]';
	}
}

// Set Focus
function setFocus(e) {
	if (e.type === 'keypress') {
		// Make sure enter is pressed
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem('focus', e.target.innerText);
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showDateTime();
greetBack();
getName();
getFocus();

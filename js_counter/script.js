/* ============ */
/* selecting the DOM elements */

let up = document.getElementById('up-arrow');
let num = document.getElementById('num');
let down = document.getElementById('down-arrow');

up.addEventListener('click', increement);

function increement() {
	const term = num.innerHTML++;
}

down.addEventListener('click', okay);

function okay() {
	const ok = num.innerHTML--;
}

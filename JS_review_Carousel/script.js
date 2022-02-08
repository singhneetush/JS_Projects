/* DOM ELEMENTS */

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('btn');

const pic = document.getElementById('person-img');
const fName = document.getElementById('full-name');
const jobType = document.getElementById('job');
const about = document.getElementById('about');

/* ========================Array of objects ========================= */
/* Storing the details in an object  */

const reviews = [
	{
		id: 1,
		name: 'Susan Smith',
		job: 'web developer',
		img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: 'Anna Johnson',
		job: 'web designer',
		img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
		text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		id: 3,
		name: 'Peter Jones',
		job: 'intern',
		img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
		text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		id: 4,
		name: 'Bill Anderson',
		job: 'the boss',
		img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
];

//set a starting item
/* const currentItem = 0;  => this will give error as assignment to const in invalid , and we have to inc or dec the value of currentItem in order to traverse the entire array of objects */

let currentItem = 0;

//load initial item

window.addEventListener('DOMContendLoaded', function () {
	const item = reviews[currentItem];
	pic.src = item.img;
	fName.textContent = item.name;
	jobType.textContent = item.job;
	about.textContent = item.text;
});

//show person based on item

function showPerson(person) {
	const item = reviews[person];
	pic.src = item.img;
	fName.textContent = item.name;
	jobType.textContent = item.job;
	about.textContent = item.text;
}

//show next item

nextBtn.addEventListener('click', function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});
prevBtn.addEventListener('click', function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

//show random person -> on surprise me button

randomBtn.addEventListener('click', function () {
	console.log('hello');

	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem);
});

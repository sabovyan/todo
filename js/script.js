const plus = document.getElementById('plus');
const formClose = document.querySelector('.form-container__close');
const toDoForm = document.getElementById('toDoForm');
const inputNote = document.getElementById('note');
const formContainer = document.getElementById('form-container');
const addBtn = document.getElementById('add');
const toDoList = document.getElementById('to-do__List');

//to display the form
plus.addEventListener('click', () => {
	formContainer.style.display = 'flex';
	notify.style.visibility = 'hidden';
	inputNote.value == '';
	inputNote.focus();
});

// to close the form
formContainer.addEventListener('click', (event) => {
	if (event.target === formClose) {
		formContainer.style.display = 'none';
	}
	if (event.target === formContainer) {
		formContainer.style.display = 'none';
	}
});

//to create a new list item
addBtn.addEventListener('click', function (event) {
	event.preventDefault();
	if (inputNote.value == '') {
		notify.style.visibility = 'visible';
		return false;
	} else {
		notify.style.visibility = 'hidden';
	}
	//to pass the value of the input to a span
	let newSpan = document.createElement('span');
	newSpan.innerHTML = inputNote.value;
	console.log(newSpan);
	// to create a closing button for list item
	let newClose = document.createElement('i');
	newClose.classList.add('fas');
	newClose.classList.add('fa-times');
	newClose.classList.add('to-do__close');

	let newItem = document.createElement('li');
	newItem.classList.add('to-do__item');
	newItem.classList.add('item');
	newItem.append(newSpan);
	newItem.append(newClose);
	toDoList.append(newItem);
	if (newItem) {
		rocket.classList.add('move');
		setTimeout(() => {
			rocket.classList.remove('move');
		}, 500);
	}

	inputNote.value = '';
	return false;
});

// to show the lines as done or close it

toDoList.addEventListener('click', function (event) {
	let li = event.target.closest('.to-do__item');
	let close = event.target.closest('.fa-times');
	if ((event.target = close)) {
		li.classList.add('item--closed');
		setTimeout(() => {
			li.remove();
		}, 500);
	}

	if ((event.target = li)) {
		if (li.classList.contains('item')) {
			li.classList.remove('item');
			li.classList.add('done');
		} else if (li.classList.contains('done')) {
			li.classList.remove('done');
			li.classList.add('item');
		}
	}
});

function closingAnime(item) {
	return item;
}

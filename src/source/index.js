const plus = document.getElementById('plus');
const formClose = document.querySelector('.form-container__close');
const inputNote = document.getElementById('note');
const formContainer = document.getElementById('form-container');
const addBtn = document.getElementById('add');
const toDoList = document.getElementById('to-do__List');
const notify = document.getElementById('notify');
const rocket = document.getElementById('rocket');
// basic functionality
const form = {
	eachGoal: [],
	display() {
		formContainer.style.display = 'flex';
		notify.style.visibility = 'hidden';
		inputNote.value = '';
		inputNote.focus();
	},
	hide() {
		formContainer.style.display = 'none';
	},
	add(value) {
		this.eachGoal.push(value);
		// to pass the value of the input to a span
		const newSpan = document.createElement('span');
		newSpan.innerHTML = value;

		// to create a closing button for list item
		const newClose = document.createElement('i');
		newClose.classList.add('fas');
		newClose.classList.add('fa-times');
		newClose.classList.add('to-do__close');

		const newItem = document.createElement('li');
		newItem.classList.add('to-do__item');
		newItem.classList.add('item');
		newItem.setAttribute('tabindex', '0');
		newItem.append(newSpan);
		newItem.append(newClose);
		toDoList.append(newItem);
		if (newItem) {
			rocket.classList.add('move');
			setTimeout(() => {
				rocket.classList.remove('move');
			}, 500);
		}
	},
	remove(item) {
		form.lastItem = item.firstElementChild.innerText;

		this.eachGoal = this.eachGoal.filter((elem) => {
			if (elem !== item.firstElementChild.innerText) {
				return elem;
			}
		});
		item.classList.add('item--closed');
		setTimeout(() => {
			item.remove();
		}, 500);
	},
};

// to display the form

plus.addEventListener('click', () => {
	form.display();
});

// to close the form
formContainer.addEventListener('click', (event) => {
	if (event.target === formClose) {
		form.hide();
	}
	if (event.target === formContainer) {
		form.hide();
	}
});

// keyboard events
window.addEventListener('keyup', (event) => {
	/* console.log(event); */
	if (event.key === 'Escape') {
		form.hide();
	}
	if (event.key === 'n' && event.altKey) {
		form.display();
	}
	if (event.key === 'r' && event.altKey) {
		form.add(form.lastItem);
	}
});

// to create a new list item
addBtn.addEventListener('click', (event) => {
	event.preventDefault();
	if (inputNote.value.trim() == '') {
		notify.style.visibility = 'visible';
		return false;
	}
	notify.style.visibility = 'hidden';

	form.add(inputNote.value);
	inputNote.value = '';
	return false;
});

// to show the lines as done or close it

toDoList.addEventListener('click', (event) => {
	const li = event.target.closest('.to-do__item');
	const span = event.target.closest('.to-do__item > span');
	const close = event.target.closest('.to-do__close');
	if (event.target === close) {
		form.remove(li);
	}

	if (event.target === li || event.target === span) {
		if (li.classList.contains('item')) {
			li.classList.remove('item');
			li.classList.add('done');
		} else if (li.classList.contains('done')) {
			li.classList.remove('done');
			li.classList.add('item');
		}
	}
});

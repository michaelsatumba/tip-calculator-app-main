// alert('hello');

const five = () => {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.05;

	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
};

const ten = () => {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.1;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
};

const fifteen = () => {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.15;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
};

const twentyFive = () => {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.25;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
};

const fifty = () => {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.5;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
};

// const custom = () => {};

const custom = document.querySelector('#custom');
// .addEventListener('change', () => console.log('Changed!'));

custom.addEventListener('input', () => {
	// alert(custom.value);
	let x = document.getElementById('bill').value;
	result = (x * custom.value) / 100;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
});

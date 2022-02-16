// alert('hello');

function five() {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.05;

	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
}

function ten() {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.1;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
}

function fifteen() {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.15;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
}

function twentyFive() {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.25;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
}

function fifty() {
	let x = document.getElementById('bill').value;
	// alert(x);
	result = x * 0.5;
	let numberOfPeople = document.getElementById('people').value;
	secondResult = result / numberOfPeople;
	sum = x / numberOfPeople;
	document.getElementById('totalTip').value = result;
	document.getElementById('tip').value = secondResult;
	document.getElementById('total').value = sum;
}

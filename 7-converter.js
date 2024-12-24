function converter(sum, inputVal, outputVal) {
	if (inputVal == 'EUR' && outputVal == 'RUB') {
		return sum * 105;
	} else if (inputVal == 'RUB' && outputVal == 'EUR') {
		return sum * 0.009;
	} else if (inputVal == 'USD' && outputVal == 'RUB') {
		return sum * 33.3;
	} else if (inputVal == 'RUB' && outputVal == 'USD') {
		return sum * 0.03;
	} else if (inputVal == 'EUR' && outputVal == 'USD') {
		return sum * 3;
	} else if (inputVal == 'USD' && outputVal == 'EUR') {
		return sum * 0.3;
	}
	return null;
}

console.log(converter(100, 'RUB', 'EUR'));
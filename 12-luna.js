let card = '4561-1213-4367-2612';
let clearCard = card.replaceAll('-', '');
function correctNum(num) {
	let Numb = true;
	for(const symb of num) {
		if (isNaN(Number(symb))) {
			Numb = false;
			break;
		}
	}
	return Numb;
}
console.log(correctNum(clearCard));

//не понимаю, каким методом делать вычисления только по нечетным
const date = ['05-01-2023', '30-03-2024', '35.40', 'тест', '31/12/2024'];

function calendar(massive) {
	let valid = massive.filter(day => {
		return day === '31/12/2024'
	});
	let a = valid.join();
	let b = a.split('/');
	let c = b.join('-');
	let transform = c.split();

	return transform;
}

console.log(calendar(date));
//не понимаю, как делать валидацию. Сделал только преобразование
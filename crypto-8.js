function crypto(password) {
	const split = password.split('');
	let a = split.splice(0, 3);
	
	[a[0], a[1], a[2]] = [a[2], a[1], a[0]];
	
	let reunion = a.concat(split);

	return reunion.join('');
}
console.log(crypto('qwerty'))

function check(password, encryptedPassword) {
	if (password === crypto(encryptedPassword))
		return true;
	return false;
}

console.log(check('qwerty', crypto('qwerty')));
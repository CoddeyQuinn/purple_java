function crypto(password) {
	const split = password.split('');
	function del() {
		split.unshift(split.pop());
	}
	del();
	del();
	del();
	return split.join('');
}


console.log(crypto('qwerty'));



function check(keyWord, keyWord2) {
	const splitKeyWord = keyWord.split('');
	function undel() {
		splitKeyWord.push(splitKeyWord.shift());
	}
	undel();
	undel();
	undel();
	const reunion = splitKeyWord.join('');
	if (reunion === keyWord2) {
		return true;
	}
	return false;
}
	

console.log(check('rtyqwe', 'qwerty'));
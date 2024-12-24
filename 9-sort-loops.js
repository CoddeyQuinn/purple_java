const arr = [1, 40, -5, 10, 0];

function sorting(massive) {
    for(let i = 0; i < massive.length; i++) {
        for(let j = 1; j < massive.lenght; j++) {
            if (massive[i] > massive[j]) {
               const a = massive.splice(i, 1);
	            massive.unshift(a[i]);
            }
        }
    }
    return massive;
}

console.log(sorting(arr));
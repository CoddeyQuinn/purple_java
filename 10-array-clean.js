let arr = [1, -2, 3, -4];

function filter(num) {
    if (num < 0) {
        return false;
    }
    return true;
}

let arrFiltred = [];
function clean(massive, fn) {
    for(let element of massive) {
       fn(element);
	   console.log(fn(element));
       if (element = true) {
        arrFiltred.push(element);
    }
}
    return arrFiltred;

}

console.log(clean(arr, filter));
//не понимаю, как сделать, чтобы возвращал массив с числами, а не [ true, true, true, true ]
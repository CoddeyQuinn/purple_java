let addressLatY = 30;
let addressLongX = 100;
let positionLatY = 15;
let positionLongX = 25;

const destination = Math.sqrt((addressLongX - positionLongX) ** 2 + (addressLatY - positionLatY) ** 2);
console.log(`Расстояние будет равно ${destination}км`);
const licence = true;
const age = 18;
const isDrunk = false;
const canDrive = licence && age >= 18 && !isDrunk;

console.log(`${canDrive ? 'Может' : 'Не может'} водить автомобиль`);

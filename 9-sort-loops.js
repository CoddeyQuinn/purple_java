const arr = [1, 40, -5, 10, 0];

function sorting(massive) {
    const clonedMassive = massive.slice();
    for(let i = 0; i < clonedMassive.length; i++) {
        for(let j = 1; j < clonedMassive.length; j++) {
            if (clonedMassive[i] > clonedMassive[j]) {
               [clonedMassive[i], clonedMassive[j]] = [clonedMassive[j], clonedMassive[i]];
            }
        }
    }
    return clonedMassive;
}

console.log(sorting(arr));
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//remove error

const mutima = temperatures.filter(vincent => vincent !== 'error');
// console.log(mutima)

// const max = Math.max(...mutima);
// console.log(max)
// const min = Math.min(...mutima)
// console.log(min)


// //calculate ampl = max - min

// const amplitude = max - min;
// console.log(amplitude)

console.log(`amplitude is equal to Max : ${Math.max(...mutima)} - Min : ${Math.min(...mutima)} = ${Math.max(...mutima) - Math.min(...mutima) }`) 
//for(initial_value; condition; Modifier){ //block of code}
//used to add break end = ''

// for(let i = 1; i<= 100; i++){
//     console.log(i, end = '');
// }

//loop through array

// let arr = [20,30,40,50,60,70];

// for(let i = 0; i<= (arr.length) -1; i++){
//     console.log(arr[i], end = '');
// }

//get sum of env and odd nbrs

// let numbers = [1,2,3,4,5,6,7,8,9]
// let sumEvn = 0;
// let sumOdd = 0;

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         sumEvn += numbers[i];
//     }else{
//         sumOdd +=numbers[i]  
//     }
// }


// // let difference = sumEvn - sumOdd;
// console.log(`sum of even is :${sumEvn}`)
// console.log(`the sum of odd : ${sumOdd}`)
// console.log(`the difference is (sum of Even) = ${sumEvn} - (sum of Odd) = ${sumOdd} = ${sumEvn - sumOdd}`)


// let fruits = ["Kellia","Coco", 'niha','hadidja']

// for(i in fruits){
//     console.log(fruits[i])
// }

// let obj = {
//     'num1':1,
//     'num2':2,
//     'num3':3,
//     'num4':4,
// }
// let sumEven = 0;
// let sumOdd = 0;

// for(i in obj){
//     if(obj[i] %2 == 0){
//         sumEven += obj[i]
//     }else{
//         sumOdd += obj[i]
//     }
// }

// console.log(`the sum of Even is : ${sumEven} and sum of odd is : ${sumOdd} while difference is : ${sumEven - sumOdd}`)

// let studentsNames = ['ishimwe','isac','mucyo','mubi','john',]

// for (let i of studentsNames){
//     console.log(`${i} is at index ${i.indexOf[i]}`)
// }

const studentsMarks = {
    ishimwe:20,
    isac:40,
    mucyo:55,
    mubi:43,
    john:0
}

for(let student in studentsMarks){
    console.log(`student: ${student} has marks : ${studentsMarks[student]}`);
}
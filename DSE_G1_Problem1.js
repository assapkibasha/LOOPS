// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// //remove error

// const mutima = temperatures.filter(vincent => vincent !== 'error');
// console.log(mutima)

// const max = Math.max(...mutima);
// console.log(max)
// const min = Math.min(...mutima)
// console.log(min)


// //calculate ampl = max - min

// const amplitude = max - min;
// console.log(amplitude)

// Math.average(amplitude)
// console.log(average)


let employees = {
    emp1: {
        empName : 'kibahsa',
        empSlary : 30,
        empRate: 1
    },

    emp2:{
         empName : 'arthur',
        empSlary : 29,
        empRate: 2
    },
     emp3:{
        empName : 'eve',
        empSlary : 34,
        empRate: 3
    },
    emp4:{
        empName : 'ever',
        empSlary : 34,
      
    }
}

let newSalary;
 for (let key in employees){
    if(employees.hasOwnProperty(key))
    {
        if(employees[key].empRate == 1){
            console.log(`rate is: ${employees[key].empRate} bonus rate:  ${(employees[key].empSlary * 0.0).toFixed()}    new Salary: ${employees[key].empSlary + employees[key].empSlary * 0.0} Frw `)
        }else if(employees[key].empRate == 2){
            console.log(`rate is ${employees[key].empRate} bonus rate:   ${(employees[key].empSlary * 0.2).toFixed()}    new Salary: ${employees[key].empSlary + employees[key].empSlary * 0.2} Frw the rate is ${(employees[key].empSlary * 0.2).toFixed()}` )
        }else if(employees[key].empRate == 3){
            console.log(`rate is ${employees[key].empRate} bonus rate:   ${(employees[key].empSlary * 0.3).toFixed()}    new Salary ${employees[key].empSlary + employees[key].empSlary * 0.3} Frw the rate is ${(employees[key].empSlary * 0.3).toFixed()}`)

        }
    }
 }
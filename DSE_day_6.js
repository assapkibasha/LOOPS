
// console.log('=========================Group One DSE work Day 6====================== ,')

// //function to convert fahrneiht to celsius
// function fahrenheitToCelsius(fahreneiht){
//     return(fahreneiht - 32) * 5/9
// }

// //function to convert celsius to fahrneiht
// function celsiusToFahreneiht(celsius){
//     return(celsius * 9/5) + 32
// }

// //calling functions (fahrneiht) 
// console.log(`Fahrneiht to celsius`);
// console.log(`20 F to C = ${fahrenheitToCelsius(20).toFixed()}`)
// console.log(`53 F to C = ${fahrenheitToCelsius(53).toFixed()}`)
// console.log(`70 F to C = ${fahrenheitToCelsius(70).toFixed()}`)

// //calling function(celsius)

// console.log(`celsius to Fahrneiht`);
// console.log(`20 C to F = ${celsiusToFahreneiht(20).toFixed()}`)
// console.log(`12 C to F = ${celsiusToFahreneiht(12).toFixed()}`)
// console.log(`21 C to F = ${celsiusToFahreneiht(21).toFixed()}`)

// console.log('============================Second question=====================')

// let minutes = [45, 0, 20, 10, 60, 0, 30]

// for(let i=0; i < minutes.length; i++){
//     let min = minutes[i];
//     let classification;

//     if(min >=30){
//         classification = "Good"
//     }else if(min > 0 && min <30){
//         classification = "fair"
//     }else{
//         classification = "missed"
//     }
//     console.log(`Day ${i+1}: ${classification}`)
// }


let minutes = [45,0,20,60,0,30];
for(let i = 0; i < minutes.length; i++){
    let min = minutes[i];
    let classification;

    if(min >= 30){
        classification = "good";
    }else if (min > 0 && min <30){
        classification = 'fair'
    }else{
        classification = 'missed';
    }

    console.log(`Day ${i + 1} --> ${classification}`);
    
}


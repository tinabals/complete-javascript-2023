'use strict'

//calculate temperatur amplitude and keep in mind that there might be sensor error sometimes
const temperature = [3,-2,-6,-1, 'error', 9,13,17,15,9,5]


//solving the problem . 

//1 Understanding the problem
// I need to understand what a temperature amplitude is
//it is the difference between the highest and lowest temperature in  an arrray
//how to compute the max and min temperature
//what does a sensor error look like and what to do when occurs

//2 Breaking the problem into sub problems
//How to ignore errors?
//find Max Value in temp array
//find Min value
//subract min frm max and return it(this is the amplitude)

const calcTempAmplitude = function(temps){
    let max = temps[0]
    let min = temps[0] // the first element in the array
    for(let i=0; i < temps.length; i++){
        const currentTemp = temps[i]
       if(typeof currentTemp !== 'number')continue;
       if(currentTemp > max){
        max = currentTemp
        }
        if (currentTemp < min){
            min = currentTemp
        }
     }
   return max - min
}

console.log(calcTempAmplitude([3,7,4,8,1]))
const amplitude = (calcTempAmplitude(temperature))
console.log(amplitude)


//problem 2
//understanding the problem
//function should now take two arrays of functions
//do we have to implement two functionality? no
//we have to merge the arrays together

//breking sub problems

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
const calcTempAmplitudeNew = function(temps1,temps2){
    const temps = temps1.concat(temps2)
    let max = temps[0]
    let min = temps[0] // the first element in the array
    for(let i=0; i < temps.length; i++){
        const currentTemp = temps[i]
       if(typeof currentTemp !== 'number')continue;
       if(currentTemp > max){
        max = currentTemp
        }
        if (currentTemp < min){
            min = currentTemp
        }
     }
   return max - min
}

console.log(calcTempAmplitudeNew([3,5,1],[9,0,5]))
// const amplitudeNew = (calcTempAmplitudeNew(temperature))
// console.log(amplitude)
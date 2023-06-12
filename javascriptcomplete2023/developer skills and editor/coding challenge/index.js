//understand the problem

//log a sting of forecast with temps
//the temps is an array
//the array index + 1 determines the position of the array

//declare the function
//add the logic for the index + 1
//use temperal string
//store temperal strings in a variable
//return the string

temperatureData1 = [17,21,23]
temperatureData12 = [12,5,-5,0,4]
const printForecast = function(arr){
    let forecast = ''
   for (let i=0; i < arr.length; i++){
    let day = i + 1;
    forecast += `${arr[i]} in ${day} days... `
}
return forecast
}

console.log(printForecast(temperatureData1))
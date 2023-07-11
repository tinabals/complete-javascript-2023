'use strict';
const bookings = []
const createeBooking = function(flightNumber, numPassengers = 1, price=199 + numPassengers){
    const booking = {
        flightNumber,
        numPassengers,
        price
}
console.log(booking)
bookings.push(booking)
}

createeBooking('LSDT', 100, 200)
createeBooking('LSDT', 2)
// to skip the middle and use the default parameter
createeBooking('HKOI', undefined, 1000)


//how passing 

const flight = 'HUJ234'
const dami ={
    name : 'Damilola Balogun',
    passport : 236890090993
}

const checkIn  = function (flightNum, passenger){
   flightNum ='LSS999',
   passenger.name = 'Miss ' + passenger.name  
   if(passenger.passport === 236890090993){
    alert('Check in')
   } else{
    alert('wrong passport')
   }
}

checkIn(flight, dami) 
console.log(flight) //would be 'HUJ234' not 'LSS999',
console.log(dami)  //'Miss Damilola Balogun',
// checkIn( dami)
// checkIn(flight)


//passing a primite type it is just ike copying but if you pass an object...it is uodated

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000)
}

newPassport(dami)
checkIn(flight, dami)



//first class and higher order functions

//functions are treated as values

// functions are another type of objects in js
//function are passed as values in other functions
//you can return a function frommanpther functions


//higherorder
//receives another function as an argument that returns a new function pr both
// etc addEventListener
//the function passed is a callback function
const greet = () => console.log('heyDami')
// btn.addEventListener('click', greet)//greet is the callback function// the whole function is a an higher order function


//function that returns a new function
function count(){
    let counter = 0
    return function(){
        counter++
    } 
}

count()
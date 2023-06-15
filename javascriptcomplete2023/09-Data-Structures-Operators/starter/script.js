'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order : function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery : function({starterIndex=1,mainIndex=0,time ='20:00',address='orlando owo'}){
    console.log(`orderReceived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be dilivered to ${address} at ${time}  `)
  }
};

//DEstructuring onjects
//we use {} and then the matching property names

const {name,openingHours,categories} = restaurant
console.log(name,openingHours,categories)

//when you want the variable names to be different from the propertynames

const {name: restaurantName, openingHours:hours, categories:tags} = restaurant
console.log(restaurantName,hours,tags)

//default values
const {menu = [], starterMenu :starters = []} = restaurant


//switching or mutating variables
let a= 111;
let b = 999;

//  

//nrsted objects
const{fri} = openingHours

restaurant.orderDelivery({
  time : '22:38',
  address : 'Via del Sole, 21',
  mainIndex : 2,
  starterIndex : 2
})
restaurant.orderDelivery({
  time : '22:38',
  starterIndex : 2
})














      //  ARRAY DESTRUCTURING
//array destructuring : breeaking containers into smalker variables
const arr =[1,2,3]
const [x, y, z] = arr;
console.log(x,y,z)
//eventhough we destructured we didnt destroy the original array...we just upacked it

const [first,second] = restaurant.categories

//to get the 1st and third alone ..just skip it
let [main, ,secondary] = restaurant.categories
console.log(first,second)

//to invert it or switching variables
// const temp = main
// main = secondary
// secondary = temp

// [main, secondary]=[secondary, main] 

console.log(restaurant.order(2,0))

const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse)

//nested destructuring
const nested = [2,4,[5,6]]
// const [i,,j] = nested 
// console.log(i, j)

//to destucture th inner array
const [i,,[k,l]] = nested
console.log(i,k,l)


//Default values
const [p=1,q=1,r=0] = [8,9]
console.log(p,q,r)
// r becomes 0
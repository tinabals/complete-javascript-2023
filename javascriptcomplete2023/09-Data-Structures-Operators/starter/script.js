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
  }, 
  orderPasta : function(ing1, ing2, ing3)
  {
     console.log(`here is your delicious meal ${ing1}, ${ing2} and ${ing3}`)
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



//spread operator
//we are writing new array simply by expanding an array and addig something else to it
//it helps us get elements out of arrays
const array = [7,8,9];

const badNewArr = [1,2,array[0], array[1], array[2]]
console.log(badNewArr)

// const newArr = [1,2, ...array]
const newArr = [ ...array, 1, 2]
console.log(newArr)
console.log(...newArr) // when you need the elements individually

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(...newMenu) 

const mainMenuCopy = [...restaurant.mainMenu]

//joining 2 arrays
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menus, "hii")

//iterables : strings, arrays , maps, sets but not objects

const str = 'Damilola'
const letters = [...str, ' ', 's']
console.log(letters) //they are now individual elements
//spread used on only arrays or funcions


//real world example
// const ingredients = [prompt('Let\'s make pasta! ingredient 1'),
//  prompt('Ingredient 2?'), 
//  prompt('ingredient 3?')]
// console.log(ingredients)
// restaurant.orderPasta(...ingredients)


//onjects
const newRestaunrant = {foundingYear : 2023,...restaurant, founder: 'Dami'}

console.log(newRestaunrant)


const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Ristorante narma'
console.log(restaurantCopy.name, restaurant.name)
// 'use strict';
//Enhanced Onject Literals


//

const weekdays = ['mon', 'Tues','Wed', 'Thurs', 'Fri','Sat']

//before
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   }
// };
//After computing which is a new computing
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  }
};



// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  
  order : function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery : function({starterIndex=1,mainIndex=0,time ='20:00',address='orlando owo'}){
    console.log(`orderReceived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be dilivered to ${address} at ${time}  `)
  }, 
  orderPasta : function(ing1, ing2, ing3)
  {
     console.log(`here is your delicious meal ${ing1}, ${ing2} and ${ing3}`)
  },

  //FORMER WAY OF WRITING METHODS
  // orderPizza : function(mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient, otherIngredients)
  // }

  //NEW WAY OF WIRITING METHODS
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients)
  }
};


console.log(restaurant)
//DEstructuring onjects
//we use {} and then the matching property names

// const {name,openingHours,categories}  = restaurant
// console.log(name,openingHours,categories)

//when you want the variable names to be different from the propertynames




//optional Chaining
//without

if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaunrant.openingHours.mon.open, "we dey open")
}

//with 
// console.log(restaurant.openingHours.mon.open)
console.log(restaurant.openingHours.mon?.open)
 
//further example
const days = ['Mon', 'Tue','Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

for(const day of days){
  console.log(day, 'each')
 const exist = restaurant.openingHours[day]?.open ?? 'closed'
 console.log(exist)
}





// object loop

//property Names
const properties = Object.keys(openingHours)
console.log(properties, "hullo")

let openStr = `We are open on ${properties.length} days :`
console.log(openStr)
for(const day of properties){
  openStr += ` ${day}, `
}

console.log(openStr)


//Property values
const values = Object.values(openingHours)
console.log(values)

//entries 
const entries = Object.entries (openingHours)
console.log(entries)


for ( const [key,{open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}




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


//rest pattern
// does the opp spread

// it packs elements into an array 

//Destructuring
//SPREAD because of right side of assingment
const arrRest = [1,2,...[3,4]]
console.log(arrRest)

//REST  because of left side of assignment

const [c,d, ...others] = [1,2,3,4,5]
console.log(c,d, others)//it takes the rest of the array and puts them in anither array

// const ['pizza, , 'Risotto'] = [...restaurant.mainMenu,...restaurant.starterMenu] 
const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu] 
//the left are variables
console.log(pizza, Risotto, otherFood)
// it should always be the last in the assignment
// const [, ...otherFood, pizza, , Risotto] = [...restaurant.mainMenu,...restaurant.starterMenu] 
//dont do the above

//objects

const {sat, ...weekDsys} = restaurant.openingHours
console.log(sat, weekDsys)
//it has to be the same of the variable


//functions: rest arguments
const add = function(...numbers){
let sum = 0;
for(let i=0; i< numbers.length; i++){
  let num = numbers[i]
  sum += num
}
console.log(sum)
  return sum
}

add(2,5)
add(2,3)
add(8,2,7)

const xArray= [2,7,9]
add(...xArray)

restaurant.orderPizza('mushroom','onion', 'spinach', 'melon', 'beans')
restaurant.orderPizza('mushroom')


// spred ...values seperated by commas
// rest ...variables seperated by comma


//Short circuiting
console.log('=====OR=====')

console.log(3 || 'Jonas') //if the first value is a truthy value... t would return the truthy value..it ont even evaluate the other value
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null)

console.log(undefined || 0 || ' '|| 'hello'|| 23 || null)

// udefined, 0, null  is falsy
restaurant.numGuests = 23 //if this is 0...it would be a falsy value..
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10

console.log(guests1)

// const guests2 = restaurant.numGuests || 10
// console.log(guests2)


console.log('=====AND=====')
//it shortcircuits if the first value is falsy. the evaluation continues and the last variable shows

console.log(0 && 'Jonas') //returned 0 because 0 is falsy value
console.log(7 && 'Jonas') // returns Jonas because 7 is a ttuthy value... it returns the last evaluated value 

console.log('Hello' && 23 && null && 'Jonas') // it returns null...the last truthy calue was 23

//practical example
if (restaurant.orderPizza){
  restaurant.orderPizza('Mushroom')
}

restaurant.orderPizza && restaurant.orderPizza('Pizza', 'Mushroom')


// nullish oprator
restaurant.numGuests = 0
const guests = restaurant.numGuests || 10
console.log(guests) 

const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)
//it deals with null, empty amd undefined values



const rest1 = {
  name : 'Capri',
  numGuests : 0
}

const rest2 = {
  name : 'La Piazza',
  owner : 'Giovanni Rossi'
}

rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests = rest1.numGuests || 10

// console.log(rest2.numGuests, rest1.numGuests)


//OR ASSIGNMENT VARIABLE
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10
// console.log(rest2.numGuests, rest1.numGuests)

//Logical Nullish Assignment Operator

rest1.numGuests ??= 10
rest2.numGuests ??= 10
console.log(rest2.numGuests, rest1.numGuests)


// rest2.owner  = rest2.owner && '<ANONYMOUS>' 
// rest1.owner  = rest1.owner && '<ANONYMOUS>' 

// console.log(rest1.owner, rest2.owner)
// rest1.owner returns undefined because it doesnt exist


//And Assignment operator
rest2.owner  &&=  '<ANONYMOUS>' 
rest1.owner  &&=  '<ANONYMOUS>' 
console.log(rest1.owner, rest2.owner)



//ForOfLoop

const menuD =[...restaurant.starterMenu, ...restaurant.mainMenu]
for (const item of menuD){
    console.log(item, 'items')
}

for ( const  [i, el] of menuD.entries()){

  console.log(`${i +1} : ${el}`)
}



//Set : They are unique
const orderSet = new Set (['pasta', 'Pizza', 'Pizza', 'Rissoto', 'pasta'])
console.log(orderSet) //all the duplicates are gone

console.log(new Set('Damilola'))
console.log(orderSet.size)

console.log(orderSet.has('Dami'))
console.log(orderSet.has('Pizza')) // similiar to include for array


//to add item to set
orderSet.add('Migroo')
orderSet.add('Migroo')
orderSet.delete('Rissoto')
// orderSet.clear() //To delete
console.log(orderSet)


//you cant get values or retrieve values from a set. just use an array instead


for(const order of orderSet){
  console.log(order)
}

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const staffUnique = [...new Set(staff)]
console.log(staffUnique)


//Maps
// they are used to map val` ues to keys.... the keys can have any type of key...objects, arrays etc

const rest = new Map()
rest.set('name', 'Tina\'s')
rest.set(1,'Nigeria, lola\'s')
rest.set(2,'Korea')
console.log(rest)

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are Close')



  console.log(rest.get('name'))
  console.log(rest.get(true))

  const time = 21
console.log(time> rest.get('open') && time < rest.get('close'))

console.log(rest.has('categories'))
rest.delete(2)
console.log(rest)
console.log(rest.size)
// rest.clear()

const arrr = [1,2]

rest.set(arrr, 'Hello')
console.log(rest, 'rest')

//maps iteration

// const question = new Map(['question', 'What is the programming language in the world'], [1, 'C'], [2,'Java'], [3,'Javascript'], ['correct', 3], [true, 'Correct😊'], [false, 'Try again'])
// console.log(question)




//working with strings
const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0])
console.log('B578'[[0]])
console.log(airline.length)


// methods of strings

console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('Portugal'))



//slice method

console.log(airline.slice(4)) //it start from the index
//it is a sub string
console.log(airline.slice(4,7))


// to get the first word

console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ') + 1))

console.log(airline.slice(1, -1))
console.log(airline.slice(-2))



const checkMiddleSeat = function(seat){
  const s = seat.slice(-1)
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat 🤣')
  } else{
  console.log('You got lucky🤗')
  //B amd E are middle seats
  }
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

console.log(new String('Damilola'))



console.log(airline.toLowerCase())
console.log(airline.toUpperCase())


//fix capitalization in name
const passenger = 'dAmilola'
 const passengerLower = passenger.toLowerCase()
 const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
 console.log(passengerCorrect)


 //comparing emails
//  const email = 'hellojonas@io'
//  const loginEmail = ' Hello@Jonas.Io \n'

//  const lowerEmail = loginEmail.toLowerCase()
//  const trimmedEmail = lowerEmail.trim()
//  console.log(trimmedEmail)

//  const normalizedEmail = loginEmail.toLowerCase().trim()
//  console.log(normalizedEmail)
//  console.log(email === normalizedEmail)
//  console.log(email === normalizedEmail)

const email = 'hellojonas@io';
const loginEmail = ' Hello@Jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);


// REPLACING STRINGS

const priceGB = '288,97$'
const priceUS = priceGB.replace('$', '#').replace(',', '.')

console.log(priceUS)

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replaceAll('door', 'gate'))
console.log(announcement.replace(/door/g, 'gate'))

// BOOLEANS
const planet = 'Airbus A320new'
console.log(planet.includes('A320'))
console.log(planet.includes('Air'))
console.log(planet.startsWith('Airbus'))


//PRACTICE EXERCISE
const checkBaggage  = function(item){
    const baggage = item.toLowerCase()
    if(baggage.includes('knife') || baggage.includes('gun')){
     console.log('you are not allowed on board')
    } else{
      console.log('You are welcome on board')
    }
}

checkBaggage('I have a laptop, some food and a pocket knife')
checkBaggage('Socks and Camera')
checkBaggage('Got some snacks and a gun for correction')



//SPLIT METHOD
console.log('a+very+nice+string'.split('+'))
console.log('Damilola Balogun'.split(' '))

const [firstName,lasName] = 'Damilola Balogun'.split(' ')


const splitNamePractice = function(name){
  const namesArray = []
    const names =  name.split(' ')
     for(const n of names){
    // namesArray.push(n[0].toUpperCase() + n.slice(1))
    namesArray.push(n[0].replace(n[0], n[0].toUpperCase()) + n.slice(1))
     }
  console.log(namesArray.join(' '))
}

splitNamePractice('balogun damilola feyisayo')



//padding
const message = 'Go to gate 23!'

console.log(message.padStart(25, '+').padEnd(30, '+'))
console.log(message)


const maskCreditCard = function(number){
    const str = number + ' ' //converts the number to a string just like String(number)
    const last = str.slice(-4)
    console.log(last, str.length)
    return last.padStart(str.length, '*')

}

console.log(maskCreditCard(5199110742229948))
console.log(maskCreditCard('900908765998'))


//repeat

const message2 = 'Bad weather...All Departures DElayed... '
console.log(message2.repeat(5))


const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`)
}

planesInLine(10)
planesInLine(5)
planesInLine(20)



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n')
  // console.log(rows)
 
  for(const[i, row] of rows.entries()){
  const [first,second] = row.toLowerCase().trim().split('_')
  // console.log(first,second)
  const output = `${first}${second.replace(second[0] , second[0].toUpperCase())}`
  console.log(`${output.padEnd(20, " ")}${'✅'.repeat(i+ 1)}`)
 

  }
})



const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//  console.log(flights.split('+'))


// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

 for (const flight of flights.split('+')){
  const splitted = flight.split(';');
  const [type, from, to, time] = splitted
  const getCode = str => str.slice(0,3).toUpperCase()
  const output = `${type.startsWith('_Delayed')? '🛑' : ''} ${type.replaceAll('_', ' ').trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`
    console.log(output)
 }
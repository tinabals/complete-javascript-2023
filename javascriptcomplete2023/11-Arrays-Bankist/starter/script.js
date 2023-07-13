'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');







const displayMovement =  function(movements){
  containerMovements.innerHTML = ''
   movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}€</div>
     </div>
    
    `
    containerMovements.insertAdjacentHTML('afterbegin', html )
   })
}



const calcDisplaySummary = function(acc){
  
   const income = acc.movements
                  .filter(mov =>  mov > 0)
                  .reduce((acc,mov)=> acc + mov, 0 )
  labelSumIn.textContent = `${income}€`
  
  const out = acc.movements
              .filter(mov => mov < 0)
              .reduce((acc,mov) => acc += mov, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest =  acc.movements
                    .filter(mov =>  mov > 0)
                    .map(deposit => deposit * acc.interestRate / 100)
                    .filter(interest => interest >= 1)
                    .reduce((acc,interest) => acc + interest, 0)
  labelSumInterest.textContent = `${interest}€`
                }


const createUsernames = function(accs){
  accs.forEach(acc => {
    acc.username = acc.owner
                .toLowerCase()
                .split(' ')
                .map(name => name.slice(0,1))
                .join('')
  })
}

createUsernames(accounts)


const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc, mov) => acc += mov,0)
  labelBalance.textContent = `${balance}€` 
}






//EVENT HANDLERS
let currentAccount
btnLogin.addEventListener('click',
function(e){
  e.preventDefault()
  //using find method to locate the acount to work with
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  
  console.log(currentAccount)
  if(currentAccount.pin === Number(inputLoginPin.value))
  console.log('LOGIN')

  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
  containerApp.style.opacity = 100

  //clear input fields
  inputLoginUsername.value = inputLoginPin.value = ''
  inputLoginPin.blur()
  displayMovement(currentAccount.movements)
  calcDisplayBalance(currentAccount.movements)
  calcDisplaySummary(currentAccount)
  })




// console.log(username)


// console.log(containerMovements.innerHTML)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// let arr = ['a','b','c','d','e']
// console.log(arr.slice(2))
// console.log(arr)
// console.log(arr.slice(-2))
// console.log(arr.slice(-1))
// console.log(arr.slice(1,-2))


// //SPLICE
// // console.log(arr.splice(2))
// console.log(arr.splice(-1))
// console.log(arr, 'mutated array')
// console.log(arr.splice(1,2))
// console.log(arr)


// //Reverse
// const arr2 = ['j', 'i','h', 'g', 'f']
// console.log(arr2.reverse())


// //concat
// const letter = arr.concat(arr2)
// console.log(letter)
// console.log([...arr,...arr2])


// //join
// console.log(letter.join('-'))



//    THE NEW AT METHOD
// const arr = [23,11,64]

// console.log(arr[0])

// console.log(arr.at(0))

// //to get the last eklement of an array
// arr.slice(-1)[0]
// arr[arr.length-1]

// //most preferable
// arr.at(-1)



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for(const movement of movements){
// //   if(movement > 0){
// //     console.log(`You deposited ${movement} `)
// //   }else{
// //     console.log(`You withdrew ${movement}`)
// //   }
// // }

// console.log(' foreach')

// // movements.forEach(function(movement){
// //   if(movement > 0){
// //     console.log(`You deposited ${movement} `)
// //   }else{
// //     console.log(`You withdrew ${movement}`)
// //   }
// // })


// //another application

// for(const [i,movement] of movements.entries()){
//   if(movement > 0){
//     console.log(` Movement ${ i + 1 } You deposited ${movement} `)
//   }else{
//     console.log(` Movemnt ${i + 1} You withdrew ${movement}`)
//   }
// }


// movements.forEach(function(movement, index,array){
//   if(movement > 0){
//     console.log(` Movement ${ index + 1 } You deposited ${movement} `)
//   }else{
//     console.log(` Movemnt ${index + 1} You withdrew ${movement}`)
//   }
// })

// console.log('-----FOREACH ON MAPS AND SETS-----')


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


// currencies.forEach(function(value,key,map){
//   console.log(`${key} : ${value}`)
// })



// //Set



// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function(arr1,arr2){
//   const correctedJulia = arr1.slice()
//   correctedJulia.splice(0,1)
//   correctedJulia.splice(-2)
//   const dogs = correctedJulia.concat(arr2)
//   dogs.forEach(function(dogAge,i){
//     if(dogAge >= 3){
//       console.log(`Dog number ${i+1} is and adult, and is ${dogAge} years old`)
//     }
//     else{
//       console.log(`Dog number ${i+1} is still a puppy🐶`)

//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])


console.log('---DATA TRANSFORMATION METHOD---')

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1


// const OldWay = movements.map(function(mov){
//   return mov * eurToUsd
// })
// const movementsUSD = movements.map(mov =>  mov * eurToUsd) //nice and clear


// console.log(movements)
// console.log(movementsUSD, OldWay)

// const movUSD = []
// for(const mov of movements){
//   movUSD.push(mov * eurToUsd)
// }
// console.log(movUSD)


// const movementDescriptions = movements.map((movement, index )=> {
//   return `Movement ${ index + 1 } : You ${movement > 0 ? 'deposited' : 'withdrew' } ${Math.abs(movement)} `
// })

// console.log(movementDescriptions)

console.log('----FILTER METHOD---')

// const deposits = movements.filter(mov =>  mov > 0)
// console.log(deposits)

// const depositFor = []
// for(const mov of movements){
//  if( mov > 0)
//  depositFor.push(mov)
// }

// console.log(depositFor)


// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals)


console.log('---REDUCE METHOD---')
//acc is like a snowball
// const balance = movements.reduce((acc, cur, i ,arr) => acc += cur, 0)
// console.log(balance)


// let balance2 = 0
// for(const mov of movements){
//   balance2 += mov
// }
// console.log(balance2)


// const maxValue = movements.reduce((acc, mov, i)=> {

//   if (mov > acc){
//     acc = mov
//   }
//   return acc
// },movements[0])
// console.log(maxValue)

// const maxValue2 = movements.reduce((acc, mov)=> {
//   if (mov> acc){
//     return mov
//   }else {
//     return acc
//   }
// }, movements[0])
// console.log(maxValue2)


// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

*/


// const calcAverageHumanAge = function(arr){
//   const humanAges = arr.map(dogsAge => 
//     {
//       if(dogsAge <= 2 ){
//         return 2 * dogsAge      
//       }else {
//         return 16 + dogsAge * 4
//       }
//     })
//     console.log(humanAges)
//     const filterAge = humanAges.filter(age => age > 18)
//     console.log(filterAge)
//    const avg = filterAge.reduce((acc,age, i,arr) => {
//       return acc + age / arr.length
//     },0)
//     console.log(avg)
//   }

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // const average = adults.reduce(
  //   (acc, age, i, arr) => acc + age / arr.length,
  //   0
  // );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  // return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);




// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])


console.log('----CHAINING METHODS----')
//  const eurToUsd = 1.1
//  const totalDepositsUSD = movements
//  .filter(mov => mov > 0)
//  .map(mov => mov * eurToUsd)
//  .reduce((acc, mov) => acc += mov, 0)
//  console.log(totalDepositsUSD)



 console.log('----CODING CHALLENGE 3----')
 // Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge2 = function (ages) {
//  const average =  ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   return average;
// };

// const avg3 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// const avg4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg3, avg4);



console.log('---THE FIND METHOD---')

// const firstWithdraw = movements.find(mov => mov < 0)
// console.log(firstWithdraw)

// console.log(accounts)

// const obj = accounts.find(account => account.owner === 'Jessica Davis')

// console.log(obj)
// let objs = null
// for(const acc of accounts){
//     if (acc.owner === 'Jessica Davis'){
//       objs = acc
//       console.log(objs,'mee')
//     }
// }

'use Strict'

function logger(){
    console.log('my name is Dami')
}



logger()

function cutFruitToPieces(fruit){
    return fruit * 4
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitToPieces(apples)
    const orangePieces = cutFruitToPieces(oranges)
    console.log(apples,oranges)
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`

    return juice
}


const fruit = fruitProcessor(1,3)
console.log(fruit,"readu")

const appleJuice = fruitProcessor(8,9)
console.log(appleJuice)

//functions are just values and since they are we can store them in a variable.
// you can call a function declaration before you define it

//function declaration
function calcAge1(birthYear){
        const age = 2037 - birthYear
        return age
}

const theActualAge = calcAge1(50)
console.log(theActualAge)

//function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear
}

console.log(calcAge2(67))


//arrowFunctions
const calcAge3 = birthYear => 2037 - birthYear
console.log(calcAge3(500))
   
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}

let retirement = yearsUntilRetirement(1995, "Silas")
console.log(retirement)
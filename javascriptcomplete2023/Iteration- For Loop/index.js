//loops are control structures
//they allow us to repeat tasks
//it keeps running while condition is true

// for(let rep = 1; rep <= 10; rep++){
//     console.log('hello ' + rep)
// }

//looping arrays, breaking, continuing
const damilola =[
    firstName= 'Damilola',
    lastName = 'Balogun',
    birthYeah = 1996,
    job = 'teacher',
    friends = ['Micheal', 'peter', 'Simon'],
    hasDriversLicense = true,
]
const types = []

for(let i=0; i<damilola.length; i++){
    //reading from jonas
    // console.log(damilola[i])
    // console.log(damilola[i], typeof damilola[i])

    // filling an array
    // types[i] = typeof damilola[i]
    // console.log(types[i])

    types.push(typeof damilola[i])
}
console.log(types)

const years = [1990, 1991, 1993, 1995, 1997]
const age = []
for(let  i= 0; i<years.length; i++){
     age.push(2037 - years[i])
}
console.log(age)


//continue and break

for(let i=0; i<damilola.length; i++){
    if(typeof damilola[i] === 'string') continue;
    console.log(damilola[i], typeof damilola[i], "continue")
}

for(let i=0; i<damilola.length; i++){
    if(typeof damilola[i] === 'number') break;
    console.log(damilola[i], typeof damilola[i], "break")
}

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
//baclward and loop in loops

for(let i= damilola.length -1; i>=0; i--){
    console.log(damilola[i], i)
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`-----starting exercise${exercise}`)
    for (let rep=1; rep<6; rep++){
        console.log(`Excercise ${exercise} lifting weight repition ${rep}`)
    }
    //the first console is excercise is 3 acted like a subheaading for the rep which is 5
    // exercise is read then the first 1-5rep... then goes to the outer loop.. then we go to the other loop whuch runs from 1-5 again. so excercise controls the loop. the inner loop runs 5 times 3 times
}


//while loop
let rep = 4;
while(rep <= 10){
    console.log(`lifting weight rep ${rep}`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice, 'befor loop')
 while(dice !== 6){
     console.log(`You rolled a ${dice}` )
     dice = Math.trunc(Math.random()*6) + 1
     console.log(dice, 'after loop')
 }

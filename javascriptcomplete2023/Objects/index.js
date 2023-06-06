const damisArray = [
    'Dami',
    'Balogun',
    2037-1996,
    'Developer',
    ['Lizzy', 'Eunice', 'Karen']
]
const dami = {
    firstName : 'Dami',
    lastName :'Balogun',
    age : 2037-1996,
    job :'Developer',
    friends :['Lizzy', 'Eunice', 'Karen'] //property of friends....value is the array
}

const nameKey = 'Name'
console.log(dami['first' + nameKey])
console.log(dami['last' + nameKey])


const interestedIn = prompt('What do you want?')

if(dami[interestedIn]){
    console.log(dami[interestedIn])
}else{
    console.log('byebnye')
}


console.log(`${dami.firstName} has ${dami.friends.length} friends and her bestfriend is ${dami.friends[2]}`)
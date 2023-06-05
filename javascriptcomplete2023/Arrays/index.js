const years = new Array(1778,7089,2034, 2045)

const friends = ['Maria', 'Nobody', 'Knows']
console.log(friends)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)

console.log(friends[friends.length - 1], 'length')

friends[2] = "Somebody"

console.log(friends)

//exercise

const calcAge = function(birthYeah){
    return 2037 - birthYeah
}

const years2 = [1990,1967,2002,2010,2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3  = calcAge(years[2])
const age4 = calcAge(years[years.length - 1])

console.log(age1,age2,age3,age4)
const ages = [calcAge(years[0]), calcAge(years[1])]
console.log(ages)
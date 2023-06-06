const friends = ['Maria', 'Nobody', 'Knows']

friends.push('Me')

console.log(friends)

friends.unshift('Dami')
console.log(friends)

friends.pop()
console.log(friends.pop())
console.log(friends)

friends.shift()
console.log(friends)


console.log( friends.indexOf('Maria')) //rtturns -1 if the element isnt presenr

console.log(friends.includes('Nobody')) //this uses strict equality. it doesnt do type coercion. 23 doesnt match with '23'. it is used to write conditions
console.log(friends.includes('Bob'))


if(friends.includes('peter')){
    console.log('You have a friend called peter')
}
else {
    console.log('You don\'t have a friend called peter')
}

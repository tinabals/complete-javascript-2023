// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

//destructuring
 const [players1, players2] = game.players //destructuring
 console.log(players1, players2) // they are now both seperated into their various arrays

//spread
 const allPlayers = [...players1, ...players2]
 console.log(allPlayers)


 //rest

 const [goalKeeper,  ...fieldPlayers] = players1

 console.log(goalKeeper, fieldPlayers)

const players1Final = [...players1, 'Ayodeji', 'Pelumi', 'OloriShadyBusiness']
console.log(players1Final)

const {odds : {team1,x:draw ,team2}} = game
console.log(team1,draw,team2)


const printGoals = function(...players){
  console.log(`${players.length} goals were scored`)
}

printGoals('Davies', 'Muller', 'Lewandowski, Kimmich')
printGoals('Davies', 'Muller')


printGoals(...game.scored)


team1 < team2 && console.log('Team1 is likely to win')
team1 > team2 && console.log('Team2 is likely to win')




const scoredGames = [...game.scored]
console.log(scoredGames)

for(const [index ,goalScorer] of scoredGames.entries()){ //entries gives us the index
  
  console.log(`Goal ${index + 1}  : ${goalScorer}`)
}

const calcAvg = function(entry){
  let sum = 0
  const odds = Object.values(entry)
  for (const value of odds){
    sum += value
   }
    return Math.trunc(sum / odds.length)
}


const result = calcAvg(game.odds)
console.log(result)


for( const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  // console.log(team,odd)
  console.log(  `Odd of ${teamStr} ${odd}`)
}




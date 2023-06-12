'use strict';
// document.querySelector('.message').textContent = `🎉Correct Number`

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 13

const secretNumber = Math.trunc((Math.random() * 20) + 1)
console.log(secretNumber)
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    //when there is no inout
    if (!guess){
        displayMessage('⛔ No Number')
    // document.querySelector('.message').textContent =
    //  '⛔ No Number'
     //when player wins
    }else if(guess === secretNumber){
        displayMessage(`🎉Correct Number` )
    // document.querySelector('.message').textContent = 
    // `🎉Correct Number`  
    document.querySelector('body').style.backgroundColor = '#60b347'
    // document.querySelector('body').style .color = 'white'
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent = secretNumber
    if(score > highscore){
    highscore = score
    console.log(score,highscore)
    document.querySelector('.highscore').textContent = highscore
    }
    //when gues is too high
    }
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage( guess > secretNumber ?  '📈 Too high' :  '📈 Too Low')
            // document.querySelector('.message').textContent = 
            // guess > secretNumber ?  '📈 Too high' :  '📈 Too Low'
            score--  
            document.querySelector('.score').textContent = score
            }else{
            document.querySelector('.message').textContent = 
            '👻 You Lost the game'
            document.querySelector('.score').textContent = 0
            }
          
          
        } 
        
        //when guess is too low
    // else if(guess > secretNumber){
    //   if(score > 1){
    //     document.querySelector('.message').textContent = 
    // '📈 Too high'
    // score--  
    // document.querySelector('.score').textContent = score
    //   }else{
    //     document.querySelector('.message').textContent = 
    //     '👻 You Lost the game'
    //     document.querySelector('.score').textContent = 0
    //   }
    //   //when guess is too low
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 
    //         '📉 Too Low'
    //     score--  
    //     document.querySelector('.score').textContent = score
    //       }else{
    //         document.querySelector('.message').textContent = 
    //         '👻 You Lost the game!'
    //         document.querySelector('.score').textContent = 0
    //       }
    // }

} )

document.querySelector('.again').addEventListener('click',
function(){
    // document.querySelector('.message').textContent = 
    // 'Start guessing...'
    displayMessage( 'Start guessing...')
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = 20
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
})
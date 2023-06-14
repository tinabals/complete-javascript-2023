'use strict';

//Selecting Elements
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const currentScore1El = document.querySelector('#current--0') 
const currentScore2El = document.querySelector('#current--1') 

let currentScore = 0

//starting conditons
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')


btnRoll.addEventListener('click', function(){
    //Generate random dice roll
   const diceNo = Math.trunc(Math.random() * 6 ) + 1 // we add one be becaudse it would give us no from 0-5 not 6
   
    //display dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${diceNo}.png`

    //check for rolled 1 : if true switch to nmext player

    //cjheck for 1 roll dice
    if(diceNo !== 1){
        currentScore += diceNo
        currentScore1El.textContent = currentScore

    }else{
        //switch to next player

    }
})

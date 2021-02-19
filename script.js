'use strict';
const btnDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const currentZero = document.querySelector('#current--0');
const currentOne = document.querySelector('#current--1');
const scoreZero = document.querySelector('#score--0');
const scoreOne = document.querySelector('#score--1');
const dice = document.querySelector('.dice');


let diceNumber;
let activePlayer;
let activeCurrentScore;
let activeScore;

btnDice.addEventListener('click',()=> {
     checkActivePlayer();
    
    rollDice();
    
        if(diceNumber != 1) {
            activeCurrentScore.textContent = parseInt(activeCurrentScore.textContent) + diceNumber;
        } else {            
            activeCurrentScore.textContent = 0;
            changeActivePlayer(activePlayer);
        }    
        
   
}); 

btnHold.addEventListener('click',()=> {
     checkActivePlayer();
     activeScore.textContent = parseInt(activeScore.textContent) + parseInt(activeCurrentScore.textContent);
     activeCurrentScore.textContent = 0;
     checkWinner();
     
})

btnNew.addEventListener('click',()=> {
    currentOne.textContent = 0;
    currentZero.textContent = 0;
    scoreOne.textContent = 0;
    scoreZero.textContent = 0;
    btnDice.disabled = false;
    btnHold.disabled = false;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    playerOne.classList.remove('player--active');
    playerZero.classList.add('player--active')
     
})

const rollDice = () => {
    diceNumber = Math.round(Math.random()*(6-1)+1);
    if(diceNumber > 0)
        dice.src = `dice-${diceNumber}.png`;
   
}

const checkActivePlayer = () => {    
    if(playerZero.classList.contains('player--active')) {
        activePlayer = 0;
        activeCurrentScore = document.querySelector(`#current--${activePlayer}`);
        activeScore =  document.querySelector(`#score--${activePlayer}`);
    } else {
        activePlayer = 1;
        activeCurrentScore = document.querySelector(`#current--${activePlayer}`);
        activeScore =  document.querySelector(`#score--${activePlayer}`);
    }
     

}

const changeActivePlayer = (activePlayer) => {
    if(activePlayer === 0) {
        playerZero.classList.remove('player--active');
        playerOne.classList.add('player--active');
    } else {
        playerZero.classList.add('player--active');
        playerOne.classList.remove('player--active');
    }
}

const checkWinner = () => {
    console.log('winner');
    if(parseInt(activeScore.textContent) >= 100) {
        console.log('winner');
      activePlayer == 0 ? playerZero.classList.add('player--winner') : playerOne.classList.add('player--winner') ;
      btnDice.disabled = true;
      btnHold.disabled = true;  
    }
}
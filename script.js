let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = secretTargetNumber => secretTargetNumber = Math.floor(Math.random() * 10);

function compareGuesses(computerGuess, userGuess, secretTargetNumber) {
  if(computerGuess != userGuess){
    computerGuess1 = Math.abs(computerGuess - secretTargetNumber);
    userGuess1 = Math.abs(userGuess - secretTargetNumber);
  }   if (computerGuess1 < userGuess1){
    return true;
  } if (computerGuess1 > userGuess1){
    return false;
  } else 
  return true;
 };

const updateScore = winner => {
  if (winner === 'human'){
    humanScore ++;
  } else if (winner === 'computer'){
    computerScore ++;
  }
};

const advanceRound = () => currentRoundNumber++;

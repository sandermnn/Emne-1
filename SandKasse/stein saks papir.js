const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock'){
      return userInput
    }else if (userInput === 'paper'){
      return userInput
    }else if(userInput === 'scissors'){
      return userInput
    }else {
      console.log('error');
    }
  };
  
  function getComputerChoice(){
    const randomNumber =
    Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
       return 'rock';
      case 1:
       return 'paper';
      case 2: 
        return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice ){
    if(userChoice === computerChoice){
      return 'Uavgjort';
    }
  
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!';
      }else{
        return 'You won!';
      }
    }
  
    if(userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'The computer won!';
      }else{
        return 'You won!';
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'You won!';
      }else{
        return 'The computer won!';
      }
    }
  }
  
  function playGame(){
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice('paper');
  
     console.log(determineWinner(userChoice,computerChoice))
  
    console.log('You threw:' + userChoice);
    console.log('The computer threw:' + computerChoice);
  
    
  }
  playGame()
  
   
  
  
  
  
  
  
  
  
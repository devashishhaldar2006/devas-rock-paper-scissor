let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    function playGame(playerMove) {
      let computerMove = pickComputerMove();

      let result = '';
      if (playerMove === 'Rock') {
        if (computerMove === 'Rock') result = 'Tie';
        else if (computerMove === 'Scissors') result = 'You Win';
        else if (computerMove === 'Paper') result = 'You Lose';
      } else if (playerMove === 'Paper') {
        if (computerMove === 'Paper') result = 'Tie';
        else if (computerMove === 'Scissors') result = 'You Lose';
        else if (computerMove === 'Rock') result = 'You Win';
      } else if (playerMove === 'Scissors') {
        if (computerMove === 'Scissors') result = 'Tie';
        else if (computerMove === 'Rock') result = 'You Lose';
        else if (computerMove === 'Paper') result = 'You Win';
      }

      if (result === 'You Win') score.wins++;
      else if (result === 'You Lose') score.losses++;
      else if (result === 'Tie') score.ties++;

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();
      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You 
      <img src="./emojis/${playerMove}-emoji.png" class="move-icon">
      <img src="./emojis/${computerMove}-emoji.png" class="move-icon">
      Computer`;
    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      if (randomNumber < 1 / 3) return 'Rock';
      else if (randomNumber < 2 / 3) return 'Paper';
      else return 'Scissors';
    }
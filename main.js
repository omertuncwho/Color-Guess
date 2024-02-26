function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
  function checkGuess(guess, correctColor) {
    if (guess.toLowerCase() === correctColor.toLowerCase()) {
      return true;
    }
    return false;
  }
  
  function startGame() {
    const colorBox = document.getElementById('colorBox');
    const colorInput = document.getElementById('colorInput');
    const guessButton = document.getElementById('guessButton');
    const resultDiv = document.getElementById('result');
    let lives = 3;
  
    let correctColor = generateRandomColor();
    colorBox.style.backgroundColor = correctColor;
  
    guessButton.addEventListener('click', function() {
      const guess = colorInput.value;
      if (checkGuess(guess, correctColor)) {
        resultDiv.textContent = 'Congratulations! You guessed it right!';
        correctColor = generateRandomColor();
        colorBox.style.backgroundColor = correctColor;
      } else {
        lives--;
        if (lives === 0) {
          resultDiv.textContent = 'Game over! You ran out of lives.';
          guessButton.disabled = true;
        } else {
          resultDiv.textContent = `Wrong guess! You have ${lives} lives left.`;
        }
      }
    });
  }
  
  window.onload = startGame;
  
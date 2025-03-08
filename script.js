// Function to generate a random number between 1 and 6
function getRandomDieValue() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to roll all five dice
  function rollDice() {
    for (let i = 1; i <= 5; i++) {
      const dieValue = getRandomDieValue();
      document.getElementById('die' + i).value = dieValue;
    }
  }
  
  // Automatically roll dice when the page loads
  window.onload = rollDice;
  
  // Add event listener to the "Roll Dice" button to roll dice on click
  document.getElementById('rollDice').addEventListener('click', rollDice);
  
$("document").ready(function() {

  $('button').click(function() {
    // Get the human's choice from 'this'
    // Get the computer's choice from the computerChoice function

    // Display the choices in the choiceDisplay section

    // Save the winner in a variable. 
    // You'll need to complete the pickWinner function.
    
    // Display the winner (human or computer) in the winnerDisplay section
    // Display a different message depending on if the human or computer won or it was a tie
  });
});


function computerChoice() {
  var i = Math.floor((Math.random() * 3));
  return ['Rock', 'Paper', 'Scissors'][i];
}


function pickWinner(humanChoice, computerChoice) {
  // Fill this in!
  // Return 'Human', 'Computer', or 'Tie'
}

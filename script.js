$("document").ready(function() {

  $('button').click(function() {
    // Get the human's choice based on the event data
    // Get the computer's choice from the computerChoice function
    var human = $(this).html();
    var computer = computerChoice();

    // Display the choices in the choiceDisplay section
    $('#choiceDisplay').html(human + " vs " + computer);

    // Save the winner in a variable. 
    // You'll need to complete the pickWinner function.
    var winner = pickWinner(human, computer);
    
    // Display the winner (human or computer) in the winnerDisplay section
    // Display a different message depending on if the human or computer won or it was a tie
    if (winner == 'Human') {
      $('#winnerDisplay').html("Human won! :-)");
    }
    else if (winner == 'Computer') {
      $('#winnerDisplay').html('Computer won :-(')
    }
    else {
      $('#winnerDisplay').html("Tie :-|");
    }
  });
});


function computerChoice() {
  var i = Math.floor((Math.random() * 3));
  return ['Rock', 'Paper', 'Scissors'][i];
}


function pickWinner(humanChoice, computerChoice) {
  // Fill this in!
  // Return either 'Human', 'Computer', or 'Tie'
  var winner = '';
  if (humanChoice === computerChoice) {
    winner = 'Tie';
  }
  else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
    winner = 'Human';
  }
  else if (humanChoice === 'Paper' && computerChoice === 'Rock') { 
    winer = 'Human';
  }
  else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
    winner = 'Human';
  }
  else {
    winner = 'Computer';
  }
  return winner;
}

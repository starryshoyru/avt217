$(document).ready(function() {
    // run function on initial page load
    pokemonGuess();
});

function pokemonGuess() {
  var randomNum = Math.floor((Math.random()*3)+1);
  $('#bunny').attr('src', 'images/' + randomNum + '.jpg');
}

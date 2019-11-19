$(document).ready(function(){
  console.log('THE DOCUMENT IS READY! DO SOMETHING AWESOME!');

  $( '.degrees75' ).click(function() {
    $('.number1').toggleClass('changecolor');
  });
  $( '.thunderstorm' ).click(function() {
    $('.number2').toggleClass('shrinktext');
  });
  $( '.snowstorm' ).click(function() {
    $('.number3').toggleClass('align-right');
  });
});

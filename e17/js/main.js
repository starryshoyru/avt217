$(document).ready(function(){
  console.log('THE DOCUMENT IS READY! DO SOMETHING AWESOME!');

  $( '.firstweather' ).click(function() {
    $('.number1').toggleClass('changecolor');
  });
  $( '.thunderstorm' ).click(function() {
    $('.number2').toggleClass('shrinktext');
  });
  $( '.snow' ).click(function() {
    $('.number3').toggleClass('align-left');
  });
});

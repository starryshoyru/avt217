$(document).ready(function() {
    // run function on initial page load
    random_imglink();
});

function random_imglink(){

  //create array
  var bunnyImages = ["images/bunny1.jpg","images/bunny2.jpg","images/bunny3.jpg","images/bunny4.jpg","images/bunny5.jpg","images/bunny6.jpg","images/bunny7.jpg", "images/bunny8.jpg","images/bunny9.jpg","images/bunny10.jpg","images/bunny11.jpg","images/bunny12.jpg","images/bunny13.jpg","images/bunny14.jpg","images/bunny15.jpg", "images/bunny16.jpg","images/bunny17.jpg","images/bunny18.jpg"];
  //get the length of images array
  //and a random number between 0 and the length
  var length = bunnyImages.length;


  $('#submit').click(function() {
    $( "#bunny" ).empty();
    var which = Math.round(Math.random()*(length-1));
    //get image at index that matches the random number
    $('#bunny').prepend('<img src="'+bunnyImages[which]+'" />')
    $('.button p').text('Another image');

  });
}

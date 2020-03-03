

$(document).ready(function() {

  var audio0 = new Audio('http://soundbible.com/mp3/TomCat-Mr_Smith-2055290520.mp3');
  var audio1 = new Audio('http://soundbible.com/mp3/Sheep Bleating-SoundBible.com-1373580685.mp3');
  var audio2 = new Audio('http://soundbible.com/mp3/Turkey Gobble-SoundBible.com-312252853.mp3');
  var audio3 = new Audio('http://soundbible.com/mp3/Dinosaur Roar-SoundBible.com-605392672.mp3');
  var audio4 = new Audio('http://soundbible.com/mp3/Lion-SoundBible.com-621763115.mp3');

  var soundArray = [audio0, audio1, audio2, audio3, audio4];


  $('.hear-button').on("click", function(){

    var i = Math.floor(Math.random()*soundArray.length);

    soundArray[i].play();

  });


});
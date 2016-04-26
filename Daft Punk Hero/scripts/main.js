var count = 0;
var audio = new Audio();

function play(){
  audio.src = "media/Daft Punk.mp3"
  audio.volume = 0.7;
  audio.play();
}

function pause() {
  audio.pause();
}

function clear(){
  audio.src = "media/Daft Punk.mp3"
}

window.onload = function() {
  play();
  };

var count = 0;
var status = 0;
var audio = new Audio();

function play(){
  audio.src = "media/Daft Punk.mp3"
  audio.volume = 0.7;
  audio.play();
  status = 1;
  document.getElementById("play").value = 'Stop';
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

  window.onkeydown = function(e){
    var k = e.keyCode;
    if(k == 32){
      document.getElementById("play").style.background = '#F2E8C9';
      document.getElementById("play").style.color = 'rgb(64, 64, 64)';
    }
  }

window.onkeyup = function(e){
  var k = e.keyCode;
  document.getElementById("play").style.background = 'rgb(64, 64, 64)';
  document.getElementById("play").style.color = '#F2E8C9';
  if(k == 32){
    if (status == 1){
      audio.pause();
      status = 0;
      document.getElementById("play").value = 'Play';
      document.getElementById("equ1").src = './media/equalizer_stop.gif';
      document.getElementById("equ2").src = './media/equalizer_stop.gif';
    }
    else{
      audio.play();
      status = 1;
      document.getElementById("play").value = 'Stop';
      document.getElementById("equ1").src = './media/equalizer.gif';
      document.getElementById("equ2").src = './media/equalizer.gif';
    }
  }
}

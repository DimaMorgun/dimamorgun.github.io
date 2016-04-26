var count = 0;
var audio = new Audio();

function play(){
  audio.play();
}

function pause() {
  audio.pause();
}

function clear(){
  audio.src = "media/Daft Punk.mp3"
}

window.onload = function() {
    alert( 'Документ и все ресурсы загружены' );
  };

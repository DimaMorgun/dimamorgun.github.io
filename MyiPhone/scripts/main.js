  var count = 1;
  var name = "None";
  var logo = "";
  var audio = new Audio();

  function play(){
    audio.play();
  }

  function pause() {
    audio.pause();
  }

function soundClick(how) {

  if (how == 1){
    ++count;
  }
  if (how == 0){
    count--;
  }

  if (count >= 4){
    count = 0;
  }
  if (count < 0){
    count = 4;
  }

  switch (count) {
    case 0:
      audio.src = 'media/first.mp3';
      name = 'Queen - Show Must Go On';
      logo = 'media/first.jpg';
      break;
    case 1:
      audio.src = 'media/second.mp3';
      name = 'Knifeparty – Internet Friends';
      logo = 'media/second.jpg';
      break;
    case 2:
      audio.src = 'media/third.mp3';
      name = 'Nyan Cat - Original';
      logo = 'media/third.jpg';
      break;
    case 3:
      audio.src = 'media/forth.mp3';
      name = 'Кровосток - В баре';
      logo = 'media/forth.jpg';
      break;
  }

  console.log(count);

  document.getElementById("song").value = name;
  document.getElementById("logo").src = logo;

  audio.play();
}

window.onload = function(){
  console.log('Эдик, уйди отсюда :)');
  audio.volume = 0.05;
}

function gourl(){
  document.getElementById("addres").src = "http://" + document.getElementById("url").value;
}

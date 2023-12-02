let slide = document.getElementById('slide');
let song = document.getElementById('song');
let play = document.getElementById('play-btn');

song.onloadedmetadata = function() {
    slide.max = song.duration;
    slide.value = song.currentTime;
}

function playpause() {
    if (play.classList.contains('fa-pause')) {
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
    else {
        song.play();
        play.classList.add('fa-pause');
        play.classList.remove('fa-play');
    }
}

if(song.play()){
    setInterval(function () { slide.value = song.currentTime; }, 500);
}

slide.onchange = function(){
    song.play();
    song.currentTime = slide.value;
    play.classList.add('fa-pause');
    play.classList.remove('fa-play');
}
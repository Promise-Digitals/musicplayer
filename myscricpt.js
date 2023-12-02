let slide = document.getElementById('slide');
let featureImage = document.getElementById('feature-image');
let song = document.getElementById('song');
let play = document.getElementById('play-btn');

song.onloadedmetadata = function() {
    slide.max = song.duration;
    slide.value = song.currentTime;
}

function playpause() {
    if (play.classList.contains('fa-pause')) {
        song.pause();
        featureImage.classList.remove("rotate");
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
    else {
        song.play();
        featureImage.classList.add("rotate");
        play.classList.add('fa-pause');
        play.classList.remove('fa-play');
    }
}

if(song.play()){
    setInterval(function () { slide.value = song.currentTime; }, 500);
}

slide.onchange = function(){
    song.play();
    featureImage.classList.add("rotate");
    song.currentTime = slide.value;
    play.classList.add('fa-pause');
    play.classList.remove('fa-play');
}
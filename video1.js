(function() {
    var playButton = document.getElementById('play-button');
    var video = document.getElementById("video");
    var screenButton = document.getElementById('screen-button');
    var timeField = document.getElementById('time-field');
    var soundButton = document.getElementById('sound-button');
    var fullScreenButton = document.getElementById('fullscreen-button');
    var forwardButton = document.getElementById('forward');
    var rewindButton = document.getElementById('rewind');
    var guandengButton = document.getElementById('guandeng');

    function playpause1() {
        if (video.paused) {
            video.play();
            screenButton.style.display = "none";
        }
    }
    screenButton.onclick = playpause1;

    function playpause() {
        if (video.paused) {
            video.play();
            screenButton.style.display = "none";
        } else {
            video.pause();
            screenButton.style.display = "block";

        }
    }
    playButton.onclick = playpause;





    function timeshow() {
        var seconds = Math.round(video.currentTime);
        var minutes = Math.floor(seconds / 60);
        if (minutes > 0) seconds -= minutes * 60;
        if (seconds < 10) seconds = '0' + seconds;

        var totalSeconds = Math.round(video.duration);
        var totalMinutes = Math.floor(totalSeconds / 60);
        if (totalMinutes > 0) totalSeconds -= totalMinutes * 60;
        if (totalSeconds < 10) totalSeconds += '0' + totalSeconds;


        timeField.innerHTML = minutes + ':' + seconds + '/' + totalMinutes + ':' + totalSeconds;
    }
    video.ontimeupdate = timeshow;
    video.addEventListener("timeupdate", function() {
        var percentage = (video.currentTime / video.duration) * 100;
        qian.style.width = percentage + '%';
    }, true);

    function jingyin() {
        if (video.muted == false) {
            video.muted = true;
            soundButton.src = 'images/mute.png';
            sbar.style.display = 'none';
        } else {
            video.muted = false;
            soundButton.src = 'images/sound.png';
            sbar.style.display = 'block';
        }
    }
    soundButton.onclick = jingyin;


    function quanping() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.mozRequestFullscreen) {
            video.mozRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.mskitRequestFullscreen();
        }
    }
    fullScreenButton.onclick = quanping;

    function forward() {
        video.currentTime = video.currentTime + 5;
    }

    function rewind() {
        video.currentTime = video.currentTime - 5;
    }
    rewindButton.onclick = rewind;
    forwardButton.onclick = forward;

    function guandeng() {
        var x = document.getElementById('back');
        if (x.style.backgroundColor == "black") {
        	x.style.backgroundColor = "none";
            x.style.background = "url('background.jpeg') no-repeat";
            guandengButton.innerHTML="关&nbsp灯"
           
        } else {
        	x.style.background = "none";
            x.style.backgroundColor = "black";
            guandengButton.innerHTML="开&nbsp灯"
            
        }
    }
    guandengButton.onclick = guandeng;
}(window))

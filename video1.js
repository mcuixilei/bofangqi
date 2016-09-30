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
    var shen = document.getElementById('shen');
    var qian = document.getElementById('qian');
    var sbarContainer = document.getElementById('sbar-container');
    var sbar = document.getElementById('sbar');
    var choose = document.getElementById('choose');
    var tianjiaButton = document.getElementById('tianjia');
/*添加文件*/
    function tianjia() {
        var file = choose.files[0]
        var url = URL.createObjectURL(file);

        video.src = url;
    }
    tianjiaButton.onclick = tianjia;

/*暂停&开始*/
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




/*显示时间*/
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
/*静音*/
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

/*全屏*/
    function quanping() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } 
    }
    fullScreenButton.onclick = quanping;
/*快进&快退*/
    function forward() {
        video.currentTime = video.currentTime + 5;
    }

    function rewind() {
        video.currentTime = video.currentTime - 5;
    }
    rewindButton.onclick = rewind;
    forwardButton.onclick = forward;
/*开灯&关灯*/
    function guandeng() {
        var x = document.getElementById('back');
        if (x.style.backgroundColor == "black") {
            x.style.backgroundColor = "none";
            x.style.background = "url('images/background.jpeg') repeat";
            guandengButton.innerHTML = "关&nbsp灯"

        } else {
            x.style.background = "none";
            x.style.backgroundColor = "black";
            guandengButton.innerHTML = "开&nbsp灯"

        }
    }
    guandengButton.onclick = guandeng;

/*进度条点击定位*/
    function dingwei(event) {
        var x = event.clientX;
        video.currentTime = video.duration * (x - 174) / 1000;
        var y = (x - 174) / 1000;
        qian.style.width = (y * 100) + '%';
    }
    shen.onclick = dingwei;




/*进度条拖动*/
    function down() {
        shen.onmousemove = move;

        function move(event) {
            var x = event.clientX;
            video.currentTime = video.duration * (x - 174) / 1000;
            var y = (x - 174) / 1000;
            qian.style.width = (y * 100) + '%';
            shen.onmouseup = up;


            function up(event) {
                var x = event.clientX;
                shen.onmousemove = null;
            }
        }
    }
    shen.onmousedown = down;

/*声音条点击定位*/
    function soundchange() {
        var x = event.clientX;
        video.volume = (x - 422) / 100;
        var y = (x - 422) / 100;
        sbar.style.width = (y * 100) + '%';
    }
    sbarContainer.onclick = soundchange;


/*声音调拖动*/
    function Sdown() {
        sbarContainer.onmousemove = Smove;

        function Smove(event) {
            var x = event.clientX;
            video.volume = (x - 422) / 100;
            var y = (x - 422) / 100;
            sbar.style.width = (y * 100) + '%';
            sbarContainer.onmouseup = Sup;

            function Sup(event) {
                var x = event.clientX;
                sbarContainer.onmousemove = null;
            }
        }
    }
    sbarContainer.onmousedown = Sdown;
    //https://media.w3.org/2010/05/sintel/trailer.mp4
}(window))

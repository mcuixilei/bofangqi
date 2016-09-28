(function(){
	var playButton = document.getElementById('play-button');
	var video=document.getElementById("video");
	var screenButton = document.getElementById('screen-button');
	function playpause(){
	if(video.paused){
		video.play();
		screenButton.style.display="none";
	}else{
		video.pause();
		screenButton.style.display="block";

	}
}
	playButton.onclick=playpause;

	video.ontimeupdate=time;
	function time(){
		var percentage = (video.currentTime/video.duration) * 100;
		qian.style.width = percentage + '%';
	}

}(window))
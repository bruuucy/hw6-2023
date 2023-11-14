var video;
var volumeSlider;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.querySelector("#player1");
	video.play();
	updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.querySelector("#player1");
	video.pause();
});

var currentSpeed = 1;
document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	currentSpeed -= 0.1;
	video.playbackRate = currentSpeed;
	console.log("Slower video, new speed is " + video.playbackRate.toFixed(1));
});

document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	currentSpeed += 0.1;
	video.playbackRate = currentSpeed;
	console.log("Speed up video, new speed is " + video.playbackRate.toFixed(1));
});

document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");
	skipvideo(10);
});

function skipvideo(skipTime){
	var newTime = video.currentTime + skipTime;
	if(newTime > video.duration){
		video.currentTime = 0;
	}else{
		video.currentTime = newTime;
	}
	console.log("The current location of video is " + video.currentTime.toFixed(1))
}

function UpdateMuteButtonText(){
	document.querySelector("#mute").textContent = isMuted ? "Unmute" : "Mute";
}

var isMuted = false;
document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	isMuted = !isMuted;
	video.muted = isMuted;
	UpdateMuteButtonText();
});

function updateVolumeInfo() {
    var currentVolume = video.volume * 100;
    document.querySelector("#volume").textContent = currentVolume.toFixed(0) + '%';
}

document.querySelector("#slider").addEventListener('input', function() {
	volumeSlider = document.querySelector("#slider");
    var newVolume = volumeSlider.value / 100;
    video.volume = newVolume;
    updateVolumeInfo();
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
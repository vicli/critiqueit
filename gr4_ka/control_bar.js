window.onload = function() {

  // Video
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var fullScreenButton = document.getElementById("full-screen");

  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");


playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});

fullScreenButton.addEventListener("click", function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

seekBar.addEventListener("change", function() {
  // Calculate the new time
  var time = video.duration * (seekBar.value / 100);

  // Update the video time
  video.currentTime = time;
});

seekBar.addEventListener("mousedown", function() {
  video.pause();
});

seekBar.addEventListener("mouseup", function() {
  video.play();
});

video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;
});

volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
});
}

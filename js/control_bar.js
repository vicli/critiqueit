function getVideoDuration(duration) {
    var minutes = Math.floor(duration/60);
    var seconds = Math.floor(duration%60);

    if (seconds<10) {
      var print_time= minutes+":0"+seconds;
    }
    else {
      var print_time= minutes+":"+seconds;
    }
    return print_time;
}

window.onload = function() {

  // Video
  var video = document.getElementById("video");

  duration = video.duration;
  $("#duration").html(getVideoDuration(duration));

  video.addEventListener('loadedmetadata', function() {
      console.log(getVideoDuration(duration));
  });

  // Buttons
  var playButton = document.getElementById("play-pause");
  var fullScreenButton = document.getElementById("full-screen");

  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");


function togglePlay() {
    if (video.paused == true) {
    // Play the video
    video.play();
    playButton.src = 'images/pause.png';
  } else {
    // Pause the video
    video.pause();
    playButton.src = 'images/play.png';
  }
}

playButton.addEventListener("click", function() {
  togglePlay();
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

  video.addEventListener("click", function() {
    togglePlay();
  });

  volumeBar.addEventListener("change", function() {
    // Update the video volume
    video.volume = volumeBar.value;
  });
}

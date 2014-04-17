function getVideoTime(duration) {
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

  var video = document.getElementById("video");

  var playButton = document.getElementById("play-pause");
  var fullScreenButton = document.getElementById("full-screen");
  var muteButton = document.getElementById("mute");

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

  function addCommentBubbles() {
    var duration = video.duration;
    var totalJumps = Math.floor(duration/10)+1;
    
    for( var j=0;j<totalJumps;j++){
      var parent = document.getElementById("comment_bubbles");
      var bubble = document.createElement('img');
      bubble.className = 'comment_img';
      bubble.src = 'images/comment.png';
      bubble.id = j; 
      bubble.style.marginLeft = 800/totalJumps-15+'px';
      parent.appendChild(bubble);
    }
  }

  addCommentBubbles();

  duration = video.duration;
  $("#duration").html('/ '+getVideoTime(duration));

  video.addEventListener('loadedmetadata', function() {
      console.log(getVideoDuration(duration));
  });

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
  playButton.src = 'images/pause.png';
});

video.addEventListener("timeupdate", function() {
  var value = (100 / video.duration) * video.currentTime;
  seekBar.value = value;
  $("#current_time").html(getVideoTime(video.currentTime));

  var total_jump = Math.floor(video.duration)/10;
  var single_jump = 800/total_jump;
  var current_jump = Math.floor(video.currentTime)/10;
  var jump_value = single_jump*current_jump;

  var stamp = Math.floor(current_jump)*10;

  if (Math.floor(video.currentTime)%10 == 0) {
    $('#ind_comment_container').html('');
    $('#pointer').css({"marginLeft": jump_value+'px'});
    for (var n=0; n< fake_comments.length; n++) {
      if (fake_comments[n].getTimeStamp() > stamp && fake_comments[n].getTimeStamp() < stamp+10) {
        fake_comments[n].render_stamp();
      } 
    }

  }
});

  video.addEventListener("click", function() {
    togglePlay();
  });

muteButton.addEventListener("click", function() {
  if (video.muted == false) {
    video.muted = true;
    volumeBar.value = 0;
    video.volume = 0;
    muteButton.src = 'images/mute.png';
  } else {
    video.muted = false;
    volumeBar.value = 1.0;
    video.volume = 1.0;
    muteButton.src = 'images/audio.png'
  }
});


volumeBar.addEventListener("change", function() {
    // Update the video volume
    video.volume = volumeBar.value;
  });
}

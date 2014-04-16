$(document).ready(function(){	
	var video=document.getElementById("video"); 
	$('#cmtbtn').click(function(){
	  		// $('#message_list').append("hello");
	  		$('#comment_list').append($('#comment').val()+ '<br>');
	  		$('#comment').val('');
	  		video.play();
	  	});

	$("#comment").keyup(function(event){ 
		if(event.keyCode == 13){
			$("#cmtbtn").click();
		}
	});

	$('input[type="text"]').focus(function() {
		video.pause();
		var minutes = Math.floor(video.currentTime/60);
		var seconds = Math.floor(video.currentTime-minutes*60)
		if (seconds<10){
			seconds='0'+seconds
		}

		$('#comment').val('['+minutes+":"+seconds+']  ');

	});


	$(window).click(function(e) {
		if ((42<=event.clientX<=660) && (126<=event.clientY<=200)){
			console.log("HELLOO")
			console.log(event.clientX)
			console.log(event.clientY)
		}
	});


	$('#sold').click(function(){
		$('#areyousold').addClass('hidden')
		$('#solddisplay').removeClass('hidden')
	});

	$('#notsold').click(function(){
		$('#areyousold').addClass('hidden')
		$('#notsolddisplay').removeClass('hidden')
	});

	$('#changebtn').click(function(){


		$('#confirm').removeClass("hidden");
		$('#solddisplay').addClass('hidden');

		$('#yeschange').click(function(){
			$('#confirm').addClass("hidden");
			$('#notsolddisplay').removeClass('hidden');
		});
		$('#nochange').click(function(){
			$('#confirm').addClass("hidden");
			$('#solddisplay').removeClass('hidden');
		});
	});

	$('#changebtn2').click(function(){


		$('#confirm').removeClass("hidden");
		$('#notsolddisplay').addClass('hidden');

		$('#yeschange').click(function(){
			$('#confirm').addClass("hidden");
			$('#solddisplay').removeClass('hidden');
		});
		$('#nochange').click(function(){
			$('#confirm').addClass("hidden");
			$('#notsolddisplay').removeClass('hidden');
		});

	});



})
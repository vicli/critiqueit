$(document).ready(function(){
	$(".video").mouseover(function(){
		var id = $(this).attr('id');
		// alert("div#videotext"+id+".videotext");
		var targetDiv =$("#videotext"+id);
		console.log(targetDiv);

		$(targetDiv).fadeOut(100);
	})
	.mouseout(function(){
		var id = $(this).attr('id');
		// alert("div#videotext"+id+".videotext");
		var targetDiv =$("#videotext"+id);
		$(targetDiv).fadeIn(200);
	});
})
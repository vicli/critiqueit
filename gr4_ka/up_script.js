$(document).ready(function() {
//yes, no, yes to no, no to yes
var graph_color = ["#66BC45","#F04F22","#F7921D","#DDE794"];
var sold_data = [168,72,32,27]; 

function drawCircle(color, size, total) {
	if (color == "#66BC45" || color == "#DDE794") {
		var canvas = document.getElementById('yes_c');
	}
	else {
		var canvas = document.getElementById('no_c');
	}
     
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = size/total*100;

    if (canvas.getContext) {
		var context = canvas.getContext('2d');
	    context.beginPath();
	    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	    context.fillStyle = color;
	    context.fill();
	    context.lineWidth = 1;
	    context.strokeStyle = color;
	    context.stroke();
	}
}

var total = sold_data[0]+sold_data[1]+sold_data[2]+sold_data[3];
for (var i=0; i<sold_data.length; i++) {
	if (sold_data[i]>0) {
		drawCircle(graph_color[i], sold_data[i], total);
	}
}

});
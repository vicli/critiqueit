//isChange is either false, "y2n" or "n2y"
var Comment = function(text, author, isChange, timeStamp ) {

	this.text = text;			
	this.author = author;
	this.timeStamp = timeStamp;
	this.isChange = isChange;

	if (isChange) {
		this.timeStamp = -1;
	}

	this.render_change = function() {
		if (this.isChange == "y2n") {
			var parent = document.getElementById('y2n_cmtbx');
		}
		else if (this.isChange == "n2y") {
			var parent = document.getElementById('n2y_cmtbx');
		}

		var change = document.createElement('p');
		change.className = 'ind_change_cmt';
		var cmt_txt = '<b class="author">'+this.author+': </b>'+
    										this.text;
    	change.innerHTML = cmt_txt;

    	parent.appendChild(change);
	}
}
	
var dummy_comments2y= [];
var dummy_comments2n= [];
var random_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nisl tincidunt lectus accumsan aliquam. Etiam vitae elit est. Quisque quis eros sed turpis tristique eleifend. Donec sed lacinia enim, in ullamcorper sem. "

for (var i=0; i< 5; i++) {
	var author = 'user'+ i;
	var comment = new Comment(random_text, author, "n2y")
	dummy_comments2y.push(comment);
}

for (var i=5; i< 10; i++) {
	var author = 'user'+ i;
	var comment = new Comment(random_text, author, "y2n")
	dummy_comments2n.push(comment);
}


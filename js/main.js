var birds=[];
var i=0;
function makeBird(i){
	var cont = 	$("#container");
	cont.append("<div class='bird bird"+i+"'></div>");
	var bird = $('.bird'+i);
	bird.css("left","-100px")
	bird.css("top",Math.floor(Math.random()*1000)+"px")
	
	bird.sprite({fps: 14, no_of_frames: 7});
	
	birds.push(bird);
	i++;
}

function pullDivOut(id){
	var len = birds.length;
	var div = $("#"+id);
	var l = parseInt(div.css("left"), 10);
	var r = l+parseInt(div.css("width"), 10);
	var u = parseInt(div.css("top"), 10);
	var d = u+parseInt(div.css("height"), 10);
	var side = Math.floor(len/4);

	for(var c=0; c<side; c++){
		birds[c].animate({
		  left: l-20,
		  top: Math.floor(u+((d-u)*1.0/side*c))-15
		}, 500+Math.floor(Math.random()*1000), "swing");
//		birds[c].css("left",l+"px");
//		birds[c].css("top",Math.floor(u+((d-u)*1.0/side*c))+"px");
	}
	for(var c=0; c<side; c++){
		birds[1*side+c].animate({
		  left: Math.floor(l+((r-l)*1.0/side*c))-20,
		  top: u-15
		}, 500+Math.floor(Math.random()*1000), "swing");
//		birds[side+c].css("left",Math.floor(l+((r-l)*1.0/side*c))+"px");
//		birds[side+c].css("top",u+"px");
	}

	for(var c=0; c<side; c++){
		birds[2*side+c].animate({
		  left: Math.floor(l+((r-l)*1.0/side*c))-20,
		  top: d-25
		}, 500+Math.floor(Math.random()*1000), "swing");
		//birds[2*side+c].css("left",Math.floor(l+((r-l)*1.0/side*c))+"px");
		//birds[2*side+c].css("top",d+"px");
	}
	for(var c=0; c<side; c++){
		birds[3*side+c].animate({
		  left: r-30,
		  top: Math.floor(u+((d-u)*1.0/side*c))-15
		}, 500+Math.floor(Math.random()*1000), "swing");
		//birds[3*side+c].css("left",r+"px");
		//birds[3*side+c].css("top",Math.floor(u+((d-u)*1.0/side*c))+"px");
	}
	setTimeout(function(){
	$(".bird").each(function(index, value) { 
		var l = parseInt($(this).css("left"), 10);
		var u = parseInt($(this).css("top"), 10);
			$(this).animate({
		  left: -500+"px",
		}, 500+Math.floor(Math.random()*200), "swing");
		});

		var l = parseInt($(this).css("left"), 10);
		var u = parseInt($(this).css("top"), 10);
		div.animate({
		  left: -500+"px",
		}, 500+Math.floor(Math.random()*200), "swing");
		
	},1500);
}

$(document).ready(function() {
var j=100;
while(j--)
  makeBird(j);
  $('body').on('click', function(){pullDivOut("one");});
  });
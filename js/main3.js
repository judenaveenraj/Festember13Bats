var birdpool=[];
var i=0;

function getBirdFromPool(){
	return birdpool.pop();
}

function putBirdInPool(bird){
	birdpool.push(bird);
}

function makeBird(i){
	var cont = 	$("#container");
	cont.append("<div class='bird bird"+i+"'></div>");
	var bird = $('.bird'+i);
	bird.css("left","-100px")
	bird.css("top",Math.floor(Math.random()*1000)+"px")
	bird.sprite({fps: 14, no_of_frames: 7});
	birdpool.push(bird);
	i++;
}

function bringIn(id , num, x ,y){
	//console.log(id , num, x ,y);
	var div = $("#"+id);
	var l = parseInt(div.css("left"), 10);
	var r = l+parseInt(div.css("width"), 10);
	var u = parseInt(div.css("top"), 10);
	var d = u+parseInt(div.css("height"), 10);
	
	if(x === undefined) x=l;
	if(y === undefined) y=u;
	
	var len = Math.max(num, 4);
	if(birdpool.length < len){
		setTimeout(function(){ bringIn(id, num,x,y);}, 50);
		return;
	}
	var side = Math.floor(len/4.0);
	var birds=[]

	for(var c=0; c<side; c++){
		var bird = getBirdFromPool();
		bird.css("left",(l-20)+"px");
		bird.css("top",(Math.floor(u+((d-u)*1.0/side*c))-15)+"px");
		birds.push(bird);
		  //, 500+Math.floor(Math.random()*1000), "swing");
	}
	for(var c=0; c<side; c++){
		var bird = getBirdFromPool();
		bird.css("left",(Math.floor(l+((r-l)*1.0/side*c))-20)+"px");
		bird.css("top",(u-20)+"px");
		birds.push(bird);
		  //, 500+Math.floor(Math.random()*1000), "swing");
	}

	for(var c=0; c<side; c++){
		var bird = getBirdFromPool();
		bird.css("left",(Math.floor(l+((r-l)*1.0/side*c))-20)+"px");
		bird.css("top",(d-20	)+"px");
		birds.push(bird);
		  //, 500+Math.floor(Math.random()*1000), "swing");
	}
	for(var c=0; c<side; c++){
		var bird = getBirdFromPool();
		bird.css("left",(r-30)+"px");
		bird.css("top",(Math.floor(u+((d-u)*1.0/side*c))-15)+"px");
		birds.push(bird);
		  //, 500+Math.floor(Math.random()*1000), "swing");
	}


	var dx = x-parseInt(div.css("left"), 10);
	var dy = y-parseInt(div.css("top"), 10);
	div.animate({
		left: x+"px",
	}, 500+Math.floor(Math.random()*200), "swing");

	$.each(birds ,function(index, value) { 
		var l = parseInt(value.css("left"), 10);
		var u = parseInt(value.css("top"), 10);
		value.animate({
		    left: (l+dx)+"px",
		    top: (u+dy)+"px"

		}, 500+Math.floor(Math.random()*200), "swing",
		function(){
			value.animate({
		    left: -100+"px",
		    top: Math.floor(Math.random()*600)+"px"
			}, 500+Math.floor(Math.random()*200), "swing",
			function(){
				putBirdInPool(value);
			});
		});
	});

	
		
}

$(document).ready(function() {
var j=200;
while(j--)
  makeBird(j);
 $('body').on('click', function(){
  	setTimeout(function() {bringIn("one", 20, 0);} 
  		, Math.floor(Math.random()*400));
  	setTimeout(function() {bringIn("two", 20, 0);} 
  		, Math.floor(Math.random()*400));
  	setTimeout(function() {bringIn("three", 20, 0);} 
  		, Math.floor(Math.random()*400));
  	setTimeout(function() {bringIn("four", 20, 0);} 
  		, Math.floor(Math.random()*400));
  	setTimeout(function() {bringIn("five", 20, 0);} 
  		, Math.floor(Math.random()*400));
  	setTimeout(function() {bringIn("six", 20, 0);} 
  		, Math.floor(Math.random()*400));
  	
  });

  });


\
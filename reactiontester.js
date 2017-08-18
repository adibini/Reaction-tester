<!DOCTYPE html>
<html>
<head>
	<title>Learning Javascript</title>
<style type="text/css">
	p{
		font-family: Arial,sans-serif;
	}
	a:visited{
		color: green;
	}
	a:hover{
		font-size: 50px;
	}
	#box{
		width: 200px;
		height:200px;
		background-color: red;
		display: none;
		position: relative;
	}
</style>
</head>

<body>

<p> Your Time : <span id="time"></span></p>

<div id=box> </div>

<script type="text/javascript">

	function getRandomColor() {
 	 var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++)
  	 {
  	  color += letters[Math.floor(Math.random() * 16)];
  	 }
  		return color;
	}
	


function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

var clickedTime; var createdTime; var reactionTime;

function makebox(){

	createdTime = Date.now();

	var time = Math.random();
	time = time * 3000;
	setTimeout(function() {
		if (Math.random()>0.5) {
			document.getElementById("box").style.borderRadius="100px";
		}
		else{
			document.getElementById("box").style.borderRadius="0px";
		}

		var top= Math.random();
		top = top *300;
		var left= Math.random();
		left = left *500;
		document.getElementById("box").style.top=top+"px";
		document.getElementById("box").style.left=left+"px";
		document.getElementById("box").style.backgroundColor= getRandomColor();
		document.getElementById("box").style.display="block";

	},3000);

}

	document.getElementById("box").onclick = function(){

		clickedTime = Date.now();
		reactionTime = (clickedTime - createdTime)/1000;
		
		document.getElementById("time").innerHTML = reactionTime;
		this.style.display = "none";
		makebox();
	}
	makebox();

</script>
	
</body>
</html>
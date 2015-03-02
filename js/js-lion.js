//Getting elements
lion = document.getElementById("lion");
playground = document.getElementById("playground");
box = document.getElementById("box"); 
labyrinth = document.getElementById("labyrinth"); 
code = document.getElementById("code");

//Lion needs to be absolute position
lion.style.position = "absolute";

//Insert the Text of wining or losing
statusGame = document.createElement("strong");  
box.insertBefore(statusGame, code);

//Getting size of labyrinth image and then undisplaying it so canvas get the right position
labyrinthWidth = 640;
labyrinthHeight = 480;
labyrinth.style.display = "none";


//Create a Canvas, which is a copy of the labyrinth, so it is possible to get the transparency
canvas = document.createElement("canvas");  
playground.appendChild(canvas);
canvas.id = "myCanvas";
canvas.style.marginLeft  = "213px";
canvas.style.borderTopRightRadius = "73px";
canvas.setAttribute('width',labyrinthWidth); 
canvas.setAttribute('height',labyrinthHeight);
ctx = canvas.getContext("2d");

document.onreadystatechange = function () {
	ctx.drawImage(labyrinth,0,0);  
	youLose = false;    
}

//Playing the Game
lion.onmousemove = function(e) {
    lion.style.height = "3.5%";
    lion.style.width = "1.5%";
	
	x = e.pageX - canvas.offsetLeft;
	y = e.pageY - canvas.offsetTop;
	
    lion.style.left = e.pageX - 10 + "px";
	lion.style.top  = e.pageY - 15 + "px";

	//Start the game, get the entrance of labyrinth
	if (x > -5 && x < 5 && y > 154 && y < 195){
		start = true;
		console.log(start);
	}
	
	//You win on its exit, if you had not lose before
	if (x > 630 && x < 645 && y > 50 && y < 120 && start !== 'undefined' && start === true ){
		win();
	}	

	//You lose if you get on labyrinth
	if(ctx.getImageData(x,y,1,1).data[3] !== 0 && typeof start !== 'undefined' && start === true)  	
	{
		lose();		
	}

}
//You lose
var lose = function(){
	statusGame.innerHTML = "You Lose";
	youLose = true;
	console.log("You Lose");
	return true;
}

//You win
var win = function(){
	if(youLose === false){
		statusGame.innerHTML = "You Win";
		console.log("You Win");
	}
}
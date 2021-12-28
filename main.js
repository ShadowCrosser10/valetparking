canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_img_height = 120;
greencar_img_width = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x_pos = 5;
greencar_y_pos = 225;

function add() {
	bg_img = new Image();
	bg_img.onload = uploadBackground;
	bg_img.src = background_image;

	greencar_img = new Image();
	greencar_img.onload = uploadgreencar;
	greencar_img.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_img, greencar_x_pos, greencar_y_pos, greencar_img_width, greencar_img_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
	if (greencar_y_pos >= 0) {
		greencar_y_pos = greencar_y_pos - 10; 
		console.log("The x coordinate of the green car is:"+greencar_x_pos+" And the y coordinate is:"+greencar_y_pos);
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	if (greencar_y_pos <= 500) {
		greencar_y_pos = greencar_y_pos + 10; 
		console.log("The x coordinate of the green car is:"+greencar_x_pos+" And the y coordinate is:"+greencar_y_pos);
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if (greencar_x_pos >= 0) {
		greencar_x_pos = greencar_x_pos - 10; 
		console.log("The x coordinate of the green car is:"+greencar_x_pos+" And the y coordinate is:"+greencar_y_pos);
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	if (greencar_x_pos <= 900) {
		greencar_x_pos = greencar_x_pos + 10; 
		console.log("The x coordinate of the green car is:"+greencar_x_pos+" And the y coordinate is:"+greencar_y_pos);
		uploadBackground();
		uploadgreencar();
	}
}

var display = document.querySelector("canvas");
var brush = display.getContext("2d");

//This code is used to draw right triangle
brush.fillStyle = "black";
brush.beginPath();
brush.moveTo(50, 50);
brush.lineTo(50, 400);
brush.lineTo(400, 400);
brush.fill();

brush.fillStyle = "white";
brush.beginPath();
brush.moveTo(100, 175);
brush.lineTo(100, 350);
brush.lineTo(275, 350);
brush.fill();
brush.lineTo();

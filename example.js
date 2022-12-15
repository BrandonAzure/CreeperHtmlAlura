var display = document.querySelector("canvas");
var brush = display.getContext("2d");

brush.fillStyle = "red";
brush.fillRect(0, 0, 200, 600);

brush.fillStyle = "green";
brush.fillRect(200, 0, 200, 600);

brush.fillStyle = "blue";
brush.fillRect(400, 0, 200, 600);
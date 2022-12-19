var display = document.querySelector("canvas");
var brush = display.getContext("2d");

//This code is used to draw the Creeper´s head which is green
brush.fillStyle = "darkgreen";
brush.fillRect(80, 60, 350, 300);

//This code is used to draw the circles on the Creeper´s head
brush.fillStyle = "black";
brush.fillRect(130, 120, 90, 90);
brush.fillRect(290, 120, 90, 90);

//This code is used to draw the Creeper´s nose
brush.fillRect(220, 210, 70, 100);

//This code is used to draw the Creeper´s mouth
brush.fillRect(180, 250, 40, 110);
brush.fillRect(290, 250, 40, 110);

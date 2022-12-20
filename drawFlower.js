var display = document.querySelector("canvas");
var brush = display.getContext("2d");
const verticalColors = ["yellow", "blue"];
const horizontalColors = ["orange", "red", "black"];

brush.fillStyle = "lightgrey";
brush.fillRect(0, 0, 600, 400);

let x = 300, y = 150, radio = 15, index = 0, i = 0, j = 0;

function drawFlowers(x, y, radio, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, radio, 0, 2 * 3.1416);
    brush.fill();
}

for (i = 0; i < 3; i++) {
    x = 270;

    if (i % 2 != 0) {
        y += 30;
        for (j = 0; j < 3; j++) {
            drawFlowers(x, y, radio, horizontalColors[j]);
            x += 30;
        }
        y -= 52;
        y += 82;
    }

    if (i % 2 == 0) {
        x = 300;
        drawFlowers(x, y, radio, verticalColors[index]);
        index++;
    }

}
let number = 0;
let limit = 0;

number = parseInt(prompt("Type the number you want to find out your multiplication table: "));
limit = parseInt(prompt("Enter the limit that the multiplication table will have: "));

for (var i = 0; i <= limit; i++) {
    document.write(number + " x " + i + " = " + (5 * i) + "<br>");
}

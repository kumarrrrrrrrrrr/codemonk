var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.stroke();
});






const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const radius = 30;

canvas.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (x < canvas.width / 2) {
    // Draw circle in the left half
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();

    // Draw mirrored circle in the right half
    ctx.beginPath();
    ctx.arc(canvas.width - x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
  } else {
    // Draw circle in the right half
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();

    // Draw mirrored circle in the left half
    ctx.beginPath();
    ctx.arc(canvas.width - x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
  }
});

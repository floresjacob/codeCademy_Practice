var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var balls = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ballRadius = 10;

canvas.addEventListener('mousedown', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var dx = 2 * (Math.random() - 0.5);  // gives a value between -2 and 2
    var dy = 2 * (Math.random() - 0.5);  // gives a value between -2 and 2
    balls.push({x, y, dx, dy});
});

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function updateBall(ball) {
    if(ball.x + ball.dx > canvas.width-ballRadius || ball.x + ball.dx < ballRadius) {
        ball.dx = -ball.dx;
    }
    if(ball.y + ball.dy > canvas.height-ballRadius || ball.y + ball.dy < ballRadius) {
        ball.dy = -ball.dy;
    }
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        drawBall(ball);
        updateBall(ball);
    });
}

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

setInterval(draw, 10);

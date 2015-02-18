var canvas = document.createElement('canvas');
document.addEventListener("keydown",keyDownHandler, false);
canvas.id = "c";
canvas.width = 600;
canvas.height = 600;
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var dx = -2;
player = {
sprite1 : {
x: 260,
y: 260,
h: 80,
w: 40,
color: "#FF0000"
},
sprite2 : {
x: 260,
y: 300,
h: 80,
w: 40,
color: "#000099"
}
};

enemy = {
sprite1 : {
x: 50,
y: 50,
r: 25,
color: "#FF0000"
},
sprite2 : {
x: 550,
y: 550,
r: 25,
color: "#000099"
}
};

function keyDownHandler(event)
{
var keyPressed = event.keyCode;
    var r;
    if (keyPressed == 32) {
        r = player.sprite1.color;
        player.sprite1.color = player.sprite2.color;
        player.sprite2.color = r;
        //ctx.fillStyle = player.sprite1.color;
        //ctx.fillRect(player.sprite1.x, player.sprite1.y, player.sprite1.h, player.sprite1.w);
        //ctx.fillStyle = player.sprite2.color;
        //ctx.fillRect(player.sprite2.x, player.sprite2.y, player.sprite2.h, player.sprite2.w);
    }
    if (keyPressed == 87) {
        if (player.sprite1.y > 100) {
            player.sprite1.y -= 3;
            player.sprite2.y -= 3;
        }
    }
    if (keyPressed == 83) {
        if (player.sprite2.y < 460) {
            player.sprite1.y += 3;
            player.sprite2.y += 3;
        }
    }
    if (keyPressed == 68) {
        if (player.sprite1.x < 420) {
            player.sprite1.x += 3;
            player.sprite2.x += 3;
        }
    }
    if (keyPressed == 65) {
        if (player.sprite1.x > 100) {
            player.sprite1.x -= 3;
            player.sprite2.x -= 3;
        }
    }
}
function draw() {


ctx.fillStyle = "#CCFFCC";
ctx.fillRect(0,0,600,600);
//
ctx.fillStyle = "blue";
ctx.font = "bold 16px Arial";
ctx.fillText("Score: ", 500, 16);
ctx.fillStyle = "#000000";
ctx.fillRect(0,100,100,400);
ctx.fillStyle = "#000000";
ctx.fillRect(500,100,100,400);
//
ctx.fillStyle = player.sprite1.color;
ctx.fillRect(player.sprite1.x,player.sprite1.y,player.sprite1.h,player.sprite1.w);
ctx.fillStyle = player.sprite2.color;
ctx.fillRect(player.sprite2.x,player.sprite2.y,player.sprite2.h,player.sprite2.w);
//
ctx.beginPath();
ctx.fillStyle = enemy.sprite1.color;
ctx.arc(enemy.sprite1.x, enemy.sprite1.y, enemy.sprite2.r, 0, 2 * Math.PI, false);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = enemy.sprite2.color;
ctx.arc(enemy.sprite2.x, enemy.sprite2.y, enemy.sprite2.r, 0, 2 * Math.PI, false);
ctx.fill();

enemy.sprite2.x += dx;
ctx.beginPath();
ctx.fillStyle = enemy.sprite2.color;
ctx.arc(enemy.sprite2.x, enemy.sprite2.y, enemy.sprite2.r, 0, 2 * Math.PI, false);
ctx.fill();
enemy.sprite1.x -= dx;
ctx.beginPath();
ctx.fillStyle = enemy.sprite1.color;
ctx.arc(enemy.sprite1.x, enemy.sprite1.y, enemy.sprite1.r, 0, 2 * Math.PI, false);
ctx.fill();
if (enemy.sprite2.x <= 25) {
    dx *= -1;
}
if (enemy.sprite2.x >= 575) {
    dx *= -1;
}
}
 
setInterval(draw, 1000/60);

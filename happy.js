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
var s = 0;
var check = true
b = {
    c1: "#000000",
    c2: "#000000"
};
p = {
v : {
x: 260,
y: 260,
h: 80,
w: 40,
c: "#FF0000"
},
r : {
x: 260,
y: 300,
h: 80,
w: 40,
c: "#000099"
}
};

e = {
v : {
x: 50,
y: 50,
r: 25,
c: "#FF0000"
},
r : {
x: 550,
y: 550,
r: 25,
c: "#000099"
}
};

function keyDownHandler(event)
{
var keyPressed = event.keyCode;
    var r;
    if (keyPressed == 32) {
        r = p.v.c;
        p.v.c = p.r.c;
        p.r.c = r;
    }
    if (keyPressed == 87) {
        if (p.v.y > 100) {
            p.v.y -= 10;
            p.r.y -= 10;
        }
    }
    if (keyPressed == 83) {
        if (p.r.y < 460) {
            p.v.y += 10;
            p.r.y += 10;
        }
    }
    if (keyPressed == 68) {
        if (p.v.x < 420) {
            p.v.x += 10;
            p.r.x += 10;
        }
    }
    if (keyPressed == 65) {
        if (p.v.x > 100) {
            p.v.x -= 10;
            p.r.x -= 10;
        }
    }
}
function draw() {


ctx.fillStyle = "#CCFFCC";
ctx.fillRect(0,0,600,600);
//
ctx.fillStyle = "blue";
ctx.font = "bold 16px Arial";
ctx.fillText("Score: " + s, 500, 16);
ctx.fillStyle = b.c1;
ctx.fillRect(0,100,100,400);
ctx.fillStyle = b.c2;
ctx.fillRect(500,100,100,400);
//
ctx.fillStyle = p.v.c;
ctx.fillRect(p.v.x,p.v.y,p.v.h,p.v.w);
ctx.fillStyle = p.r.c;
ctx.fillRect(p.r.x,p.r.y,p.r.h,p.r.w);
//
ctx.beginPath();
ctx.fillStyle = e.v.c;
ctx.arc(e.v.x, e.v.y, e.r.r, 0, 2 * Math.PI, false);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = e.r.c;
ctx.arc(e.r.x, e.r.y, e.r.r, 0, 2 * Math.PI, false);
ctx.fill();

e.r.x += dx;
ctx.beginPath();
ctx.fillStyle = e.r.c;
ctx.arc(e.r.x, e.r.y, e.r.r, 0, 2 * Math.PI, false);
ctx.fill();
e.v.x -= dx;
ctx.beginPath();
ctx.fillStyle = e.v.c;
ctx.arc(e.v.x, e.v.y, e.v.r, 0, 2 * Math.PI, false);
ctx.fill();
    if (dx > 20) {
        dx = 20;
    }
if (e.v.x == 200 || e.v.x == 400) {
    r = e.v.c;
    e.v.c = e.r.c;
    e.r.c = r;
}
if (e.r.x < 25) {
    if (dx > 0 && check) {dx += Math.round(s / 20); check = false} else {dx -= Math.round(s / 20); check = false}
    dx *= -1;
}
if (e.r.x > 575) {
    if (dx > 0 && check) {dx += Math.round(s / 20); check = false} else {dx -= Math.round(s / 20); check = false}
    dx *= -1;
}
    if (p.v.x >= 420 && b.c2 == "#000000" && p.v.c != e.v.c) {
        s++;
        b.c2 = "#CCFFCC"
        check = true
    } else if(p.v.x >= 420 && b.c2 == "#000000" && p.v.c == e.v.c) {
        s = 0
        if (dx > 0) {dx = 2} else {dx = -2}
    }
    if (p.v.x <= 100 && b.c1 == "#000000" && p.v.c != e.v.c) {
        s++;
        b.c1 = "#CCFFCC"
        check = true
    } else if(p.v.x <= 100 && b.c1 == "#000000" && p.v.c == e.v.c) {
        s = 0
        if (dx > 0) {dx = 2} else {dx = -2}
    }
    if (b.c2 == "#CCFFCC" && b.c1 == "#CCFFCC") {
        b.c2 = "#000000"
        b.c1 = "#000000"
    }
    if (e.v.x > 600) {
        e.v.x = 500
        dx *= -1
    }
    if (e.r.x > 600) {
        e.r.x = 500
        dx *= -1
    }
    if (e.v.x < 0) {
        e.v.x = 100
        dx *= -1
    }
    if (e.r.x < 0) {
        e.r.x = 100
        dx *= -1
    }
}
 
setInterval(draw, 1000/60);

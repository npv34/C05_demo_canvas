
let ball = new Ball(100, 400, 20, 'red')
ball.draw();

let rect = new Rectangle(200, 450, 100, 20, 'blue');
//rect.draw();


function clearCanvas() {
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function play() {
    clearCanvas();
    ball.move();
    ball.draw();
    rect.draw();
    ball.collision(rect)
}

setInterval(play, 50)

window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 37:
            rect.moveLeft();
            break;
        case 39:
            rect.moveRight();
            break;
    }
})

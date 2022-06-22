class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.flag = 'TOP';
        this.canvas = document.getElementById('mycanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fillStyle = this.color
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        if (this.y <= this.radius) {
            this.flag = 'DOWN';
        } else if (this.y + this.radius >= this.canvas.height) {
            this.flag = 'TOP';
        }

        switch (this.flag) {
            case 'TOP':
                this.moveTop();
                break;
            case 'DOWN':
                this.moveDown();
                break;
            default:
                this.moveTop();
        }

    }

    moveTop() {

        this.y -= 5;

    }

    moveDown() {
        this.y += 5;
    }

    collision(bar) {
        if (this.y + this.radius >= bar.y
            && this.x >= bar.x
            && this.x <= bar.x + bar.width) {
            this.flag = 'TOP';
        }
    }
}

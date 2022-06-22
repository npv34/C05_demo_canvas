class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('mycanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();

        // ve hinh anh
        const image = new Image(this.width, this.height);
        image.src = 'img.png';
        this.ctx.drawImage(image, this.x, this.y)

        // ve hinh chu nhat khong anh
        // this.ctx.rect(this.x, this.y, this.width, this.height);
        // this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveLeft() {
        this.x -= 5;
    }

    moveRight() {
        this.x += 5;
    }
}

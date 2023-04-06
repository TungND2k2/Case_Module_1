class Spaceship {
    x;
    y;
    height;
    width;
    img;

    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);

        let img = new Image();
        img.src = 'ship.png'

        this.ctx.drawImage(img, this.x, this.y, this.width, this.height)

        this.ctx.closePath();
    }
}

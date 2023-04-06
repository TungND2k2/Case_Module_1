class Star {
    x;
    y;
    radius

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y,this.radius,0,2*Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();

    }

    Move() {
        this.y += 2;
        if (this.y >= cvs.height) {
            this.y = Math.floor(Math.random() * 400);
            this.x = Math.floor(Math.random() * 400);
        }
        this.draw()
    }

}
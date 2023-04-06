class SpaceStation{
    x;
    y;
    height;
    width;

    constructor() {
        this.x = 100;
        this.y = 50;
        this.height = 100;
        this.width = 300;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);

        let img = new Image();
        img.src = 'taume.png'

        this.ctx.drawImage(img, this.x, this.y, this.width, this.height)

        this.ctx.closePath();
    }
}


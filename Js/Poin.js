class Poin {
    x;
    y;
    radius

    constructor( ) {
        this.x = 200;
        this.y = 0;
        this.radius = 10;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y,this.radius,0,2*Math.PI);
        this.ctx.fillStyle = 'yellow';
        this.ctx.fill();
        this.ctx.closePath();

    }
    checkCoin (car){
        this.y+=1;
        if (((this.y + this.radius >= car.y) && (this.y - this.radius <= car.y +car.height)) &&
            ((this.x + this.radius >= car.x) && (this.x - this.radius <= car.x + car.width))) {
            this.x=Math.floor(Math.random()*400)
            this.y=0;
            score=score+100;
        }
        if (this.y >= cvs.height) {
            this.x = Math.floor(Math.random() * 400);
            this.y = Math.floor(Math.random() * 400);
        }


    }

    printScore() {
        ctx.beginPath();
        ctx.font = "50px Arial";
        ctx.fillStyle = "yellow";
        ctx.fillText(score, 460, 50, 30);
        ctx.stroke();
        ctx.closePath();


    }}
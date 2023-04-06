class Gunboss {
    x;
    y;
    radius
    velocity;
status;
    constructor(velocity) {
        this.x = boss1.x;
        this.y = boss1.y;
        this.radius = 10;
        this.velocity = velocity;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
        this.status=false
    }

    draw() {

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'darkred';
        this.ctx.fill();
        this.ctx.closePath();

    }

    Move() {
        this.y += 4;
        if (this.y >= this.cvs.height) {
            this.y = boss1.y + boss1.height / 4;
            this.x = boss1.x + boss1.width / 2
        }
        this.draw()
    }

}
function checkboss(coin,car){
    if (((coin.y + coin.radius*0.6 >= car.y) && (coin.y <= car.y + car.height*0.8)) &&
        ((coin.x + coin.radius*0.6 >= car.x) && (coin.x <= car.x + car.width*0.8))) {

        Game() ;
        Gameover()}}
class Gunboss2 {
    x;
    y;
    radius
    velocity;

    constructor(velocity) {
        this.x = boss2.x;
        this.y = boss2.y;
        this.radius = 10;
        this.velocity = velocity;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'darkred';
        this.ctx.fill();
        this.ctx.closePath();

    }

    Move() {
        this.y += 4;
        if (this.y >= this.cvs.height) {
            this.y = boss2.y + boss2.height ;
            this.x = boss2.x + boss2.width
        }
        this.draw()
    }

}
class Gunboss3 {
    x;
    y;
    radius
    velocity;

    constructor(velocity) {
        this.x = boss2.x;
        this.y = boss2.y;
        this.radius = 10;
        this.velocity = velocity;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'darkred';
        this.ctx.fill();
        this.ctx.closePath();

    }

    Move() {
        this.y += 4;
        if (this.y >= this.cvs.height) {
            this.y = boss2.y + boss2.height ;
            this.x = boss2.x+boss2.width/2
        }
        this.draw()
    }

}
class Gunbossfinal {
    x;
    y;
    radius
    velocity;
    angle;

    constructor(velocity) {
        this.x = boss3.x;
        this.y = boss3.y;
        this.radius = 10;
        this.angle=Math.random()*2*Math.PI
        this.velocity = velocity;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'darkred';
        this.ctx.fill();
        this.ctx.closePath();

    }

    MoveUp() {
        this.y -= 2;
        if (this.y <= 0) {
            this.y = boss3.y + boss3.height ;
            this.x = boss3.x+boss3.width/2
        }
        this.draw()
    } MoveDown() {
        this.y += 2;
        if (this.y >= 560) {
            this.y = boss3.y + boss3.height ;
            this.x = boss3.x+boss3.width/2
        }}
    MoveDown1() {
        this.y += 2;
        if (this.y >= 560) {
            this.y = boss3.y + boss3.height ;
            this.x = boss3.x+boss3.width
        }
        this.draw()
    } MoveRight() {
        this.x += 2;
        if (this.x >= 500) {
            this.y = boss3.y + boss3.height ;
            this.x = boss3.x+boss3.width/2
        }
        this.draw()
    } MoveLeft() {
        this.x -= 2;
        if (this.x <= 0) {
            this.y = boss3.y + boss3.height ;
            this.x = boss3.x+boss3.width/2
        }
        this.draw()
    }

}
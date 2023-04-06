class Gun {
    x;
    y;
    radius
    velocity;
    constructor(velocity) {
        this.x = spaceship.x;
        this.y = spaceship.y;
        this.radius = 4;
        this.velocity=velocity;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y,this.radius,0,2*Math.PI);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.ctx.closePath();

    }
    Move(){
        this.y-=40
        if(this.y<=0){
            this.y=spaceship.y;
            this.x=spaceship.x+spaceship.width-20
        }
        this.draw()

    }
    Move1(){
        this.y-=40;
        if(this.y<=0){
            this.y=spaceship.y;
            this.x=spaceship.x+spaceship.width-60
        }
        this.draw()

    }



    Check(barrier){
        if (((this.y + this.radius >= barrier.y) && (this.y - this.radius <= barrier.y +barrier.size)) &&
            ((this.x + this.radius >= barrier.x) && (this.x - this.radius <= barrier.x + barrier.size))){
            barrier.size=barrier.size-10;
            if(barrier.size<=40){
                barrier.x=-cvs.height;
            }
            score++

        }

    }

}
function checkgun1(gun,boss){
    if (((gun.y + gun.radius >= boss.y) && (gun.y - gun.radius <= boss.y +boss.height)) &&
        ((gun.x + gun.radius >= boss.x) && (gun.x - gun.radius <= boss.x + boss.width))){
        pun=pun+5;
        score++
        gun.x=spaceship.x+spaceship.width-20;
        gun.y=spaceship.y;

    }

    if(pun>=300){
       boss.status = false;
    }}
function checkgun12(gun,boss){
    if (((gun.y + gun.radius >= boss.y) && (gun.y - gun.radius <= boss.y +boss.height)) &&
        ((gun.x + gun.radius >= boss.x) && (gun.x - gun.radius <= boss.x + boss.width))){
        pun=pun+5;
        score++
        gun.x=spaceship.x+spaceship.width-60;
        gun.y=spaceship.y;

    }

    if(pun>=300){
        boss.status = false;
    }}
function checkgun2(gun,boss){
    if (((gun.y + gun.radius >= boss.y) && (gun.y - gun.radius <= boss.y +boss.height)) &&
        ((gun.x + gun.radius >= boss.x) && (gun.x - gun.radius <= boss.x + boss.width))){
        pun=pun+5;
        score++
        gun.x=spaceship.x+spaceship.width-20;
        gun.y=spaceship.y;
    }
    if(pun>=2000){
       boss.status=false
    }}
function checkgun22(gun,boss){
    if (((gun.y + gun.radius >= boss.y) && (gun.y - gun.radius <= boss.y +boss.height)) &&
        ((gun.x + gun.radius >= boss.x) && (gun.x - gun.radius <= boss.x + boss.width))){
        pun=pun+5;
        score++
        gun.x=spaceship.x+spaceship.width-60;
        gun.y=spaceship.y;

    }

    if(pun>=2000){
        boss.status = false;
    }}
function checkgun3(gun,boss){
    if (((gun.y + gun.radius >= boss.y) && (gun.y - gun.radius <= boss.y +boss.height)) &&
        ((gun.x + gun.radius >= boss.x) && (gun.x - gun.radius <= boss.x + boss.width))){
        pun=pun+5;
        score++
        gun.x=spaceship.x+spaceship.width-20;
        gun.y=spaceship.y;

    }
    if(pun>=4000){
        boss.status=false

    }}
function checkgun32(gun,boss){
    if (((gun.y + gun.radius >= boss.y) && (gun.y - gun.radius <= boss.y +boss.height)) &&
        ((gun.x + gun.radius >= boss.x) && (gun.x - gun.radius <= boss.x + boss.width))){
        pun=pun+5;
        score++
        gun.x=spaceship.x+spaceship.width-60;
        gun.y=spaceship.y;


    }

    if(pun>=4000){
        boss.status = false;
    }}
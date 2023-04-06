class Barrier {
    x;
    y;
    size;
    constructor() {
        this.x = Math.floor(Math.random() * 250);
        this.y = 0;
        this.size = Math.floor(Math.random() * 60 + 50)
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
    }

    draw2() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.size, this.size);

        let img = new Image();
        img.src = 'thienthach.png'
        this.ctx.drawImage(img, this.x, this.y, this.size, this.size)

        this.ctx.closePath();
    }

    checkCollision() {
        this.y += 1.3;

        if (this.y >= cvs.height) {
            this.x = Math.floor(Math.random() * 300 + 200)
            this.y = 0;
            this.size=Math.random()*140+40
        }

        this.draw2();

    }
    checck() {
        this.y += 1.3;

        if (this.y >= cvs.height) {
            this.x = Math.floor(Math.random() * 300  )
            this.y=0;
            this.size=Math.random()*140+40
        }

        this.draw2();

    }
}
function check(coin,car){
    if (((coin.y + coin.size*0.6 >= car.y) && (coin.y <= car.y + car.height*0.8)) &&
        ((coin.x + coin.size*0.6 >= car.x) && (coin.x <= car.x + car.width*0.8))) {

        Game() ;
        Gameover()}

}function checkspaceboss(coin,car){
    if (((coin.y + coin.height*0.6 >= car.y) && (coin.y <= car.y + car.height*0.8)) &&
        ((coin.x + coin.width*0.6 >= car.x) && (coin.x <= car.x + car.width*0.8))) {

        Game() ;
        Gameover()}

}
let gameover = true;
let pun = 0;
let space = new SpaceStation()
let xx = document.getElementById('music')
let boss1 = new Boss1()
let boss2 = new Boss2()
let boss3 = new Boss3()
let gunboss = new Gunboss(20)
let gunboss2 = new Gunboss2(20)
let gunboss3 = new Gunboss3(20)
let gunnboss31 = new Gunbossfinal(20)
let gunnboss32 = new Gunbossfinal(20)
let gunnboss33 = new Gunbossfinal(20)
let gunnboss34 = new Gunbossfinal(20)
let gunnboss35 = new Gunbossfinal(20)
let score = 0;
let cvs = document.getElementById('Mycanvas');
let ctx = cvs.getContext('2d');
let spaceship = new Spaceship(200, 450, 80, 80)
let background = new Bar(0, 0, 500, 560, 'black')
let Star1 = new Star(100, 0,)
let Star2 = new Star(50, 40,)
let Star3 = new Star(250, 40,)
let Star4 = new Star(20, 29,)
let Star5 = new Star(10, 64,)
let Star6 = new Star(300, 91,)
let Star7 = new Star(240, 0,)
let gun = new Gun(20)
let gun2 = new Gun(20)
let barrier = new Barrier()
let barrier2 = new Barrier()
let barrier3 = new Barrier()
let barrier4 = new Barrier()
let poin = new Poin()
function checkwin(space, spaceship) {
    if (((space.y + space.height * 0.6 >= spaceship.y) && (space.y <= spaceship.y + spaceship.height * 0.8)) &&
        ((space.x + space.width * 0.6 >= spaceship.x) && (space.x <= spaceship.x + spaceship.width * 0.8))) {

        gamewin();

    }
}
function speed1(barrier){
    barrier.y+=1
}function speed2(barrier){
    barrier.y+=1.5
}function speed3(barrier){
    barrier.y+=2
}
function Start() {
    gun.x=spaceship.x+spaceship.width-20;
    gun.y=spaceship.y;
    gun2.x=spaceship.x+spaceship.width-60;
    gun2.y=spaceship.y;
    // xx.play();
    pun = 0;
    barrier.y = 0;
    barrier2.y = 0;
    barrier3.y = 0;
    barrier4.y = 0;
    barrier.x = Math.floor(Math.random() * 300 + 100)
    barrier2.x = Math.floor(Math.random() * 300 + 100)
    barrier3.x = Math.floor(Math.random() * 300 + 100)
    barrier4.x = Math.floor(Math.random() * 300 + 100)
    score = 0;
    poin.y = 0;
    spaceship.y = 450;
    spaceship.x = 200;
    poin.x = Math.floor(Math.random() * 300 + 100)
    barrier.size = Math.random() * 140 + 40
    barrier2.size = Math.random() * 140 + 40
    barrier3.size = Math.random() * 140 + 40
    barrier4.size = Math.random() * 140 + 40
    console.log(boss1.status)


    displayboss()


    gameover = false

}

function displayboss() {
    if (score>=500&& score<1200){
        speed1(barrier)
        speed1(barrier2)
        speed1(barrier3)
        speed1(barrier4)
    }  if (score>=1230&& score<3060){
        speed2(barrier)
        speed2(barrier2)
        speed2(barrier3)
        speed2(barrier4)
    }  if (score>=3100){
        speed3(barrier)
        speed3(barrier2)
        speed3(barrier3)
        speed3(barrier4)
    }
    if (score >= 400 && score < 500) {
        barrier.y = -200
        barrier2.y = -200
        barrier3.y = -200
        barrier4.y = -200
        barrier3.x = Math.random() * 400
        barrier.x = Math.random() * 400
        barrier4.x = Math.random() * 400
        barrier2.x = Math.random() * 400
        setTimeout(FirstBoss, 0, 3000)
    }
    if (score >= 500 && score < 1200) {
        if (pun <= 750) {
            boss1.status = true;
        }
        boss1.Move();
        gunboss.Move();
        checkboss(gunboss, spaceship)
        checkgun1(gun, boss1)
        checkgun12(gun2, boss1)

    }
    if (score >= 1900 && score < 2000) {
        barrier.y = -200
        barrier2.y = -200
        barrier3.y = -200
        barrier4.y = -200
        barrier3.x = Math.random() * 400
        barrier.x = Math.random() * 400
        barrier4.x = Math.random() * 400
        barrier2.x = Math.random() * 400
        setTimeout(SecondBoss, 0, 3000)
    }
    if (score >= 2000 && score < 3000) {
        if (pun <= 2000) {
            boss2.status = true
        }
        boss2.Move();
        gunboss2.Move();
        gunboss3.Move();
        checkboss(gunboss2, spaceship);
        checkboss(gunboss3, spaceship);
        checkgun2(gun, boss2)
        checkgun22(gun2, boss2)
    }
    if (score >= 3800 && score <= 3900) {
        barrier.y = -200
        barrier2.y = -200
        barrier3.y = -200
        barrier4.y = -200
        barrier3.x = Math.random() * 400
        barrier.x = Math.random() * 400
        barrier4.x = Math.random() * 400
        barrier2.x = Math.random() * 400
        setTimeout(FinalBoss, 0, 3000)
    }
    if (score >= 4000) {
        if (pun <= 4000) {
            boss3.status = true
        }
        boss3.Move()
        gunnboss31.MoveDown()
        gunnboss35.MoveDown1()
        gunnboss32.MoveUp()
        gunnboss33.MoveRight()
        gunnboss34.MoveLeft()
        checkgun3(gun, boss3)
        checkgun32(gun2, boss3)
        checkboss(gunnboss31, spaceship)
        checkboss(gunnboss32, spaceship)
        checkboss(gunnboss33, spaceship)
        checkboss(gunnboss34, spaceship)
        checkboss(gunnboss35, spaceship)
        checkspaceboss(boss3, spaceship)}
        if (score >= 4300) {
            ComeHome()
            space.draw()
            checkwin(space, spaceship)

        }


}



Star1.draw()
Star1.draw()
Star1.draw()
Star1.draw()
spaceship.draw()
barrier.draw2()
setInterval(function () {
    if (gameover == false) {
        document.getElementById('Start').style.display = 'none';
    } else {
        document.getElementById('Start').style.display = 'block';
        xx.pause()
    }
    document.getElementById('music').style.display = 'none'
    if (gameover == false) {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        background.draw()
        Star1.Move()
        Star2.Move()
        Star3.Move()
        Star4.Move()
        Star5.Move()
        Star6.Move()
        Star7.Move()
        spaceship.draw()
        poin.draw()
        poin.checkCoin(spaceship)
        poin.printScore(score)
        barrier.checkCollision()
        barrier3.checkCollision()
        barrier4.checkCollision()
        barrier2.checck()
        check(barrier3, spaceship)
        check(barrier, spaceship)
        check(barrier2, spaceship)
        check(barrier4, spaceship)
        gun.Move()
        gun2.Move1()
        gun.Check(barrier3)
        gun.Check(barrier)
        gun.Check(barrier2)
        gun2.Check(barrier)
        gun2.Check(barrier3)
        gun2.Check(barrier2)
        gun2.Check(barrier4)
        displayboss()
    }
}, 10)
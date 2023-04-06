class Bar {
    x;
    y;
    width;
    height;
    color;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d')
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }


}


function Gameover() {
    gameover = true;
    ctx.beginPath();
    ctx.font = "100px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GameOver", 170, 200, 200);
    ctx.stroke();
    ctx.closePath();
}

function gamewin() {
    gameover = true;
    ctx.beginPath();
    ctx.font = "100px Brush Script";
    ctx.fillStyle = "red";
    ctx.fillText("You Win", 170, 200, 200);
    ctx.stroke();
    ctx.closePath();
}

function FirstBoss() {
    ctx.beginPath();
    ctx.font = "100px Brush Script";
    ctx.fillStyle = "rebeccapurple";
    ctx.fillText("First Boss", 170, 200, 200);
    ctx.stroke();
    ctx.closePath();

}

function SecondBoss() {
    ctx.beginPath();
    ctx.font = "100px Brush Script";
    ctx.fillStyle = "rebeccapurple";
    ctx.fillText("Second Boss", 170, 200, 200);
    ctx.stroke();
    ctx.closePath();

}

function FinalBoss() {
    ctx.beginPath();
    ctx.font = "100px Arial";
    ctx.fillStyle = "rebeccapurple";
    ctx.fillText("Final Boss", 170, 200, 200);
    ctx.stroke();
    ctx.closePath();
}

function ComeHome() {
    ctx.beginPath();
    ctx.font = "100px Brush Script";
    ctx.fillStyle = "White";
    ctx.fillText("Return to the space station", 90, 70, 300);
    ctx.stroke();
    ctx.closePath();

}

window.addEventListener('keydown', function (evt) {
    switch (evt.key) {
        case 'ArrowRight':
            spaceship.x += 50;
            break;
        case 'ArrowLeft':
            spaceship.x -= 50;
            break;
        case 'ArrowUp':
            spaceship.y -= 50;
            break;
        case 'ArrowDown':
            spaceship.y += 50;
            break;
        case 'Enter':
            Start();
    }
})

function Game() {
    let cvs = document.getElementById('Mycanvas');
    let ctx = cvs.getContext('2d');
    ctx.beginPath();
    ctx.rect(0, 0, 500, 560);
    ctx.fillStyle = 'Black';
    ctx.fill();
    ctx.closePath()

}


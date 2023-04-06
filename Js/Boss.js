class Boss1 {
    x;
    y;
    width;
    height;
    cvs;
    ctx;
    flag;
    status;
    constructor() {
        this.x = 170;
        this.y = 0;
        this.width = 140;
        this.height = 140;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
        this.flag='right'
        this.status=false;
    }

    draw() {
        if(this.status){
            this.ctx.beginPath();
            this.ctx.rect(this.x, this.y, this.width, this.height);

            let img = new Image();
            img.src = 'Boss1.png'

            this.ctx.drawImage(img, this.x, this.y, this.width, this.height)

            this.ctx.closePath();
    }}
    Moveleft(){
        this.x-=2;

        this.draw()
    }
    MoveRight(){
        this.x+=2;

        this.draw()
    }
    Move(){
        if (this.x<=0){
            this.flag='Right'
        }
        if(this.x>=400){
            this.flag='Left'
        }
        switch (this.flag){
            case 'Right':
                this.MoveRight();
                break;
            case 'Left':
                this.Moveleft();
                break;
            default:
                this.MoveRight()
        }
    }

}
class Boss2 {
    x;
    y;
    width;
    height;
    cvs;
    ctx;
    flag;
    status;

    constructor() {
        this.x = 170;
        this.y = 0;
        this.width = 140;
        this.height = 140;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
        this.flag='right'
        this.status=false
    }

    draw() {
        if (this.status){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);

        let img = new Image();
        img.src = 'Boss2.png'
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height)

        this.ctx.closePath();
    }}
    Moveleft(){
        this.x-=2;

        this.draw()
    }
    MoveRight(){
        this.x+=2;

        this.draw()
    }
    Move(){
        if (this.x<=0){
            this.flag='Right'
        }
        if(this.x>=400){
            this.flag='Left'
        }
        switch (this.flag){
            case 'Right':
                this.MoveRight();
                break;
            case 'Left':
                this.Moveleft();
                break;
            default:
                this.MoveRight()
        }
    }

}
class Boss3 {
    x;
    y;
    width;
    height;
    cvs;
    ctx;
    flag;
    status;
    constructor() {
        this.x = 170;
        this.y = 170;
        this.width = 200;
        this.height = 200;
        this.cvs = document.getElementById('Mycanvas');
        this.ctx = this.cvs.getContext('2d');
        this.flag='right'
        this.status=false
    }

    draw() {
        if(this.status){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);

        let img = new Image();
        img.src = 'Boss3.png'

        this.ctx.drawImage(img, this.x, this.y, this.width, this.height)

        this.ctx.closePath();}
    }
    Moveleft(){
        this.x-=2;

        this.draw()
    }
    MoveRight(){
        this.x+=2;
        this.draw()
    }
    Move(){
        if (this.x<=0){
            this.x=Math.random()*400;
            this.y=Math.random()*300;
            this.flag='Right'
        }
        if(this.x>=400){
            this.flag='Left'
            this.x=Math.random()*300;
            this.y=Math.random()*230;
        }
        switch (this.flag){
            case 'Right':
                this.MoveRight();
                break;
            case 'Left':
                this.Moveleft();
                break;
            default:
                this.MoveRight()
        }
    }

}


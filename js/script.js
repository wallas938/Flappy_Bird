var myObstacles = [];
var colors = ['#2F4F4F', '#9ACD32', '#20B2AA', '#CD5C5C', '#DC143C', '#FFEBCD', '#FF4500', '#FFDAB9'];
var gameOver = false
var myGamePiece, myBackground;
var userChoice = ""

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.getElementById('flappy_bird').appendChild(this.canvas);
    this.frameNo = 0;    
    this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
    clearInterval(this.interval);
  },
}

function component(width, height, img_or_color, x, y, type) {
  this.type = type
  this.image = new Image();
  this.image.src = img_or_color;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    if(this.type == "image" || this.type == "background") {
        ctx.drawImage(this.image,
          this.x,
          this.y,
          this.width, this.height);
          if (type == "background") {
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
          }
    }else {
      ctx.fillStyle = img_or_color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.fall = function() {
    this.y += this.speedY;
  } 
  this.leap = function() {
    this.y -= 20;
  }
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) ||
    (mytop > otherbottom) ||
    (myright < otherleft) ||
    (myleft > otherright)) {
      crash = false;
    }
    return crash;
  },
  this.hitBottom = function() {
    if(this.y === 240) {
      myGameArea.stop()
      gameOver = true
      
    }
  }

  this.backgroundMove = function() {
    if(type == "background")
    this.x -= 1;
    if(this.x == -(this.width))
      this.x = 0
  }
}

function updateGameArea() {
  if(gameOver === false) {
    var x, y;
    for (i = 0; i < myObstacles.length; i ++) {
      if (myGamePiece.crashWith(myObstacles[i])) {
        myGameArea.stop();
        return;
      }
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
      x = myGameArea.canvas.width;
      minHeight = 50;
      maxHeight = 200;
      height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      minGap = 70;
      maxGap = 200;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      let randomIndex = Math.floor(Math.random()*(colors.length+1))
      myObstacles.push(new component(20, height, colors[randomIndex], x, 0, ""));
      myObstacles.push(new component(20, x - height - gap, colors[randomIndex], x, height + gap, ""));
    }
    myBackground.update();
    myBackground.backgroundMove(); 
    for (i = 0; i < myObstacles.length; i ++) {
      myObstacles[i].x -= 1;
      myObstacles[i].update();
    } 
    myGamePiece.fall();
    myGamePiece.hitBottom();
    myGamePiece.update();
  }else {
  console.log(gameOver)
    losingHandler()
  }
  
}

function moveup() {
  myGamePiece.leap()
}

function movedown() {
  myGamePiece.speedY += 1;
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}

function losingHandler() {
  if(gameOver) {
    gameOver = false
    userChoice = prompt('Vous voulez rejouer ?')
  }
}

function startGame() {
  myBackground = new component(656, 270, "images/environment_2.jpg", 0, 0, "background");
  myGamePiece = new component(30, 30, "images/spaceship.png", 10, 120, "image");
  myObstacle = new component(10, 200, colors[Math.floor(Math.random()*colors.length+1)], 300, 120, ""); 
  myGameArea.start();
}

document.addEventListener('DOMContentLoaded', function() {
  startGame()
  movedown()
  document.addEventListener('click', function(e) {
    moveup()
  })
})
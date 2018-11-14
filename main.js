var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d')

var frames = 0;
var interval;

var defaultImages = {
  bg: "images/coolBack.png",
  leftH:"images/leftH.png",
  rightH: "images/rightH.png",
  idleTrunks: "images/trunksStandsFinal2.png",
  trunksForward:"images/trunksForward.png",
  trunksBackwards: "images/trunksBackwards.png",
  trunksHit: "images/trunksHit.png",
  trunksBlocks: "images/trunksBlocks.png",
  trunksJumps: "images/trunksJumps.png",
  trunksAttack:"images/trunksAttack.png",
  trunksSimpleAttack: "images/trunksSimpleAttack.png",
  trunksAttack2: "images/trunksAttack2.png",
  trunksLost:"images/trunksKO.png",
  fattyWalks: "images/fattyWalks.png",
  fattyHit:"images/fattyDamage.png",
  fattyBlocks:"images/fattyBlocks.png",
  fattyJumps:"images/fattyJumps.png",
  fattyAttacks: "images/fattyAttacks.png",
  fattyLost:"images/fattyKO.png",
  fattyFalls:"images/fattyFalls.png",
}

function Board(){
  this.x = 0;
  this.y = 0;
  this.width = canvas.width;
  this.height = canvas.height;
  this.image = new Image();
  this.image.src = defaultImages.bg;
  this.draw = function(){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
}

function Health(){
  Board.call(this)
  this.x = 10
  this.y = 40
  this.width = 500
  this.height = 200
  this.image.src = defaultImages.leftH
    this.draw = function(){
      ctx.drawImage(this.image,0,0, this.width, this.height/5, this.x, this.y, 550, 50 )
    }
  // this.healthCounter = 0;
  //   this.damage = function(){
      
  //   }
}

function Health2(){
  Board.call(this)
  this.x = canvas.width-350;
  this.y = 40
  this.width = 500
  this.height = 200
  this.image.src = defaultImages.leftH
    this.draw = function(){
      ctx.drawImage(this.image,0,0, this.width, this.height/5, this.x, this.y, 550, 50 )
    }
}


function Character(pic, x, y, width, height,){
  // this.sx = sx || 0
  // this.sy = sy||0
  // this.sWidth = sWidth ||120
  // this.sHeight = sHeight ||200
  this.x = x || 40 ;
  this.y = y || 450;
  this.width = width || 120;
  this.height = height || 200;
  this.image = new Image();
  this.image.src = pic
  this.draw = function(){
    this.boundaries()
    ctx.drawImage(this.image, this.x,this.y,this.width,this.height)
  }
  this.boundaries = function(){
    this.y += 5
    if(this.x + this.width > canvas.width-10) {
        this.x = canvas.width-this.width
    } else if(this.x < 10 ) {
        this.x = 10
    }
    if(this.y + this.height > canvas.height-50) {
      this.y = canvas.height-this.height - 50
    }
     else if(this.y < 10 ) {
      this.y += 5
    }
 }

  this.isTouching = function(){

  }

  this.attack = function(){

  }
}

//var gordo = new Character(defaultImages.fattyWalks, 250, 0, 270, 70, 700, 500, 525,150)
// gordo.x=700; 
// gordo.y = 500;
// gordo.width = 525;
// gordo.height = 150;
// gordo.draw = function(){
//   ctx.drawImage(this.image,250, 0, 270, 70, this.x,this.y,this.width,this.height)
// }

function Character2(sx, sy, sWidth, sHeight){
  this.sx = sx;
  this.sy = sy;
  this.sWidth = sWidth;
  this.sHeight = sHeight;
  this.x = 700; 
  this.y = 500;
  this.width = 130;
  this.height = 180;
  this.image = new Image();
  this.image.src = defaultImages.fattyWalks
  this.image.onload = () => {
    this.draw()
  }
  this.draw = () => {
    this.boundaries();
    console.log(this.sx, this.sy, this.sWidth, this.sHeight)
    ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x,this.y,this.width,this.height)
  }
  this.boundaries = function(){
      //this.y+= 5;
    if(this.x +this.width > canvas.width-10) {
        this.x = canvas.width-this.width
    }
    else if(this.x < 10 ) {
        this.x = 10
    }
    if(this.y + this.height > canvas.height-50) {
      this.y = canvas.height-this.height - 50
    }
     else if(this.y < 10 ) {
      this.y = 10
    }   
}
this.isTouching = function(){

}

this.attack = function(){
  for(var pipe of pipes){
        if(this.isTouching(pipe)){
            gameOver()
        }
 }
}
var bg = new Board()
var health = new Health()
var health2 = new Health2()
var trunks = new Character(defaultImages.idleTrunks)
var gordo = new Character2(0, 0, 83, 73)


// window.onload = function(){
//   bg.draw()
//   health.draw()
//   health2.draw()
//   trunks.draw()
//   gordo.draw()
// }


function start(){
  frames = 0
  if(!interval) interval = setInterval(update,1000/60)
}

function update(){
  frames++;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  bg.draw()
  health.draw()
  health2.draw()
  trunks.draw()
  gordo.draw()

  if (keydown.left) {
    trunks.x -= 10;
  }

  if (keydown.right) {
    trunks.x += 10;
  }

  if (keydown.up){
    trunks.y -= 10;
  }

  if (keydown.down){
    trunks.y += 10;
  }

  if (keydown.w){
    gordo.y -= 10;
  }

  if (keydown.a){
    gordo.x -= 10;
  }

  if(keydown.d){
    gordo.x += 10;
  }

  if(keydown.s){
    gordo.y += 10;
  }

}

addEventListener('keydown', function(e){
  switch(e.keyCode){
    case 39:
    trunks.image.src = defaultImages.trunksForward
    trunks.width = 160
    trunks.draw()
    return
    case 37:
    trunks.image.src = defaultImages.trunksBackwards
    trunks.width = 160
    trunks.draw()
    return
    case 38:
    //up
    trunks.y -= 150;
    trunks.image.src = defaultImages.trunksJumps
    return
    case 191:
    trunks.image.src = defaultImages.trunksBlocks
    trunks.draw()
    return
    case 18:
    trunks.image.src = defaultImages.trunksSimpleAttack
    trunks.width = 220
    trunks.draw()
    trunks.attack()
    return
    case 49:
    gordo.image.src = defaultImages.fattyBlocks
    gordo.sx = 0;
    gordo.sy = 0;
    gordo.sWidth = 65;
    gordo.sHeight = 57;
    gordo.draw()
    return
    case 87:
    gordo.image.src = defaultImages.fattyJumps
    gordo.sx = 0;
    gordo.sy = 0;
    gordo.sWidth = 65;
    gordo.sHeight = 57;
    gordo.draw()
    return
    case 83:
    gordo.image.src = defaultImages.fattyFalls
    gordo.sx = 0;
    gordo.sy = 0;
    gordo.sWidth = 65;
    gordo.sHeight = 57;
    gordo.draw()
    return
  }
})

addEventListener('keyup', function(e){
  switch(e.keyCode){
    case 39:
    trunks.image.src = defaultImages.idleTrunks
    trunks.width = 120
    trunks.draw()
    return
    case 37:
    trunks.image.src = defaultImages.idleTrunks
    trunks.width = 120
    trunks.draw()
    return
    case 191:
    trunks.image.src = defaultImages.idleTrunks
    trunks.draw()
    return
    case 38: 
    trunks.image.src = defaultImages.idleTrunks
    trunks.draw()
    return
    case 18:
    trunks.image.src = defaultImages.idleTrunks
    trunks.width = 120
    trunks.draw()
    return
    case 49:
    gordo.image.src = defaultImages.fattyWalks
    gordo.sWidth = 83;
    gordo.sHeight = 73;
    gordo.draw()
    return
    case 87:
    gordo.image.src = defaultImages.fattyWalks
    gordo.sWidth = 83;
    gordo.sHeight = 73;
    gordo.draw()
    return
    case 83:
    gordo.image.src = defaultImages.fattyWalks
    gordo.sWidth = 83;
    gordo.sHeight = 73;
    gordo.draw()
  }
})





//0, 50, 200, 50,
start()
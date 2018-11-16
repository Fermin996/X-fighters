var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d')

var frames = 0;
var interval;

var audio={
  start:"audio/10 - Gatebreaker.mp3",
  play:"audio/26 - Lost Courage.mp3",
  trunksCharge:"audio/TRUNKS_0_547_US.wav"
}

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
  trunksBlast: "images/trunksBlasts.png",
  trunksDestroys: "images/hyperBeam.png",
  trunksTransform1:"images/trunksTransOne.png",  
  trunksTransform2:"images/trunksTrans2.png",
  trunksTransform3:"images/trunksTrans3.png",
  trunksTransform4:"images/trunksTrans4.png",
  trunksTransform5:"images/trunksTrans5.png",
  trunksTransform6:"images/trunksTrans6.png",
  trunksTransform7:"images/trunksTransFinal.png",
  fattyWalks: "images/fattyWalks.png",
  fattyHit:"images/fattyDamage.png",
  fattyBlocks:"images/fattyBlocks.png",
  fattyJumps:"images/fattyJumps.png",
  fattyAttacks: "images/fattyAttacks.png",
  fattyLost:"images/fattyKO.png",
  fattyFalls:"images/fattyFalls.png",
  fattyShocks:"images/electric.png",
  fatMon:"images/Digiman.png",
  fattyFlies : "images/fattyFlies.png",
  transformBall: "images/transformBall.png",
  digiFalls: "images/DigiFalls.png",
  digiJumps: "images/DigiJumps.png",
  digiBack: "images/DigiBack.png",
  digiBlocks:"images/DigiBlocks.png",
  digiShock:"images/DigiShocks.png",
  digiHit:"images/DigiHit.png",
  superHit:"images/superHit.png",
  superForward:"images/superForwards.png",
  superBlocks:"images/superBlocks.png",
  superBackwards:"images/superBackwards.png",
  superBlasts:"images/superBlasts.png",
  superJumps:"images/superJumps.png",
  superStands:"images/superStands.png",
  meleeStrip1:"images/meleeStrip1.png",
  meleeStrip2:"images/meleeStrip2.png",
  meleeStrip3:"images/meleeStrip3.png",
  meleeStrip4:"images/meleeStrip4.png",
  digiDash: "images/DigimonDash.png"
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
  this.healthCounter = 0;
    this.damage = function(){
      trunks.x -=5;
      if(trunks.blocks !== true){
        if(trunks.transform === true){
          trunks.image.src = defaultImages.superHit
        }else{
        trunks.image.src = defaultImages.trunksHit
        }
        this.healthCounter++
      trunks.x -=50;
      trunks.y -= 70;
      trunks.draw();
      }
    }

    this.bar = function(){ if(trunks.blocks){
      ctx.drawImage(this.image,0,0, this.width, this.height/5, this.x, this.y, 550, 50 )
      }else if(this.healthCounter >= 3 && this.healthCounter < 6){
        ctx.drawImage(this.image,0, 65, this.width, this.height/5, this.x, this.y, 550, 50)
      }else if(this.healthCounter >= 6 && this.healthCounter < 9){
        ctx.drawImage(this.image,0, 110, this.width, this.height/5, this.x, this.y, 550, 50)
      }else if(this.healthCounter >= 9 && this.healthCounter < 12){
        ctx.drawImage(this.image,0, 150, this.width, this.height/5, this.x, this.y, 550, 50)
      }else if(this.healthCounter >= 12 && this.healthCounter < 15){
        ctx.drawImage(this.image,0, 250, this.width, this.height/5, this.x, this.y, 550, 50)
      }else if(this.healthCounter >= 15){
        ctx.drawImage(this.image,0, 200, this.width, this.height/5, this.x, this.y, 550, 50)
        gameOver()
      }else{
        ctx.drawImage(this.image,0,0, this.width, this.height/5, this.x, this.y, 550, 50 )
      }
    }  
}

function Health2(){
  Board.call(this)
  this.x = canvas.width-350;
  this.y = 40
  this.width = 500
  this.height = 200
  this.image.src = defaultImages.rightH
    this.draw = function(){
      ctx.drawImage(this.image,0,0, this.width, this.height/5, this.x, this.y, 550, 50 )
    }

    this.damage = function(){
      gordo.x+=2;
      if(gordo.blocks !== true){
        if(gordo.transform === true){
          gordo.image.src = defaultImages.digiHit
        }else{
      gordo.image.src = defaultImages.fattyHit
        }
      this.healthCounter++
      gordo.x +=50;
      gordo.y -= 70;
      electric.x +=50;
      electric.y +=70;
      gordo.draw();
      }
    }

    this.healthCounter = 0;
    this.bar = function(){ 
       if(this.healthCounter >= 3 && this.healthCounter < 6){
      ctx.drawImage(this.image,0, 65, this.width, this.height/5, this.x, this.y, 550, 50)
    }else if(this.healthCounter >= 6 && this.healthCounter < 9){
      ctx.drawImage(this.image,0, 110, this.width, this.height/5, this.x, this.y, 550, 50)
    }else if(this.healthCounter >= 9 && this.healthCounter < 12){
      ctx.drawImage(this.image,0, 150, this.width, this.height/5, this.x, this.y, 550, 50)
    }else if(this.healthCounter >= 12 && this.healthCounter < 15){
      ctx.drawImage(this.image,0, 250, this.width, this.height/5, this.x, this.y, 550, 50)
    }else if(this.healthCounter >= 15){
      ctx.drawImage(this.image,0, 200, this.width, this.height/5, this.x, this.y, 550, 50)
      gameOver()
    }else{
      ctx.drawImage(this.image,0,0, this.width, this.height/5, this.x, this.y, 550, 50 )
    }
  }  
}


function Character(){
  this.transform = false;
  this.blocks = false;
  this.sx = 0
  this.sy = 0
  this.sWidth =  68
  this.sHeight = 100
  this.x = 40 ;
  this.y = 450;
  this.width = 120;
  this.height = 200;
  this.image = new Image();
  this.image.src = defaultImages.idleTrunks
  this.isSprite = false;
  this.draw = function(){
    this.boundaries()
     ctx.drawImage(this.image, this.x,this.y,this.width,this.height)
  }
  this.boundaries = function(){
    if(this.x + this.width > canvas.width-10) {
        this.x = canvas.width-this.width
    } else if(this.x < 10 ) {
        this.x = 10;
        blasted.x = this.width + 10;
    }
    if(this.y + this.height > canvas.height-50) {
      this.y = canvas.height-this.height - 50;
      blasted.y = canvas.height-this.height -50;
    }
     else if(this.y < 10 ) {
      this.y += 5;
      blasted.y += 5;
    }
 }

  this.attack = ()=>{
    if(collides(trunks, gordo)){
       return health2.damage()
    }
  }
}


function Character2(sx, sy, sWidth, sHeight){
  this.transform = false;
  this.blocks = false;
  this.sx = sx;
  this.sy = sy;
  this.sWidth = sWidth;
  this.sHeight = sHeight;
  this.x = 700; 
  this.y = 500;
  this.width = 130;
  this.height = 150;
  this.image = new Image();
  this.image.src = defaultImages.fattyWalks
  this.image.onload = () => {
    this.draw()
  }
  this.draw = () => {
    this.boundaries();
    ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x,this.y,this.width,this.height)
  }
  this.boundaries = function(){
    electric.y = this.y + 50;
    if(this.x +this.width > canvas.width-10) {
        this.x = canvas.width-this.width;
        electric.x = canvas.width-this.width*3.5;
    }
    else if(this.x < 10 ) {
        this.x = 10
    }
    if(this.y + this.height > canvas.height-50) {
      this.y = canvas.height-this.height - 50;
      electric.y = canvas.height-this.height -10;
    }
     else if(this.y < 10 ) {
      this.y = 10
      electric.y = 10
    }   
}

this.attack = ()=>{
  if(collides(trunks, gordo)){
    return health.damage()
  }
 }
}

function SpecialAttack1(){
  this.sx = 0;
  this.sy = 50;
  this.sHeight = 50;
  this.y = 510;
  this.width = 86;
  this.x = trunks.x + trunks.width;
  this.sWidth = 86;
  this.height = 55;
  this.image = new Image()
  this.image.src = defaultImages.trunksDestroys;
  this.draw = () => {
    ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x,this.y,this.width,this.height)
  }

  this.destroyed =()=>{
    if(collides(gordo, blasted)){
      return health2.damage()
    }
  }
}

function SpecialAttack2(){
  this.sx = 0;
  this.sy = 0;
  this.sHeight = 50;
  this.y = gordo.y + 60;
  this.width = 350;
  this.x = gordo.x - this.width;
  this.sWidth = 200//this.width;
  this.height =55;
  this.image = new Image()
  this.image.src = defaultImages.fattyShocks 
  this.draw = () => {
    ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x,this.y,this.width,this.height)
  }

  this.shocked =()=>{
    if(collides(trunks, electric)){
      return health.damage()
    }
  }
}

function collides(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}

function gameOver(){
  ctx.fillStyle = "yellow";
  ctx.font = "bold 100px 'Press Start 2P'"
  if(health.healthCounter > health2.healthCounter){
    ctx.fillText("PLAYER 2 WINS", 150, 300 )
  }else if(health.healthCounter < health2.healthCounter){
    ctx.fillText("PLAYER 1 WINS", 150, 300)
  }
  clearInterval(interval);
  interval = null;
}


function drawCover(){
 // var img = new Image()
  //img.src = images.logo
  img.onload = function(){
      bg.draw()
      //ctx.drawImage(img, 50,100,300,100)
      ctx.font = "bold 13px 'Press Start 2P'"
      ctx.fillText("Presiona la tecla 'Return' para comenzar", 20,300)
  }   
}

function start(){
  frames = 0
  if(!interval) interval = setInterval(update,1000/60)
}

var bg = new Board()
var health = new Health()
var health2 = new Health2()
var trunks = new Character()
var gordo = new Character2(0, 0, 83, 73)
var electric = new SpecialAttack2()
var blasted = new SpecialAttack1()

var iterator = 0;
var iterator1 = 0;
var iterator2 = 0;

function update(){
  frames++;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  bg.draw()
  gordo.draw()
  health.bar()
  health2.bar()
  
  if(keydown.alt){
    trunks.draw()
    trunks.attack()
    if(frames%7===0){
    if(iterator2 === 0){
      if(trunks.transform===true){
      trunks.height = 270;
      trunks.width = 230;
      trunks.image.src = defaultImages.meleeStrip1
      iterator2++
      }
    }else if(iterator2 ===1){
      trunks.height =270;
      trunks.width =230;
      trunks.image.src = defaultImages.meleeStrip2
      iterator2++
    }else if(iterator2 ===2){
      trunks.image.src = defaultImages.meleeStrip3
      trunks.height =270;
      trunks.width =230;
      iterator2++
    }else if(iterator2 ===3){
      trunks.image.src = defaultImages.meleeStrip4
      iterator2=0
    }
  }
}

  if (keydown.left) {
    trunks.x -= 10;
    blasted.x -= 10;
  }

  if (keydown.right) {
    trunks.x += 10;
    blasted.x += 10;
  }

  if (keydown.up){
    trunks.y -= 10;
    blasted.y -= 10;
  }

  if (keydown.down){
    trunks.y += 10;
    blasted.y += 10;
  }

  if (keydown.w){
    gordo.y -= 10;
    electric.y -=10;
  }

  if (keydown.a){
    gordo.x -= 10;
    electric.x -=10;
  }

  if(keydown.d){
    gordo.x += 10;
    electric.x +=10;
  }

  if(keydown.s){
    gordo.y += 10;
    electric.y +=10;
  }
  if(keydown.e){
    if(gordo.transform === true){
      gordo.attack()
      gordo.x -= 50;
    }
    electric.x =gordo.x -5;
  }


  if(keydown.space){
    trunks.blocks=true; 
    trunks.draw()
    if(frames%7 === 0){
    if(iterator1 === 0){
      trunks.image.src = defaultImages.trunksTransform1
      iterator1++
    }else if(iterator1 === 1){
      trunks.width = 203;
      trunks.height = 178;
      trunks.y = 460;
      trunks.image.src = defaultImages.trunksTransform2
      iterator1++
    }else if(iterator1 ===2){
      trunks.width = 250;
      trunks.height = 340;
      trunks.image.src = defaultImages.trunksTransform3
      iterator1++
    }else if(iterator1 ===3){
      trunks.x -= 70;
      trunks.width = 390;
      trunks.height = 580;
      trunks.image.src = defaultImages.trunksTransform4
      iterator1++
    }else if(iterator1 ===4){
      trunks.image.src = defaultImages.trunksTransform5
      iterator1++
    }else if(iterator1 ===5){
      trunks.height = 450;
      trunks.y = 450
      trunks.image.src = defaultImages.trunksTransform6
      iterator1++
    }else if(iterator1===6){
      trunks.height = 300;
      trunks.width = 220;
      trunks.y = 450;
      trunks.x += 45;
      trunks.image.src = defaultImages.trunksTransform7
      iterator1++
    }
  }
}

  if(keydown.q){
    electric.shocked()
    electric.draw()
    if(electric.sy <= 220){
    electric.sy +=55
    }else{
      electric.sy = 0;
    }
  }

  trunks.draw()

    if(keydown.shift){
      blasted.destroyed()
      if(frames %3 === 0){
        if(iterator===0){
          blasted.sx = 0;
          blasted.sy = 50;
          blasted.sHeight = 50;
          blasted.sWidth = 86;
          blasted.height = 55;
          blasted.y = trunks.y+40
          iterator++
        }else if(iterator === 1){
          blasted.sx = 100;
          blasted.sy = 25;
          blasted.sWidth = 125;
          blasted.sHeight = 85;
          blasted.width = 125;
          blasted.height = 85;
          blasted.y = trunks.y+40;
          iterator++
          }else if(iterator === 2){
          blasted.sx = 230;
          blasted.sy = 25;
          blasted.sWidth = 152;
          blasted.sHeight = 90;
          blasted.width = 152;
          blasted.height= 85;
          blasted.y = trunks.y+40;
          iterator++
        }else if(iterator === 3){
          blasted.sx = 384;
          blasted.sy = 0;
          blasted.sWidth = 206;
          blasted.sHeight = 125;
          blasted.width = 206;
          blasted.height= 125;
          blasted.y = trunks.y+10;
          iterator++
        }else if(iterator === 4){
          blasted.sx = 600;
          blasted.sy = 15;
          blasted.sWidth = 260;
          blasted.sHeight = 125;
          blasted.width = 260;
          blasted.height= 125;
          blasted.y = trunks.y+20;//470;
          iterator++
        }else if(iterator === 5){
          blasted.sx = 0;
          blasted.sy = 145;
          blasted.sWidth = 305;
          blasted.sHeight = 145;
          blasted.width = 305;
          blasted.height= 145;
          blasted.y = trunks.y + 10;
          iterator++
        }else if(iterator === 6){
          blasted.sx = 350;
          blasted.sy = 140;
          blasted.sWidth = 330;
          blasted.sHeight = 145;
          blasted.width = 330;
          blasted.height= 145;
          blasted.y = trunks.y +10;
          iterator++
        }else if(iterator === 7){
          blasted.sx = 0;
          blasted.sy = 292;
          blasted.sWidth = 730;
          blasted.sHeight = 165;
          blasted.width = 750;
          blasted.height= 165;
          blasted.y = trunks.y +10;
          iterator++
        }else if(iterator === 8){
          blasted.sx = 0;
          blasted.sy = 450;
          blasted.sWidth = 750;
          blasted.sHeight = 165;
          blasted.width = 800;
          blasted.height= 185;
          blasted.y = trunks.y-5;
          iterator++
        }else if(iterator === 9){
          blasted.sx = 0;
          blasted.sy = 769;
          blasted.sWidth = 750;
          blasted.sHeight = 165;
          blasted.width = 850;
          blasted.height= 200;
          blasted.y = trunks.y-10;
          iterator++
        }else if(iterator ===10){
          blasted.sx = 0;
          blasted.sy = 292;
          blasted.sWidth = 750;
          blasted.sHeight = 165;
          blasted.width = 900;
          blasted.height= 210;
          blasted.y = trunks.y - 15;
          iterator++
        }else if(iterator===11){
          blasted.sx = 0;
          blasted.sy = 450;
          blasted.sWidth = 800;
          blasted.sHeight = 165;
          blasted.width = 950;
          blasted.height= 220;
          blasted.y = trunks.y-25;;
          iterator++
        }else if(iterator ===12){
          blasted.sx = 0;
          blasted.sy = 769;
          blasted.sWidth = 750;
          blasted.sHeight = 165;
          blasted.width = 950;
          blasted.height= 220;
          blasted.y = trunks.y-25;
          iterator++
        }else if(iterator ===13){
          blasted.sx = 0;
          blasted.sy = 292;
          blasted.sWidth = 750;
          blasted.sHeight = 165;
          blasted.width = 900;
          blasted.height= 210;
          blasted.y = trunks.y - 15;
          iterator++
        }else if(iterator===14){
          blasted.sx = 0;
          blasted.sy = 450;
          blasted.sWidth = 800;
          blasted.sHeight = 165;
          blasted.width = 950;
          blasted.height= 220;
          blasted.y = trunks.y - 25;
          iterator++
        }else if(iterator ===15){
          blasted.sx = 0;
          blasted.sy = 769;
          blasted.sWidth = 750;
          blasted.sHeight = 165;
          blasted.width = 950;
          blasted.height= 220;
          blasted.y = trunks.y - 25;
          iterator=0;
        }
      }
      
      blasted.draw()

      }
    }


addEventListener('keydown', function(e){
  e.preventDefault()
  switch(e.keyCode){
    case 65:
    if(gordo.transform === true){
      gordo.image.src = defaultImages.fattyFlies
      gordo.draw()
    }
    case 39:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superForward
    }else{
    trunks.image.src = defaultImages.trunksForward
    }
    trunks.width = 160
    trunks.draw()
    return
    case 37:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superBackwards
    }else{
    trunks.image.src = defaultImages.trunksBackwards
    }
    trunks.width = 160
    trunks.draw()
    return
    case 38:
    //up
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superJumps
    }else{
    trunks.image.src = defaultImages.trunksJumps
    }
    blasted.y -=150;
    trunks.y -= 150;
    return
    case 191:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superBlocks
    }else{
    trunks.image.src = defaultImages.trunksBlocks
    }
    trunks.draw()
    trunks.blocks = true;
    return
    case 16:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superBlasts
    }else{
    trunks.image.src = defaultImages.trunksBlast
    }
    trunks.attack()
    return
    case 49:
    if(gordo.transform === true){
      gordo.image.src = defaultImages.digiBlocks
      gordo.blocks = true;
      gordo.draw()
    }else{
    gordo.image.src = defaultImages.fattyBlocks
    gordo.sx = 0;
    gordo.sy = 0;
    gordo.sWidth = 230;
    gordo.sHeight = 217;
    gordo.draw()
    gordo.blocks = true;
    }
    return
    case 87:
    if(gordo.transform === true){
      gordo.image.src = defaultImages.digiJumps
      gordo.draw()
    }else{
      gordo.image.src = defaultImages.fattyJumps
      gordo.y -=150;
      gordo.sx = 0;
      gordo.sy = 0;
      gordo.sWidth = 65;
      gordo.sHeight = 57;
      gordo.draw()
    }
    return
    case 83:
    if(gordo.transform === true){
      gordo.image.src = defaultImages.digiFalls
      gordo.draw()
    }else{
    gordo.image.src = defaultImages.fattyFalls
    gordo.sx = 0;
    gordo.sy = 0;
    gordo.sWidth = 65;
    gordo.sHeight = 57;
    gordo.draw()
    }
    return
    case 81:
    if(gordo.transform === true){
      gordo.image.src = defaultImages.digiShock
      gordo.sHeight = 300
      gordo.draw()
    }else{
    gordo.image.src = defaultImages.fattyAttacks
    gordo.sx = 0;
    gordo.sy = 0;
    gordo.sWidth = 83;
    gordo.sHeight = 73;
    gordo.draw()
    gordo.attack()
    }
    return
    case 88:
    gordo.sWidth = 115;
    gordo.sHeight =115;
    gordo.width = 200;
    gordo.height = 230;
    gordo.x = 670;
    gordo.image.src = defaultImages.transformBall
    gordo.transform = true;
    return
    case 68:
    if(gordo.transform===true){
      gordo.image.src = defaultImages.digiBack
      gordo.draw()
    }
    return
    case 69:
    if(gordo.transform === true){
    gordo.image.src= defaultImages.digiDash
    gordo.sWidth = 300
    gordo.width = 260;
    gordo.draw()
    }
  }
})

addEventListener('keyup', function(e){
  switch(e.keyCode){
    case 39:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superStands
    }else{
    trunks.image.src = defaultImages.idleTrunks
    }
    trunks.width = 120
    trunks.draw()
    return
    case 37:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superStands
    }else{
    trunks.image.src = defaultImages.idleTrunks
    }
    trunks.width = 120
    trunks.draw()
    return
    case 191:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superStands
    }else{
    trunks.image.src = defaultImages.idleTrunks
    }
    trunks.draw()
    trunks.blocks = false;
    return
    case 38:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superStands
    }else{
    trunks.image.src = defaultImages.idleTrunks
    }
    trunks.draw()
    return
    case 18:
    if(trunks.transform === true){
      trunks.height = 200;
      trunks.width = 120;
      trunks.image.src = defaultImages.superStands
    }else{
    trunks.image.src = defaultImages.idleTrunks
    }
    trunks.width = 120
    trunks.draw()
    return
    case 49:
    if(gordo.transform === true){
      gordo.image.src = defaultImages.fatMon
      gordo.blocks = false;
      gordo.draw()
    }else{
    gordo.image.src = defaultImages.fattyWalks
    gordo.sWidth = 83;
    gordo.sHeight = 73;
    gordo.draw()
    gordo.blocks = false;
    }
    return
    case 87:
    if(gordo.transform === true){
      gordo.sWidth = 200;
      gordo.sHeight = 250;
      gordo.image.src = defaultImages.fatMon
      gordo.draw()
    }else{
    gordo.image.src = defaultImages.fattyWalks
    gordo.sWidth = 83;
    gordo.sHeight = 73;
    gordo.draw()
    }
    return
    case 83:
    if(gordo.transform === true){
      gordo.image.src = defaultImages.fatMon
      gordo.draw()
    }else{
    gordo.image.src = defaultImages.fattyWalks
    gordo.sWidth = 83;
    gordo.sHeight = 73;
    gordo.draw()
    }
    case 81:
    if(gordo.transform === true){
      gordo.image.src = defaultImages.fatMon
      gordo.draw()
    }else{
    gordo.image.src = defaultImages.fattyWalks
    gordo.sWidth = 83;
    gordo.sHeight = 73;
    gordo.draw()
    }
    return
    case 16:
    if(trunks.transform === true){
      trunks.image.src = defaultImages.superStands
    }else{
    trunks.image.src = defaultImages.idleTrunks
    }
    trunks.draw()
    return
    case 88:
    gordo.sWidth = 200;
    gordo.sHeight = 250;
    gordo.image.src = defaultImages.fatMon
    return
    case 32:
    trunks.blocks= false;
    trunks.transform = true;
    trunks.width=120;
    trunks.height = 200;
    trunks.y = 450;
    trunks.x += 40;
    trunks.image.src = defaultImages.superStands
  }
})

// addEventListener('keyup',function(e){
//   switch(e.keyCode){
//       case 13:
//           return start()
//       default:
//           return
//   }
// } )

start()
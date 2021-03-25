var database;
var gameState = 0;
var playerCount = 0;
var player, game, form;
var allPlayers
var boat, boat2, boat3, boat4;
var yacht;
var carimg, carimg2, carimg3, carimgyou;
var track;



function preload(){
  carimg = loadImage("images/supergoodcarpainting1.png")
  carimg2 = loadImage("images/supergoodcarpainting2.png")
  carimg3 = loadImage("images/supergoodcarpainting3.png")
  carimg4 = loadImage("images/supergoodcarpaintingthatbelongstoyou.png")
  track = loadImage("images/track.jpg")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth - 20, windowHeight - 50);
  game = new Game()
  game.getState();
  game.start();
}


function draw(){
  background("white");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
      game.end();
  }
    drawSprites();
  
}
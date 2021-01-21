var gameState = 0;
var playerCount = 0;
var database , form,player , game;
var allPlayers;
var cars , car1,car2,car3,car4;


function setup(){
 createCanvas(displayWidth-30 , displayHeight-30);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
 if(playerCount===4){

  game.update(1)

 }
 if(gameState===1){

  game.play();
 }
  
    
  
}


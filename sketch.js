var database;
var gameState=0;

var playerCount;
var game , player , form;
var allPlayers;
var car1,car2,car3,car4;
var cars;

var trackimg, car1img,car2img,car3img,car4img, bgimg;
var FinishedCars;

function preload(){
    car1img = loadImage("images/car1.png")
    car2img = loadImage("images/car2.png")
    car3img = loadImage("images/car3.png")
    car4img = loadImage("images/car4.png")
    trackimg = loadImage("images/track.jpg")
    bgimg= loadImage("images/bgstart.webp")
}

function setup(){
    createCanvas(windowWidth-40,windowHeight-130);
    
    database= firebase.database()

    game= new Game()
    game.getState()
    game.startGame()
    

    // var dbref = database.ref("position")
    // dbref.on("value", readposition)
}

function draw(){
    background("white");

    if(gameState===0){
        image(bgimg,0,0,width,height)
    }

    if(playerCount===4 && gameState===0){
     game.update(1)
    }

    if(gameState===1)
    {
        game.play();
    }

    if(gameState===2)
    {
        game.end();
        if(FinishedCars===4){
            game.displayRank()
        }
    }
}

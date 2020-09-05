const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var rain = [];
var thunder;
var cloud1,cloud2,cloud3,cloud4,cloud5,cloud1Img,road,roadImgroad2,road3;
var person,personImg;

function preload(){
    cloud1Img = loadImage("images/cloud.png");
    cloud2Img = loadImage("images/cloud.png");
    cloud3Img = loadImage("images/cloud.png");
    cloud4Img = loadImage("images/cloud.png");  
    cloud5Img = loadImage("images/cloud.png");
    roadImg = loadImage("images/road.jpg");
    personImg = loadImage("images/bruceholdingumbrellacolored pic (1).png")


}

function setup(){
    createCanvas(1200, 800);
   
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    cloud1 = createSprite(100,10.20,20);
    cloud1.addImage("drk",cloud1Img);

    cloud2 = createSprite(300,10.20,20);
    cloud2.addImage("drk",cloud1Img);

    cloud3 = createSprite(900,10.20,20);
    cloud3.addImage("drk",cloud1Img);

    cloud4 = createSprite(1000,10.20,20);
    cloud4.addImage("drk",cloud1Img);

    
    road = createSprite(600,600.20,20);
    road.addImage("road",roadImg);

    road2 = createSprite(200,600.20,20);
    road2.addImage("road",roadImg);

    road3 = createSprite(1000,600.20,20);
    road3.addImage("road",roadImg);

    person = createSprite(600,400,20,20);
    person.addImage("person",personImg);


        
for(i = 0;i <= 50 ; i++){
    var drops =     new Rain(random(1,1200),random(1,399),10);
    rain.push(drops);



            
        }


}

function draw(){

   
    background(0);


    




drawSprites();








    for(i = 0;i <= 50;i++){
        rain[i].display();
        rain[i].resetDrops();
    }

    
}   





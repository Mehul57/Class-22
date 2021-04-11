 const World = Matter.World
 const Engine= Matter.Engine
 const Bodies=Matter.Bodies 
 
 var engine,world,ground
 var ball
 
 
 
 
 
 function setup() {
  createCanvas(800,400);
 engine= Engine.create()
 world= engine.world
 var ground_options={
   isStatic:true
 }
 ground=Bodies.rectangle(400,380,800,20,ground_options)
 var ball_options={
   restituition:0.5
 }
 World.add(world,ground)
 ball=Bodies.circle(400,100,20,ball_options)
 World.add(world,ball)
}

function draw() {
  background("black"); 
  Engine.update(engine) 
   fill("red")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20)

  console.log(ground)
  drawSprites();
}
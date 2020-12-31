const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions=[]
var particles = []
var plinkos = []
var divisionHeight =300
var score = 0
function setup() {
  createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(300,780,1000,30);
  for (var k = 0; k <=width; k = k + 80) { 
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); 
  } 
  
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,175));
   }

   for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
   }

   for (var j = 50; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,375));
   }

}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display()
  
  for (var i = 0; i <plinkos.length; i++) { 
    plinkos[i].display()
   }
   for (var j = 0; j <divisions.length; j++) { 
    divisions[j].display()
   }
   for (var k = 0; k <particles.length; k++) { 
    particles[k].display()
   }

  drawSprites();
}
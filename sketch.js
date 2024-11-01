let budale=[]
let brojSegmenata=100
let glava
let rebroVelicina
let razmakRebara=20
let glavaSlika
let glavaFi=0
let brzina=2.5
let glavaVelicina
function preload(){
  rebro=loadImage("src/rebro.png")
  glavaSlika=loadImage("src/glava1.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  razmakRebara=width*height/80000
  rebroVelicina=razmakRebara*3;
  glavaVelicina=rebroVelicina;

  let xLok=width/4
  for(let i=0;i<brojSegmenata;i++){
    if(razmakRebara*(-i/10+10)/12<1){
      print(razmakRebara*(-i/10+10)/12)
      brojSegmenata=i
      break
      
    }
    budale.push(new Budala(i));
    budale[i].konstruktorNormalan();
    
    xLok+=budale[i].razmakRebarova
    
    budale[i].promeniPocetnuLokaciju(xLok,height/2)
  }
  
  glava=new createVector(width/4,height/2)
  
  strokeWeight(3)
  stroke(255);
  
}
function mrdajGlavu(){
  let mouse=createVector(mouseX,mouseY);
  dir=p5.Vector.sub(mouse,glava)  
  dir.normalize();
  dir.mult(brzina)
  if(dist(glava.x+dir.x,glava.y+dir.y,mouseX,mouseY)>glavaVelicina)
      glava.add(dir);
  
  glavaFi=dir.heading()
}

function crtajGlavu(){
  push()
      translate(glava.x,glava.y)
      rotate(glavaFi+PI/2)
      image(glavaSlika,-glavaVelicina,-glavaVelicina*1.5,glavaVelicina*2,glavaVelicina*2)
      
    pop()
}

function draw() {
  background(0);
  
  crtajGlavu();
  mrdajGlavu();
  let prosli=createVector(glava.x,glava.y)
  for(let i=0;i<brojSegmenata;i++){
    budale[i].crtajSegment(prosli);
    budale[i].pratiProslog(prosli)
    prosli.x=budale[i].loc.x
    prosli.y=budale[i].loc.y
    
  }
}
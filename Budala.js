class Budala{
  constructor(i){
    this.loc
    this.fi
    this.index=i
    
    this.indexFaktor=0
    this.miniRebraVel=0
    this.razmakRebarova=0
  }
  konstruktorNormalan(){
    this.indexFaktor=-this.index/10+10
    this.miniRebraVel=rebroVelicina*this.indexFaktor/12
    this.razmakRebarova=razmakRebara*this.indexFaktor/12
  }
  promeniPocetnuLokaciju(x,y){
    this.loc=new p5.Vector(x,y)
  }
  crtajSegment(prosli){
    stroke(255)

    line(this.loc.x,this.loc.y,prosli.x,prosli.y)
    push()
      translate(this.loc.x,this.loc.y)
      rotate(this.fi+PI/2)
      image(rebro,-this.miniRebraVel,0,this.miniRebraVel*2,this.miniRebraVel/3)
      
    pop()
    
  }
  
  pratiProslog(prosli){
    let dir=p5.Vector.sub(prosli,this.loc)  
    dir.normalize();
    dir.mult(2)
    if(dist(this.loc.x+dir.x,this.loc.y+dir.y,prosli.x,prosli.y)>this.razmakRebarova)
      this.loc.add(dir);
    
    this.fi=dir.heading()
  }
}
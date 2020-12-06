class Drop{
    constructor(x,y){
      var options={
        isStatic:false,
        friction:0.1
      }
      this.drop=Bodies.circle(x,y,10,options);
      World.add(world,this.drop);
      Matter.Body.setMass(this.drop,0.00000009)
      this.x=x;
      this.y=x;
    }
    disp(){
      if(this.drop.position.y>=height){
        Matter.Body.setPosition(this.drop, {x:random(0,500),y:random(-500,0)})
      }
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(this.drop.position.x,this.drop.position.y,5,5);
    }
  }
class Dog {

    constructor(x,y,width,height){
        //properties of body
    var options = {
        isStatic:true,
        friction : 0.3,
        density : 1.0
    }
    
    
    this.w = width;
    this.h = height;
    this.image = loadImage("images/dog1.png");
    
    
    
    }
    
    //function of body
    display(){
      
        
        push();
        
        
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop() 
        if(keyCode === UP_ARROW){

            this.image = loadImage("images/dog.png"); 
    }else{
        this.image = loadImage("images/dog1.png");
    }
    }
    
    }
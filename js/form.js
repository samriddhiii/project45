class Form{
    constructor(){
        
        this.title = createElement("h2")
        this.input = createInput("name")
        this.button = createButton("play")
        this.reset = createButton("reset")
        this.greeting = createElement("h3")
    }

hideForm()
{
    this.input.hide()
    this.title.hide()
    this.button.hide()
    this.greeting.hide()
    
}

    display(){
         console.log("inside display")
       
        this.title.position(width/2,100)
        this.title.html("Car Racing Game")
        
         this.input.position(width/2,160)

         this.button.position(width/2 + 35,190)
         let col = color(255,255,0)
         this.button.style('background-color',col)
         this.button.size(100, 30);

         this.reset.position(width-60, height-20)

         this.button.mousePressed(()=>{
             this.input.hide()
             this.button.hide()

             var name = this.input.value();

             this.greeting.html("hello " + name);
             this.greeting.position(width/2+30,160)

             player.name= name;
             playerCount= playerCount + 1
             
             player.index=playerCount;

            
             player.updateCount(playerCount)
             player.update()
             
         })

         this.reset.mousePressed(()=>{

          player.updateCount(0)
          Player.updateFinishedCars(0)
          game.update(0)

          database.ref("Players").remove()
         })


    }
}
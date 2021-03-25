class Form{
    constructor(){
        this.title = createElement("h2");
        this.button = createButton("START");
        this.greeting = createElement("h3");
        this.input = createInput("Pinacle Name");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){
        
        this.title.html("«Pinacle Racers»");
        this.title.position(width/2 - 20, 100);
        
        this.input.position(width/2 - 20, 200);
        
        this.button.position(width/2 + 30,250);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.position(width/2 - 20,100);
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome, Pinacle Racer "+ player.name + ", to the pinacle road. Here you will race payers from around the world. Work hard, and rise to the top... of Pinacle Road!");
            this.greeting.position(width/2 - 20,200);
        })
    }
}
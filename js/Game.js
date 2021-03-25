class Game{
    constructor(){

    }

    getState(){
        database.ref("gameState").on("value", (data)=>{
            gameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }



    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount()
            }
            form = new Form();
            form.display();

        }
        boat = createSprite(width/2 + 150,height/2)
        boat2 = createSprite(width/4 + 150,height/2)
        boat3 = createSprite(width* 0.75+ 150 ,height/2)
        boat4 = createSprite(width* 0.25 - 200,height/2)
        yacht = [boat, boat2, boat3, boat4];
        boat.addImage(carimg)
        boat.scale = 0.25
        boat2.addImage(carimg2)
        boat2.scale = 0.25
        boat3.addImage(carimg3)
        boat3.scale = 0.25
        boat4.addImage(carimg4)
        boat4.scale = 0.25
        boat.visible = false
        boat2.visible = false
        boat4.visible = false
        boat3.visible = false
    }


    play(){
        form.hide();
        textSize(30);
        text("Pinacle Road Has Begun!", 250, 100);
        Player.getPlayerInfo();
        boat.visible = true;
        boat2.visible = true;
        boat3.visible = true;
        boat4.visible = true;
        if(allPlayers!=undefined){
            background("peach")
            image(track,0,-4*height,width,height*5)
            var index = 0;
            var x = 200;
            var y;
            for(var plr in allPlayers){
                index ++;
                x += 200;
                y = displayHeight-allPlayers[plr].distance
                yacht[index - 1].x = x;
                yacht[index - 1].y = y;
                if(index === player.index){
                    yacht[index - 1].shapeColor = "red";
                    camera.position.x = width/2;
                    camera.position.y = yacht[index - 1].y;
                }
            }
        }
        if(keyDown(UP_ARROW) && player.index!=null){
            player.distance += 50
            player.update()
        }
        if(player.distance >= 3500){
            gameState = 2;
        }
    }

    end(){
        console.log("This is an announcment to all players. The game has ended. Thank you for playing pinnacle Road. This is reward: # yy%y83h^3hjshdjka987#")
    }


}
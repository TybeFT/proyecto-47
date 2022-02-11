class Game {
    constructor() {

    }

    display() {
        background("purple");

        // Pantalla para cuestionario
        // backScreen = createSprite(displayWidth / 2, displayHeight / 2 - 50, 1920, 1080);
        // backScreen.shapeColor = "blue";
        // backScreen.visible = true;
        
        // Funcion para asignar si se ven los muros o no con el argumento "state"
        function Walls(state) {
            if (state == "on") {
                // Muros laberinto createWalls(sprite,x,y,width,height);
                createWalls(wall1,60,20,5,50);

            } else if (state !== "on") {
                state = "off";
            }
        }

        // Camara
        camera.position.x = player.position.x;
        camera.position.y = player.position.y;

        "Colision de paredes (opcion1)"
        // player.collide(wallsGroup);

        "Sistema de vidas:"

        // estado de juego del player para establecer si esta vivo o muerto
        var playerState = "playing"

        if (player.isTouching(wallsGroup)) {
            player.collide(wallsGroup);
            lifes = lifes - 1;
        }

        if (lifes <= 0) {
            playerState = "die";
            lifes = 10;
        }

        if (playerState == "die") {
            player.x = 20;
            player.y = 30;
        }

        if (lifes == 10) {
            playerState = "playing";
        }


        // Muros en ON (prendidos)
        Walls("off");

        // // Controles personaje
        if (keyDown("LEFT")) {
            player.x = player.x - 30;
        } else if (keyDown("RIGHT")) {
            player.x = player.x + 30;
        } else if (keyDown("UP")) {
            player.y = player.y - 30;
        } else if (keyDown("DOWN")) {
            player.y = player.y + 30;
        }

        // Controles secundarios (opcional)
        if (keyDown("A")) {
            player.x = player.x - 3;
        } else if (keyDown("D")) {
            player.x = player.x + 3;
        } else if (keyDown("W")) {
            player.y = player.y - 3;
        } else if (keyDown("S")) {
            player.y = player.y + 3;
        }


        if (player.isTouching(npc1)) {
            gameState = "question1";
        }

        fill("white");
        textSize(18);
        text("Vida // " + lifes + " \\\\", 320, 18);

    }
}
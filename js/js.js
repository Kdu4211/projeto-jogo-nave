function start() {

    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class= 'anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class= 'anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2' ></div>");
    $("#fundoGame").append("<div id='amigo' class= 'anima3'></div>");
   

    var jogo = {}
    var velocidade = 5
    var posicaoY = parseInt(Math.random() * 334)

    var TECLA = {
        W: 87,
        S: 83,
        D: 68
        }

        jogo.presionou = [];
        
        $(document).keydown(function(e){
            jogo.presionou[e.which] = true;
        });

        $(document).keyup(function(e){
            jogo.presionou[e.which] = false;
        })
    
    jogo.timer = setIterval(loop, 30);

    function loop() {
        
        movefundo();
        movejogador();
        moveinimigo1();
        moveinimigo2();
        moveamigo();
    }




}


var fotoJoao = document.querySelector(".landing-photo1");
var fotoMiguel = document.querySelector(".landing-photo2");
var mensagem = document.querySelector(".message"); /* local onde a mensagem está */

const decideButton = document.querySelector(".decide-btn"); 
const resetButton = document.querySelector(".reset-btn"); 
var mensagemResultado = "O ACASO (DESTINO) ESCOLHEU<br>E QUEM ESTÁ CERTO DESSA<br>VEZ É:<br><br>"; /* mensagem de resultado */

document.querySelector(".action").removeChild(resetButton);


function decide (){

	var randomNumber1 = Math.floor(Math.random() * 100 + 1);  /* numero do joao */
    var randomNumber2 = Math.floor(Math.random() * 100 + 1);  /* numero do miguel */

    document.querySelector(".action").removeChild(decideButton);

    var vencedor = "";

    if (randomNumber1 > randomNumber2){                    /* joao paulo vencendo */
    	vencedor = "João";
    	fotoJoao.setAttribute("src", "images/joaopaulo-feliz.png");
    	fotoMiguel.setAttribute("src", "images/miguel-triste.png");
    	mensagem.innerHTML = mensagemResultado + vencedor + "<br>";
    }

    else if (randomNumber2 > randomNumber1){              /* miguel vencendo */
    	vencedor = "Miguel";
        fotoJoao.setAttribute("src", "images/joaopaulo-triste.png"); 
        fotoMiguel.setAttribute("src", "images/miguel-feliz.png");
        mensagem.innerHTML = mensagemResultado + vencedor;

    }

    else{            /* empate */
    	fotoJoao.setAttribute("src", "images/joaopaulo-triste.png"); 
    	fotoMiguel.setAttribute("src", "images/miguel-triste.png");
    	mensagem.innerHTML = "É UM EMPATE! O DESTINO QUER QUE AMBOS SE FODAM";
    }
    
    document.querySelector(".action").appendChild(resetButton);
    document.querySelector(".reset-btn").style.visibility = "visible";


}

function reset(){
      
      document.querySelector(".action").removeChild(resetButton);
      document.querySelector(".action").appendChild(decideButton);
      fotoJoao.setAttribute("src", "images/joaopaulo.png");
      fotoMiguel.setAttribute("src", "images/miguel.jpg");
      mensagem.innerHTML = "<h2>Deixem o acaso(ou o destino)<br>decidir quem tem razão</h2>"; 
}
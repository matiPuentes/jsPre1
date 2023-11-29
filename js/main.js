let vidaScorpion = 100;
let vidaSubZero = 100;
let round = 0;
let golpeSubZero = Math.ceil(Math.random() * 20);
let golpeScorpion = Math.ceil(Math.random() * 20);
function pelea(){
    if (golpeScorpion === golpeSubZero){
        console.log("Esquivado.");
    }
    else if (golpeSubZero > golpeScorpion){
        vidaScorpion -= golpeSubZero;
        console.log(`SubZero golpea con una fuerza de ${golpeSubZero}.`);
        console.log(`La vida de Scorpion baja a ${vidaScorpion} puntos.`);
    }
    else{
        vidaSubZero -= golpeScorpion;
        console.log(`Scorpion golpea con una fuerza de ${golpeScorpion}.`);
        console.log(`La vida de SubZero baja a ${vidaSubZero} puntos.`);
    }
}

while((vidaScorpion > 0) && (vidaSubZero > 0)) {
    round += 1;

    if (round === 1){
        console.log("Round 1");
        console.log("Fight!");
        console.log("-----------------------------------");
    }else{
        console.log(" ");
        console.log(`Round ${round}`);
    }
    pelea();  
    }
    console.log("--------------------------------------");
    console.log("El ganador es:");

    if (vidaScorpion <= 0){
        console.log("SubZero!");
        }
        else{
            console.log("Scorpion!");
        }
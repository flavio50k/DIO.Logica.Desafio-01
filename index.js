const prompt = require("prompt-sync")();

console.log("Bem vindo ao Nível de Heróis!")

let start = true;

while (start == true){
    let name = prompt("Digite o nome do Herói: ");
    let xp = parseInt(prompt("Digite o XP do Herói: "), 10);
    let level = ""

    if(xp < 1000){
        level = "Ferro"
    } else if (xp <= 2000) {
        level = "Bronze";
    } else if (xp <= 5000) {
        level = "Prata";
    } else if (xp <= 7000) {
        level = "Ouro";
    } else if (xp <= 8000) {
        level = "Platina";
    } else if (xp <= 9000) {
        level = "Ascendente";
    } else if (xp <= 10000) {
        level = "Imortal";
    } else {
        level = "Radiante";
    }

    console.log("O nome do Herói é " + name + " e seu Nível XP é " + level + "!")
    
    let question = prompt("Deseja continuar? (S) ou (N)?: ")
    
    if(question == "S" || question == "s"){
        start = true;
    }else{
        start = false;
        console.log("Obrigado por participar!")
    }
}

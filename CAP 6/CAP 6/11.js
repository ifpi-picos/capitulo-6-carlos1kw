function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}
function verificarChute(chute, numeroSecreto) {
    if (chute < numeroSecreto){
        return "O número secreto é maior!";
    }else if (chute > numeroSecreto){
        return "O número secreto é menor!";
    }else{
        return "correto! Você acertou!";
    }
}
function jogarjogoDeAdivinhacao() {
    const numeroSecreto = gerarNumeroAleatorio() 
    let tentativasRestantes = 10;

    console.log("Bem vindo ao jogo de adivinhação!");
    console.log("Tente adivinhar um número secreto entre 1 e 100.");
    console.log(`Você tem ${tentativasRestantes} tentativas.`);

    while (tentativasRestantes > 0) {
        const chute = parseInt(prompt("Digite o seu chute:"));

        if (isNaN(chute) || chute < 1 || chute > 100);{ 
        console.log("Por favor, insira um número válido entre 1 e 100.")
        continue;
    }
    const resultado = verificarChute(chute, numeroSecreto)
    console.log(resultado)
    if (resultado === "correto! Você acertou!"){
        break;
    }
    tentativasRestantes--;
    if (tentativasRestantes > 0){
        console.log(`Você ainda tem ${tentativasRestantes} tentativa(s)`);
    }else{ 
        console.log( `im de jogo! O número secreto era ${numeroSecreto}.`);
    }
}
}
jogarjogoDeAdivinhacao()
let globalVar = "Eu sou global!";

function minhaFuncao(){

    let localVar = "Eu sou local!";
console.log("Dentro da função:");
console.log(globalVar);
console.log(localVar);
}

minhaFuncao();

console.log("\nFora da função:");
console.log(globalVar);
try {
    console.log(localVar);
}catch (error) {
    console.log(`Erro: ${error.message}`);
}
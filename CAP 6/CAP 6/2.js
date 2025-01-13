// Exemplos de funções:

function estaEndividado(receita, gastos){
    if (receita > gastos) {
        return 'Está no AZUL'
    }else{
        return 'Está no VERMELHO'
    }
    
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(10000, 2000)

console.log(maria)
console.log(joao)

/*arrow*/

function maçã(){}
    const digaMeuNome = (nome1) => {
        console.log("carlos")
    }

    digaMeuNome()
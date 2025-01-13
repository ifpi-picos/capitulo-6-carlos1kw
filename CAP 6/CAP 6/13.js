function realParaDolar(real, cotacaoDolar){ 
    return real * cotacaoDolar
}
let valorReal = 7.00;
let cotacao = 6.14;

let total = realParaDolar(valorReal, cotacao)
alert(`O valor em real é R${valorReal} o valor em dólar U$ é ${total}`);
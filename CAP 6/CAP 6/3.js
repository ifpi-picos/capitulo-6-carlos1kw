function calcularMedia(num1, num2, num3,)
{
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);


const media = (num1 + num2 + num3) / 3;
return media;
}
  
const resultado = calcularMedia(30, 12, 20);
console.log("A média é:", resultado);
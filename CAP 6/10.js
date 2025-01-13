function executarMedia() {
    const numero1 = Number(prompt("Digite o primeiro número:"))
    const numero2 = Number(prompt("Digite o segundo  número:"))
    const media = (numero1 + numero2) /2

    console.log(`A média dos números ${numero1} e ${numero2} é: ${media}`)
}
executarMedia()
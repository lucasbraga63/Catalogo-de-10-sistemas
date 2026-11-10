const nomeProduto = document.getElementById('nomeProduto')
const valorUnitario = document.getElementById('valorUnitario')
const quantidadeCompra = document.getElementById('quantidadeCompra')
const descontos = document.getElementById('desconto')
const container = document.querySelector('.Resultado')

function CalcularTudo() {
    const precoTotal = Number(valorUnitario.value) * Number(quantidadeCompra.value)
    const percentual = (precoTotal * Number(descontos.value)) / 100

    const precoFinal = precoTotal - percentual
    const quantoEconomiza = precoTotal - precoFinal

    return { precoFinal, quantoEconomiza }
}

function ExibirTudo() {
     
    const { precoFinal, quantoEconomiza } = CalcularTudo()

    container.innerHTML = `
   <p>Nome do produto: ${nomeProduto.value}</p>
   <p>A pagar: ${precoFinal}</p>
   <p>Quanto economizou: ${quantoEconomiza}</p>
   `
}
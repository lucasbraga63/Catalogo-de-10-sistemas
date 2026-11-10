const containerResultados = document.querySelector('.Resultado')
const limparBTN = document.getElementById('limparResultados')
const alerta = document.getElementById('alerta')

function mostrar() {
    const numeroEscolhido = Number(document.getElementById('numeroEscolhido').value)

    if (numeroEscolhido < 1 || numeroEscolhido > 20) {
        alerta.textContent = 'O numero deve ser de 1 a 20'
        setTimeout(() => {
            alerta.textContent = ""
        }, 2000)
        return
    }
    let indiceAtual = 1
    while (indiceAtual <= 9) {
        indiceAtual++
        let resultado = numeroEscolhido * indiceAtual
        containerResultados.innerHTML += `
    <div class="card">
    <span> ${numeroEscolhido} X ${indiceAtual} = ${resultado}</span>
    </div>
    `
    }
}

limparBTN.addEventListener('click', () => {
    containerResultados.innerHTML = ""
})

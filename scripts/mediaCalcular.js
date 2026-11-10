const nome = document.getElementById('nomeAluno')
const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')

function ExibirNota() {
    const container = document.querySelector('.Resultado')
    const alerta = document.getElementById('alerta')

    if (Number(nota1.value) < 0 || Number(nota1.value) > 10 || Number(nota2.value) < 0 || Number(nota2.value) > 10 || Number(nota3.value) < 0 || Number(nota3.value) > 10) {
        alerta.textContent = "As notas não podem ser menor que 0 nem maior que 10"
        setTimeout(() => {
            alerta.textContent = ""
        }, 2000)
        return
    }

    const media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3


    let situacao = ""
    if (media >= 7) {
        situacao = "Aprovado"
    } else if (media < 5) {
        situacao = "Reprovado"
    } else {
        situacao = "Recuperacao"
    }


    let nomeAluno = nome.value

    container.innerHTML += `
    <p>Nome do aluno: ${nomeAluno}</p>
    <span>Média: ${media.toFixed(1)}</span>
    <p>Situação: ${situacao}</p>
    `
}
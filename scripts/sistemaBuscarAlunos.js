const alunos = [
    {
        nome: "João Costa de Prado",
        idade: 17,
        curso: "DS",
        matricula: 1
    }
]

function ExibindoTudo(listaAlunos = alunos) {

    const containerAlunos = document.querySelector('.alunos')

    containerAlunos.innerHTML = '';

    listaAlunos.forEach(aluno => {
        containerAlunos.innerHTML += `
       <div class="card">
            <h3>${aluno.nome}</h3>
            <span>${aluno.idade}</span>
            <p>${aluno.curso}</p>
            <span>${aluno.matricula}</span>
        </div>
      `
    });

}

function GerandoMatricula() {
    const matriculas = alunos.map(aluno => aluno.matricula)

    const ultimaMatricula = Math.max(...matriculas) + 1

    return ultimaMatricula;
}

function CadastrandoAluno() {
    const nomeAluno = document.getElementById('nomeAluno')
    const idadeAluno = document.getElementById('idadeAluno')
    const cursoSelect = document.getElementById('curso')
    const matricula = document.getElementById('matricula')

    const novaMatricula = GerandoMatricula()
    matricula.value = `Matricula: ${novaMatricula}`

    const novoAluno =
    {
        nome: nomeAluno.value,
        idade: Number(idadeAluno.value),
        curso: cursoSelect.value,
        matricula: novaMatricula
    }


    alunos.push(novoAluno)

    ExibindoTudo()

}

function buscarAluno() {
    const inputPesquisa = document.getElementById('inputPesquisa')
    const selectCursoFiltro = document.getElementById('cursoFiltro')

    inputPesquisa.addEventListener('input', () => {
        const alunoProcurado = alunos.filter(aluno => aluno.nome.toLowerCase().includes(inputPesquisa.value.toLowerCase()))
        ExibindoTudo(alunoProcurado)
    })

    selectCursoFiltro.addEventListener('change', () => {

        if (selectCursoFiltro.value == 'todos') {
            ExibindoTudo()
        } else {
            const cursoFiltrado = alunos.filter(aluno => aluno.curso.toLowerCase().includes(selectCursoFiltro.value.toLowerCase()))
            ExibindoTudo(cursoFiltrado)
        }
    })
}

buscarAluno()
ExibindoTudo()
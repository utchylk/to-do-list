let tarefas = []
let texto = document.querySelector('#texto')
let lista = document.querySelector('select#adicionados')
let itens = document.getElementById('itens')

function isText(input) {
    return typeof input === 'string' && input.trim() !== '' && isNaN(input);
}

function inLista(t, l) {
    return l.indexOf(t) !== -1;
}

function adicionar() {
    if (isText(texto.value) && !inLista(texto.value, tarefas)) {
        tarefas.push(texto.value)
        let item = document.createElement('option')
        item.text = `${texto.value}`
        lista.appendChild(item)
        texto.value = ''
    } else {
        window.alert('Texto inválido ou já encontrado na lista.')
        }
}

function finalizar() {
    if (tarefas.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        itens.innerHTML = ''
        itens.innerHTML += `<p>Ao todo temos ${tarefas.length} tarefas</p>`
        itens.innerHTML += '<p>Tarefas</p>'
        itens.innerHTML += '<ul>'
        for (let tarefa of tarefas) {
            res.innerHTML += `<li>${tarefa}</li>`
        }
        res.innerHTML += '</ul>'
    }
}

function apagar() {

}
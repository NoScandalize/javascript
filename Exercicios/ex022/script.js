var num = document.getElementById('txtnum')
var mem = []
var c = 0

function adicionar() {
    var n = Number(num.value)
    var ver = mem.indexOf(n)
    if (num.value.length == 0 || num.value <= 0 || num.value > 100 || ver >= 0) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        mem.push(n)
        var item = document.createElement('option')
        item.text = `Valor ${mem[c]} adicionado.`
        res.appendChild(item)
        res.style.width = '150px'
        c++
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (mem.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var end = document.getElementById('end')
        var p = mem.length
        var maior = mem[0]
        var menor = mem[0]
        var soma = 0
        for (var pos in mem) {
            soma += mem[pos]
            if (mem[pos] > maior) 
                maior = mem[pos]
            if (mem[pos] < menor) 
                menor = mem[pos]
        }
        end.innerHTML = ''
        end.innerHTML += `<p>Ao todo, temos ${p} números cadastrados</p>
        <p>O maior valor informado foi ${maior}.<p>
        <p>O menor valor informado foi ${menor}.<p>
        <p>Somando todos os valores, temos ${soma}.<p>
        <p>A média dos valores digitados é ${soma/p}.<p>`
    }
}
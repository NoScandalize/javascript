function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
        if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
            res.innerHTML = `Impossível contar! Preencha todos do valores.`
        } else {
            res.innerHTML = `Contando: <br>`
            var i = Number(ini.value)
            var f = Number(fim.value)
            var p = Number(pas.value)
            if (p <= 0) {
                alert('Passo inválido! Considerando PASSO = 1!')
                p = 1
            }
            if (i < f) {
                for (var c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} &#x1F449`
                }
            } else {
                for (c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} &#x1F449`
                }
            }
            res.innerHTML += ` &#x1F3C1`
        }
}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.padding= '10px'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 3) {
                img.setAttribute('src', 'fotobb.jpg')
            } else if (idade >= 3 && idade < 5) {
                img.setAttribute('src', 'fotobbj-m.jpg')
            } else if (idade >= 5 && idade < 10 ) {
                img.setAttribute('src', 'fotocrianca-m.jpg')
            } else if (idade >= 10 && idade < 17) {
                img.setAttribute('src', 'fotojovem-m.jpg')
            } else if (idade >= 17 && idade < 25) {
                img.setAttribute('src', 'fotojovemadult-m.jpg')
            } else if (idade >= 25 && idade < 40) {
                img.setAttribute('src', 'fotoadulto-m.jpg')
            } else if (idade >= 40 && idade < 50) {
                img.setAttribute('src', 'fotoadultoid-m.jpg')
            } else if (idade >= 50 && idade < 60) {
                img.setAttribute('src', 'fotoidosoj-m.jpg')
            } else {
                img.setAttribute('src', 'fotoidoso-m.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 3) {
                img.setAttribute('src', 'fotobb.jpg')
            } else if (idade >= 3 && idade < 5) {
                img.setAttribute('src', 'fotobbj-f.jpg')
            } else if (idade >= 5 && idade < 10 ) {
                img.setAttribute('src', 'fotocrianca-f.jpg')
            } else if (idade >= 10 && idade < 17) {
                img.setAttribute('src', 'fotojovem-f.jpg')
            } else if (idade >= 17 && idade < 25) {
                img.setAttribute('src', 'fotojovemadult-f.jpg')
            } else if (idade >= 25 && idade < 40) {
                img.setAttribute('src', 'fotoadulto-f.jpg')
            } else if (idade >= 40 && idade < 50) {
                img.setAttribute('src', 'fotoadultoid-f.jpg')
            } else if (idade >= 50 && idade < 60) {
                img.setAttribute('src', 'fotoidosoj-f.jpg')
            } else {
                img.setAttribute('src', 'fotoidoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
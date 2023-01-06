let num = [5, 8, 2, 9, 3]

num.sort() // Coloca em ordem crescente 
num.push(1) // Cria uma chava e adiciona o valor desejado
num[1] = 4 // Adiciona o valor desejado a uma chava já definida
console.log(num)
console.log(`O vetor tem ${num.length} possições`)
console.log(`O primeiro valor do vetor  é ${num[0]}`)

//  Normal

for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}

for (let c = 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

//  Simplificação

for (let c in num) {
    console.log(num[c])
}

for (let c in num) [
    console.log(`A posição ${c} tem o valor ${num[c]}`)
]

//  Buscando valores

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
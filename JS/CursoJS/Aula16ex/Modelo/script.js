let valores = []
let resultado = document.getElementById('res')

function adicionar() {
    let txtnum = document.getElementById('txtn')
    let tabela = document.getElementById('numeros')

    if (txtnum.value.length == 0) {
        alert('Digite um numero')
    } else {
        let numero = Number(txtnum.value)
        
        if (numero < 1 || numero > 100 || valores.indexOf(numero) != -1) {
            alert('Numero invalido ou ja existente na lista')
            return
        }

        valores.push(numero)

        let item = document.createElement('option')
        item.text = `valor ${numero} adicionado.`
        tabela.appendChild(item)
        resultado.innerHTML = ''

    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {
    resultado.innerHTML = ''
    valores.sort((a, b) => a - b)
    console.log(valores)
    let soma = 0 
    let tam = valores.length
    for(let i in valores) {
        soma += valores[i]     
    }
    let media = soma / tam
    

    resultado.innerHTML += `<p>Ao todo temos ${tam} numeros cadastrados.</p>`
    resultado.innerHTML += `<p>O maior valor informado foi ${valores[tam - 1]}</p>`
    resultado.innerHTML += `<p>O menor valor informado foi ${valores[0]}</p>`
    resultado.innerHTML += `<p>Somando os valores temos ${soma}</p>`
    resultado.innerHTML += `<p>A media dos valores digitado é ${media}</p>`
    
}

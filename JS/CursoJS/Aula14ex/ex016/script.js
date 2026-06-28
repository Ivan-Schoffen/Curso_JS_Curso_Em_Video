function contar() {
    var inicioInput = document.getElementById('inicio')
    var fimInput = document.getElementById('fim')
    var passoInput = document.getElementById('passo')
    var resultado = document.getElementById('resultado')

    if ( inicioInput.value.length === 0 || fimInput.value.length === 0 || passoInput.value.length === 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else {        
        var inicio = Number(inicioInput.value)
        var fim = Number(fimInput.value)
        var passo = Number(passoInput.value)
        resultado.innerHTML = ''
        if(passo == 0){
           window.alert('Passo invalido! Considerando PASSO 1')
            passo = 1
        }

        if(inicio < fim) {
            for(var i = inicio; i <= fim; i += passo) {
                resultado.innerHTML += i + ` -> `
            }
        } else {
            for(var i = inicio; i >= fim; i -= passo) {
                resultado.innerHTML += i + ` -> `
            }
        }
        
        resultado.innerHTML += '🏁';
    }

}
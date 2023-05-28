let numeroAleatorio
let numerosChutados = []
let contador = 0

function reiniciarJogo(){
    document.getElementById('numChutado').value = ''
    window.location.reload()
}

function iniciar() {
    numeroAleatorio = Number(Math.floor(Math.random() * 100 + 1))
    console.log(numeroAleatorio)
    document.getElementById('numChutado').innerHTML = ''
}

function compararNumeros(){
    const numChutado = Number(document.getElementById('numChutado').value)
    numerosChutados.push(' ' + numChutado)
    document.getElementById('numerosChutados').innerHTML = numerosChutados

    if(numChutado > numeroAleatorio){
        document.getElementById('dica').innerHTML = 'ALTO demais'
        document.getElementById('numChutado').value = ''
        contador++
        document.getElementById('contador').innerHTML = contador
    }
    else if(numChutado < numeroAleatorio){
        document.getElementById('dica').innerHTML = 'BAIXO demais'
        document.getElementById('numChutado').value = ''
        contador++
        document.getElementById('contador').innerHTML = contador
    }
    else{
        document.getElementById('dica').innerHTML = 'PARABÉNS! O NÚMERO SECRETO ERA ' + numeroAleatorio
        contador++
        document.getElementById('contador').innerHTML = contador
        document.getElementById('numChutado').setAttribute('Readonly', 'Readonly')
    }
}

elementos = [];
algarismos = '';
numeros = []

const input = document.getElementById("input")
input.value = 0

function limpar(){
    input.value = 0
    elementos = []
    algarismos = '';
    numeros = []
}


function expressao(digito){
    if(numeros.length != 0){
        elementos.push(numeros)
        numeros = []
    }
    elementos.push(digito)
    if(elementos[0] != 'x' && elementos[0] != '=' && elementos[0] != '+' && elementos[0] != '-' && elementos[0] != '/'){
        console.log(elementos)
        input.value = elementos.join('')
        
    }
    else{
        alert('Antes de calcular, digite um número primeiro')
        window.location.reload()
    }

}

function verificar(){
    a = 0
    while(a < elementos.length){
        if(elementos[a] != 'x' && elementos[a] != '-' && elementos[a] != '+' && elementos[a] != '/'){
            algarismos = algarismos + elementos[a]

            a++
        }

        else{
            numeros.push(algarismos)
            numeros.push(elementos[a])

            algarismos = '';
            a++
        }
    }

    if(algarismos != ''){
        numeros.push(algarismos)
    }
    console.log('Algarismos: ' + algarismos)
    console.log('numeros finais: ' + numeros)
}

function multiplicar_ou_Dividir(){
    a = 0
    while(a < numeros.length){
        if(numeros[a] === 'x' || numeros[a] === '/'){
            let operador = numeros[a]
            let anterior = parseFloat(numeros[a-1])
            let posterior = parseFloat(numeros[a+1])
            if(operador === 'x'){
                var resultado = parseFloat(anterior * posterior)
            }
            if(operador === '/'){
                var resultado = parseFloat(anterior / posterior)
            }

            numeros.splice((a-1), 3, resultado)
            console.log('Resultado: ' + numeros)
            a = 0
        }
        else{
            a++
        }
    }
}

function somar_ou_subtrair(){
    a = 0
    while(a < numeros.length){
        if(numeros[a] === '+' || numeros[a] === '-'){
            let operador = numeros[a]
            let anterior = parseFloat(numeros[a-1])
            let posterior = parseFloat(numeros[a+1])
            if(operador === '+'){
                var resultado = parseFloat(anterior + posterior)
            }
            if(operador === '-'){
                var resultado = parseFloat(anterior - posterior)
            }
            numeros.splice((a-1), 3, resultado)
            console.log('Resultado: ' + numeros)
            a = 0
        }
        else{
            a++
        }
    }
}

function calcular(){
    
    verificar()
    multiplicar_ou_Dividir()
    somar_ou_subtrair()
    input.value = numeros

    elementos = []
    algarismos = ''

}
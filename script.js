function escolhaComp (){
    const jokempo = ['pedra', 'papel', 'tesoura']
    const numAleatorio = Math.floor(Math.random() * 3)
    return jokempo[numAleatorio]
}

function jogar(escolhaJoga){
    
    const comp = escolhaComp()
    let resultado = ''

    if (comp === escolhaJoga){
        resultado = 'empate'
    } else if((escolhaJoga === "pedra" && comp === "tesoura" ) || 
        (escolhaJoga = "papel" && comp === "pedra") || 
        (escolhaJoga = "tesoura" && comp === "papel" )
        ){
        resultado = "Voce ganhou!"
        document.getElementById('resultado').innerHTML = resultado
    }
    else{
        resultado = 'computador ganhou'
        document.getElementById('resultado').innerHTML = resultado
    }


}

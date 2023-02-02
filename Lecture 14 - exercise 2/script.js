function tabuada(){
    let numero = Number(document.getElementById('numeroid').value)
    let tabuada = document.getElementById('selecttabuada')

    if(numero.length == 0){
        alert('Por favor digite o número!')
    }
    else{
        let numero = Number(document.getElementById('numeroid').value)
        let contador=1
        tabuada.innerHTML= ''
        while(contador<=10){
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}
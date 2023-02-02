function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimentotext = document.getElementById('idadeid')
    var resposta= document.getElementById('res')
    
    if(nascimentotext.value.length == 0 || nascimentotext.value > ano){
        alert('Verifique as informações e tente novamente.')
    }
    else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nascimentotext.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            genero = 'Homem'
            if(idade<10){
                //criança
                img.setAttribute('src', 'criancahomem.png')
            }
            else if(idade>=10 && idade<18){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            }
            else if(idade<60){
                //adulto
                img.setAttribute('src','adultohomem.png')
            }
            else{
                img.setAttribute('src','idosohomem.png')
            }
        }
        else if(sex[1].checked){
            genero = 'Mulher'

            if(idade<=10){
                //criança mulher
                img.setAttribute('src','criancamenina.png')
            }
            else if(idade>10 && idade<18){
                //jovem mulher
                img.setAttribute('src','jovemmulher.png')
            }
            else if(idade<60){
                //adulto mulher
                img.setAttribute('src','adultomulher.png')
            }
            else{
                //idoso mulher
                img.setAttribute('src','idosomulher.png')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML= `Detectamos ${genero} com ${idade} anos <br/>`
        resposta.appendChild(img)
    }
}
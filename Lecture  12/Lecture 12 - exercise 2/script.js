function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas<br/>`

    if(hora>=0 && hora<12){
        img.src = "fotomanha.png"
        document.body.style.background = "#ebd9b5"
    }
    else if(hora<=18){
        img.src = "fototarde.png"
        document.body.style.background = "#2c5f78"
    }
    else{
        img.src = "fotonoite.png"
        document.body.style.background = "#2c2c2e"
    }
}

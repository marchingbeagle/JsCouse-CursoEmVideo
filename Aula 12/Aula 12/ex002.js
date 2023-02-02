var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)

if(hora<=12){
    console.log('Ainda é de manhâ')
}
else if(hora<18){
    console.log('Ainda é de tarde')
}
else{
    console.log('Está de noite')
}
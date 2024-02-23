
var msg=document.getElementById('msg')
var img=document.getElementById('imagem')
var date= new Date()
var hora= date.getHours()


 

function carregar(){
    msg.innerHTML= `são  ${hora} horas`

    if (hora >=0 && hora <12){
        img.src = 'imagens/pexels-penelope-thomas-15263698.jpg'

    } else if (hora >=12 && hora <=18){
        img.src = 'imagens/pexels-tatiana-syrikova-3975680.jpg'
    } else {
        img.src = 'imagens/pexels-tatiana-syrikova-3975680.jpg'
        

    }

    
}
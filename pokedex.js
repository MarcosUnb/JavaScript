var visor = document.querySelector('div#visor')
var menu = document.getElementById('menu') 
var img = document.createElement('img')

function escolher(c){
    if(c==0){
        menu.innerHTML = ''
        visor.innerHTML = 'Charmander capturado!<br>'
        img.setAttribute('src', 'charmander.png')    
        visor.appendChild(img)
    }
    if(c==1){
        menu.innerHTML = ''
        visor.innerHTML = 'Bulbassauro capturado!<br>'
        img.setAttribute('src', 'bulbassauro.png')    
        visor.appendChild(img)
    }
    if(c==2){
        menu.innerHTML = ''
        visor.innerHTML = 'Squirtle capturado!<br>'
        img.setAttribute('src', 'squirtle.png')    
        visor.appendChild(img)
    }
}
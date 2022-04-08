const lista_de_nombres = ['Facundo Oubel - Facebook', 'Manuel Garcia - Instagram', 'Federico Suez - Tweeter', 'Ivan Laita - Instagram', 'Malena Osorio - Facebook'];
export default {
    nombreDeUsuarioAleatorio: lista_de_nombres[Math.floor(Math.random() * lista_de_nombres.length)],
    claveDeUsuarioAleatoria: Math.floor(Math.random() * 120000 , 100).toString(), 
}


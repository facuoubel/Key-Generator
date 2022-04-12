const lista_de_nombres = ['Facebook', 'Instagram', 'Tweeter', 'Instagram', 'Facebook'];
export default {
    nombreDeUsuarioAleatorio: lista_de_nombres[Math.floor(Math.random() * lista_de_nombres.length)],
    claveDeUsuarioAleatoria: Math.floor(Math.random() * 120000 , 100).toString(), 
}


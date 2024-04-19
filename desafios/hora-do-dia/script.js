function carregar() {
    document.body.style.display = 'block';
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    //var hora = data.getHours();
    var hora = 22;
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/foto-manha.jpg';
        document.body.style.background = '#FCA237';
    } else if (hora >= 12 && hora < 18){
        img.src = 'img/foto-tarde.jpg';
        document.body.style.background = '#B2694B';
    } else {
        img.src = 'img/foto-noite.jpg';
        document.body.style.background = '#132E3B';
    }
}

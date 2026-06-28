function carregar() {
    var agora = new Date().getHours();
    var msg = document.getElementById('horas');
    var img = document.getElementById('imagen');

    msg.innerText = `Agora são ${agora} horas.`

    if(agora >= 0 && agora< 12) {
        img.src = "img/Manha.jpg"
        document.body.style.background = "#e2cd9f"
    } 
    else if (agora < 18) {
        img.src = "img/tarde.jpg"
        document.body.style.background = "#b9846f"
    } 
    else {
        img.src = "img/noite.jpg"
        document.body.style.background = "#515154"
    }
}
function verificar () {
    var stickerUno= document.getElementById('sticker1').value;
    var stickerDos= document.getElementById('sticker2').value;
    var stickerTres= document.getElementById('sticker3').value;

    var sticker1= Number(stickerUno)
    var sticker2= Number(stickerDos)
    var sticker3= Number(stickerTres)

    var cantidadIngresada= sticker1 + sticker2 + sticker3;
    var mensaje=document.getElementById("mensaje");

    if (cantidadIngresada >=1 && cantidadIngresada <= 10) {
        mensaje.innerHTML="llevas " + cantidadIngresada + " stickers";
    }else if (cantidadIngresada <=0){
        mensaje.innerHTML="no llevas suficientes stickers";
    }else {
        mensaje.innerHTML="llevas demasiados stickers";
    }


}
var margen = false;

function cambiarMargen () {
var imagen = document.getElementById('link');
if(margen) {
    imagen.style.border = '0px';
    margen= false; 
}else {
    imagen.style.border='20px dotted red';

    margen=true;
}

}
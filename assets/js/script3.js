function verificarContraseña() {
    var digito1 = document.getElementById("select1").value;
    var digito2 = document.getElementById("select2").value;
    var digito3 = document.getElementById("select3").value;



var passwordCorrecto = "911";
var passwordCorrecto2= "714";

var passwordIngresado= digito1 + digito2 + digito3;
var passwordIngresado2= digito1 + digito2 + digito3;

if (passwordCorrecto === passwordIngresado) {
    alert("password 1 correcto")
} else if (passwordCorrecto2 === passwordIngresado2) {
    alert("password 2 correcto")
} else {
    alert("password incorrecto")
}

}
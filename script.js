//funcion para encriptar
function encriptar(){
    var texto = document.getElementById("inputTexto").value;
    var txtCifrado= texto.replace(/e/igm,"enter");
    var txtCifrado= txtCifrado.replace(/o/igm,"ober");
    var txtCifrado= txtCifrado.replace(/i/igm,"imes");
    var txtCifrado= txtCifrado.replace(/a/igm,"ai");
    var txtCifrado= txtCifrado.replace(/u/igm,"ufat");

    //parte de la funcion para cambiar valores del estilo 

    document.getElementById("imagen-derecha").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").value=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit"
    document.getElementById("texto2").style.marginTop="10%";
    document.getElementById("texto2").disabled=false;
    
}

//funcion para desencriptar

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado= texto.replace(/enter/igm,"e");
    var txtCifrado= txtCifrado.replace(/ober/igm,"o");
    var txtCifrado= txtCifrado.replace(/imes/igm,"i");
    var txtCifrado= txtCifrado.replace(/ai/igm,"a");
    var txtCifrado= txtCifrado.replace(/ufat/igm,"u");

 //parte de la funcion para cambiar valores del estilo

    document.getElementById("imagen-derecha").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").value=txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    document.getElementById("texto2").style.marginTop="10%";
    document.getElementById("texto2").disabled=false;
    

}

//funcion para copiar

function copiar(){
    var contenido= document.querySelector("#texto2");
    contenido.select();
    document.execCommand("cut");
    document.getElementById("inputTexto").value="";
    alert("se copio");
    document.getElementById("texto2").disabled=true;
}

//funcion para regresar algunas cosas del estilo a su forma original

function ocultar(){
    document.getElementById("imagen-derecha").style.display="show";
    document.getElementById("texto").style.display="show";
    document.getElementById("copiar").style.display="none";
    document.getElementById("imagen-derecha").style.display="inherit";
    document.getElementById("texto").style.display="inherit";
    document.getElementById("texto2").value="Ingrese el texto que desees encriptar o desencriptar";

}



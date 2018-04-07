


var letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var palabras=[];

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getNumberRandom(min, max) {
    return  Math.round(Math.random() * (max - min) + min);
  }
function init(){
    for(i=0;i<225;i++){
        $("#contenedor").append('<div class="caja" >'+
            letras.charAt(getNumberRandom(0,letras.length-1))+'</div>');
    }
}



/**
 * Función que añade palabras insertadas en input de html a una lista y un array para almacenar las palabras.
 * Comprueba además que las palabras tienen entre 2 y 10 caracteres descartando cualquier otro tipo de palabra insetada
 * y mostrando una alerta con información.
 */
var aux; //Almacena temporalmente la palabra para realizar comprobaciones sobre ellas.

function addWords(){
    $("#btnAdd").click(function(){
        aux =  $("#test").val();
        
        if(aux.length>=2 && aux.length<=10){
            $("ol").append("<li>"+ aux+"</li>");
            palabras.push($("#test").val());
            console.log(palabras);
        }else{
            if(aux.length<2 & aux.length!=0){
                alert("La palabra " + aux + " es demasiado pequeña. Menor a 2 caracteres.");
            }else if(aux.length>10){
                alert("La palabra " + aux + " es demasiado grande. Mayor a 10 caracteres.");
            }else{
                alert("Campo a insetar vacio. Introduzca una palabra.");
            }
        }
    })
    
}
function resetWords(){
    $("#btnReset").click(function(){

    palabras =[];
    $("ol").empty();
    console.log(palabras);

    })
}


function clikeado(){

    $(".caja").on("click", function() {
        $(this).css("background", "red");
    })
}

$(document).ready(
    init(),
    addWords(),
    resetWords(), 
    clikeado()      
);


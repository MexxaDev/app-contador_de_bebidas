/* Tomamos el la cantidad a agregar y la guardamos dentro de la variable  cantidadParaAgregarFernet*/
let cantidadParaAgregarVodkaJugoSpeed = document.querySelector("#cantAgregarVodkaJugoSpeed");
/* Tomamos el valor del total de productos vendidos dentor de la variable  cantidadDeFernetVendidos*/
let cantidadDeVodkaJugoSpeedVendidos = document.querySelector("#cantVendidoVodkaJugoSpeed");

/* Creamos la variable para ir guardando el valor ingresado en el input*/
let cantidadParaAgregarVodkaJugoSpeedNumero = 0;
/* Creamos la variable para guardar el valor que debemos mostrar en el total */
let cantidadDeVodkaJugoSpeedVendidosNumero = 0;


function removeVodkSpeed(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarVodkaJugoSpeedNumero = parseInt(cantidadParaAgregarVodkaJugoSpeed.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarVodkaJugoSpeedNumero = cantidadParaAgregarVodkaJugoSpeedNumero - 1;
    cantidadParaAgregarVodkaJugoSpeed.value = cantidadParaAgregarVodkaJugoSpeedNumero;
}
function addVodkSpeed(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarVodkaJugoSpeedNumero = parseInt(cantidadParaAgregarVodkaJugoSpeed.value);
    /* La variable contenedora del numero se iguala por si mimsa y se suma 1*/
    cantidadParaAgregarVodkaJugoSpeedNumero = cantidadParaAgregarVodkaJugoSpeedNumero + 1;
    cantidadParaAgregarVodkaJugoSpeed.value = cantidadParaAgregarVodkaJugoSpeedNumero;
}
function totalVodkSpeed(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarVodkaJugoSpeedNumero = parseInt(cantidadParaAgregarVodkaJugoSpeed.value);
    cantidadDeVodkaJugoSpeedVendidosNumero = parseInt(cantidadDeVodkaJugoSpeedVendidos.textContent);


    cantidadDeVodkaJugoSpeedVendidosNumero = cantidadDeVodkaJugoSpeedVendidosNumero + cantidadParaAgregarVodkaJugoSpeedNumero;
    cantidadDeVodkaJugoSpeedVendidos.textContent = cantidadDeVodkaJugoSpeedVendidosNumero;

    cantidadParaAgregarVodkaJugoSpeed.value = 0;
    
}
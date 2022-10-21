/* Tomamos el la cantidad a agregar y la guardamos dentro de la variable  cantidadParaAgregarFernet*/
let cantidadParaAgregarGin = document.querySelector("#cantAgregarGin");
/* Tomamos el valor del total de productos vendidos dentor de la variable  cantidadDeFernetVendidos*/
let cantidadDeGinVendidos = document.querySelector("#cantVendidoGin");

/* Creamos la variable para ir guardando el valor ingresado en el input*/
let cantidadParaAgregarGinNumero = 0;
/* Creamos la variable para guardar el valor que debemos mostrar en el total */
let cantidadDeGinNumero = 0;


function removeGin(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarGinNumero = parseInt(cantidadParaAgregarGin.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarGinNumero = cantidadParaAgregarGinNumero - 1;
    cantidadParaAgregarGin.value = cantidadParaAgregarGinNumero;
}
function addGin(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarGinNumero = parseInt(cantidadParaAgregarGin.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarGinNumero = cantidadParaAgregarGinNumero + 1;
    cantidadParaAgregarGin.value = cantidadParaAgregarGinNumero;
}
function totalGin(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarVodkaJugoSpeedNumero = parseInt(cantidadParaAgregarVodkaJugoSpeed.value);
    cantidadDeVodkaJugoSpeedVendidosNumero = parseInt(cantidadDeVodkaJugoSpeedVendidos.textContent);


    cantidadDeGinNumero = cantidadDeGinNumero + cantidadParaAgregarGinNumero;
    cantidadDeGinVendidos.textContent = cantidadDeGinNumero;

    cantidadParaAgregarGin.value = 0;
    
}
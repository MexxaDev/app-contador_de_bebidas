/* Tomamos el la cantidad a agregar y la guardamos dentro de la variable  cantidadParaAgregarFernet*/
let cantidadParaAgregarFreeze = document.querySelector("#cantAgregarFreeze");
/* Tomamos el valor del total de productos vendidos dentor de la variable  cantidadDeFernetVendidos*/
let cantidadDeFreezeVendidos = document.querySelector("#cantVendidoFreeze");

/* Creamos la variable para ir guardando el valor ingresado en el input*/
let cantidadParaAgregarFreezeNumero = 0;
/* Creamos la variable para guardar el valor que debemos mostrar en el total */
let cantidadDeFreezeNumero = 0;


function removeFreeze(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarFreezeNumero = parseInt(cantidadParaAgregarFreeze.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarFreezeNumero = cantidadParaAgregarFreezeNumero - 1;
    cantidadParaAgregarFreeze.value = cantidadParaAgregarFreezeNumero;
}
function addFreeze(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarFreezeNumero = parseInt(cantidadParaAgregarFreeze.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarFreezeNumero = cantidadParaAgregarFreezeNumero + 1;
    cantidadParaAgregarFreeze.value = cantidadParaAgregarFreezeNumero;
}
function totalFreeze(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarVodkaJugoSpeedNumero = parseInt(cantidadParaAgregarVodkaJugoSpeed.value);
    cantidadDeVodkaJugoSpeedVendidosNumero = parseInt(cantidadDeVodkaJugoSpeedVendidos.textContent);


    cantidadDeFreezeNumero = cantidadDeFreezeNumero + cantidadParaAgregarFreezeNumero;
    cantidadDeFreezeVendidos.textContent = cantidadDeFreezeNumero;

    cantidadParaAgregarFreeze.value = 0;
    
}
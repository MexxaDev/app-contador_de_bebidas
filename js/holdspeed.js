/* Tomamos el la cantidad a agregar y la guardamos dentro de la variable  cantidadParaAgregarFernet*/
let cantidadParaAgregarFreeze = document.querySelector("#cantAgregarFreeze");
/* Tomamos el valor del total de productos vendidos dentor de la variable  cantidadDeFernetVendidos*/
let cantidadDeFreezeVendidos = document.querySelector("#cantVendidoFreeze");

/* Creamos la variable para ir guardando el valor ingresado en el input*/
let cantidadParaAgregarholdspeedNumero = 0;
/* Creamos la variable para guardar el valor que debemos mostrar en el total */
let cantidadDeholdpspeedNumero = 0;


function removeFreeze(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarholdspeedNumero = parseInt(cantidadParaAgregarFreeze.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarholdspeedNumero = cantidadParaAgregarholdspeedNumero - 1;
    cantidadParaAgregarFreeze.value = cantidadParaAgregarholdspeedNumero;
}
function addFreeze(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarholdspeedNumero = parseInt(cantidadParaAgregarFreeze.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarholdspeedNumero = cantidadParaAgregarholdspeedNumero + 1;
    cantidadParaAgregarFreeze.value = cantidadParaAgregarholdspeedNumero;
}
function totalFreeze(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarVodkaJugoSpeedNumero = parseInt(cantidadParaAgregarVodkaJugoSpeed.value);
    cantidadDeVodkaJugoSpeedVendidosNumero = parseInt(cantidadDeVodkaJugoSpeedVendidos.textContent);


    cantidadDeholdpspeedNumero = cantidadDeholdpspeedNumero + cantidadParaAgregarholdspeedNumero;
    cantidadDeFreezeVendidos.textContent = cantidadDeholdpspeedNumero;

    cantidadParaAgregarFreeze.value = 0;
    
}
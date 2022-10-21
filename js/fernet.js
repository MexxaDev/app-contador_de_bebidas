/* Tomamos el la cantidad a agregar y la guardamos dentro de la variable  cantidadParaAgregarFernet*/
let cantidadParaAgregarFernet = document.querySelector("#cantAgregarFernet");
/* Tomamos el valor del total de productos vendidos dentor de la variable  cantidadDeFernetVendidos*/
let cantidadDeFernetVendidos = document.querySelector("#cantVendidoFernet");

/* Creamos la variable para ir guardando el valor ingresado en el input*/
let cantidadParaAgregarFernetNumero = 0;
/* Creamos la variable para guardar el valor que debemos mostrar en el total */
let cantidadDeFernetVendidosNumero = 0;

/* let datoguardado; */

function removeFernet(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarFernetNumero = parseInt(cantidadParaAgregarFernet.value);
    /* La variable contenedora del numero se iguala por si mimsa y se resta 1 532754643 */
    cantidadParaAgregarFernetNumero = cantidadParaAgregarFernetNumero - 1;
    cantidadParaAgregarFernet.value = cantidadParaAgregarFernetNumero;
}
function addFernet(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarFernetNumero = parseInt(cantidadParaAgregarFernet.value);
    cantidadParaAgregarFernetNumero = cantidadParaAgregarFernetNumero + 1;
    cantidadParaAgregarFernet.value = cantidadParaAgregarFernetNumero;
}
function totalFernet(){
    /* Guardamos el valor de la cantidad a agregar dentro de una variable en forma numeritca */
    cantidadParaAgregarFernetNumero = parseInt(cantidadParaAgregarFernet.value);
    cantidadDeFernetVendidosNumero = parseInt(cantidadDeFernetVendidos.textContent);


    cantidadDeFernetVendidosNumero = cantidadDeFernetVendidosNumero + cantidadParaAgregarFernetNumero;
    cantidadDeFernetVendidos.textContent = cantidadDeFernetVendidosNumero;
    cantidadParaAgregarFernet.value = 0;
    
}
function guardarFernet(){
    localStorage.setItem("cantidadFernet", cantidadDeFernetVendidosNumero);
}
let fernetGuardado;

fernetGuardado = localStorage.getItem("cantidadFernet");
cantidadDeFernetVendidos.textContent = fernetGuardado;
console.log(cantidadDeFernetVendidos.textContent);



const cantidadDeFernet = document.querySelector('#cantFernet');
const totalDeFernet = document.querySelector('#totalFernet');

console.log(cantidadDeFernet.value);
console.log(totalDeFernet.textContent);

let cantidadDeFernetConvertida;

let cantidadDeFernetAagregar = 0;
let totalDeFernetConvertida = 0;


function agregar(){
    cantidadDeFernetConvertida = parseInt(cantidadDeFernet.value);
    totalDeFernetConvertida = totalDeFernetConvertida + cantidadDeFernetConvertida;
    totalDeFernet.textContent = totalDeFernetConvertida;
    cantidadDeFernet.value = 0;
}


function añadirUno(){
    cantidadDeFernetConvertida = parseInt(cantidadDeFernet.value);
    cantidadDeFernetConvertida = cantidadDeFernetConvertida + 1;
    cantidadDeFernet.value = cantidadDeFernetConvertida;
}
function restarUno(){
    cantidadDeFernetConvertida = parseInt(cantidadDeFernet.value);
    cantidadDeFernetConvertida = cantidadDeFernetConvertida - 1;
    cantidadDeFernet.value = cantidadDeFernetConvertida;
}


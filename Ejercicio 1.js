// 1. Crear un función que permita la sumatoria de los primeros N números, donde N es ingresado por el usuario 
// Inputs (entradas)
// N = number

// Función (lógica)
// Sumatoria de los primeros N números
function addN()
{
  var n = prompt('Ingrese un número del 1 al 10', '');
  n = parseInt(n);
  var sum = (n * (n + 1)) / 2;
  return sum;
}
var res = addN();
console.log(res);

// Outputs (salida)
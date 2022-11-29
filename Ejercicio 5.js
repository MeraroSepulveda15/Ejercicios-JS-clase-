// 5. Crear una función que devuelva el promedio de un arreglo, que caso de que el arreglo este vacio debe devolver 0.
// Inputs (entradas)
// array = [2, 4, 8, 10]

// Función (lógica)
function averageArray(array)
{
  // promedios = suma de todos los números / cantidad de números
  var arraylength = array.length;
  var sum = 0;
  for (var i = 0; i < arraylength; i++)
  {
    sum += array[i];
  }
  return arraylength > 0 ? (sum/arraylength) : 0;
}
var res = averageArray([10, 9, 8])
console.log(res);

// Outputs (salida)
// 6.45
// 4. Crear un función que reciba un arreglo y despúes cree uno nuevo con todos los elementos ordenados de menor a mayor, (sin ocupar el método .sort) 
// Inputs (entradas)
/// array = [1, 8, 4, 2]

// Función (lógica)

// function order(array)
// {
//   return array.sort();
// }
// var res = order([1, 8, 4, 2])
// console.log(res)

function orderWithoutSort(array)
{
  for(var i = 0; i < array.length; i++)
  {
    for (var j = i + 1; j < array.length; j++)
    {
      if(array[i] > array[j])
      {
        var temporal =  array[i];
        array[i] =  array[j];
        array[j] = temporal
      }
    }
  }
  return array;
}
var res = orderWithoutSort([50, 25, 49, 12, 37 ]);
console.log(res);
// Outputs (salida)
// array = [1, 2, 4, 8]
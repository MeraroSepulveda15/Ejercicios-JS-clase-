// 2. Crea una función que genera 20 números al azar y los guarde en un array 
// Inputs (entradas)
// 20 números al azar
// Función (lógica)
// Crear los 20 números y guardarlos en un array
function createArray(){
  var array = [];
  for(var i = 0; i < 20; i++)
  {
    var num = Math.floor(Math.random()*100);
    console.log(num);
    array.push(num);
  }
  return array;
  
}
var res = createArray();
console.log(res);

// Outputs (salida)
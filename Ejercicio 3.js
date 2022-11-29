// 3. Crear un función que reciba un arreglo con palabras, despúes genera un nuevo arreglo que contenga solo las palabras que empiezan con una vocal
// Inputs (entradas)
// array = ['', '', '', ... n];
// ['camion', 'perro', 'oruga', 'amarillo'];

// Función (lógica)
// newArray = ['a...', 'e...', 'i...', 'o...', 'u...']
// => función flecha
function splitVowel(array)
{
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var arrayVowels = [];
  array.map(element => {
    var firstLetter = element.at();
    if (vowels.includes(firstLetter))
    {
      console.log(element);
      arrayVowels.push(element);
    }
  });
  return arrayVowels;
}
var res = splitVowel(['azul', 'rosa', 'amarillo', 'verde', 'rojo', 'cafe']);
console.log(res)
// Outputs (salida)
// newArray = ['a...', 'e...', 'i...', 'o...', 'u...']
// ['oruga', 'amarillo']
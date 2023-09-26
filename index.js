/* Arrays */
let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let arrayNumerosPares = [0, 2, 4, 6, 8]

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

/* Funciones */
let suma1 = suma(163, 26);
let suma2 = suma(175, 149);
let suma3 = suma(89, 47);
let suma4 = suma(49, 7);
let suma5 = suma(141, 26);

function suma(n1, n2) {
    return n1 + n2
}


function separarPalabras(texto) {
    const palabras = texto.split(/\s+/);
    return palabras;
  }
  
  const texto1 = "Hola que tal?";
  const texto2 = "The Bridge for life";
  const texto3 = "A ver como separas esto";
  
  const palabras1 = separarPalabras(texto1);
  const palabras2 = separarPalabras(texto2);
  const palabras3 = separarPalabras(texto3);
  
  console.log(palabras1);
  console.log(palabras2);
  console.log(palabras3);

  function repetirString(str, veces) {
    let resultado = '';
    
    for (let i = 0; i < veces; i++) {
      resultado += str;
    }
    
    return resultado;
  }
  
  console.log(repetirString('ja', 7));
  console.log(repetirString('estoy castigado ', 10));
  
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    if (numero === 2) {
      return true;
    }
  
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(esPrimo(103));
  console.log(esPrimo(1811));
  console.log(esPrimo(1527));
  console.log(esPrimo(1313));
  
  /* Mezclando Arrays y Funciones */

  function ordenarArray(array) {
    array.sort(function(a, b) {
      return a - b;
    });
    return array;
  }

  const array1 = [196, 193, 191, 179];
  const array2 = [226, 190, 307, 252, 311, 270, 198, 194, 211, 300, 270, 210, 168, 284];
  const array3 = [135, 24, 133, 15, 55, 29, 60, 42, 83, 43, 77, 6];
  const array4 = [115, 103];
  const array5 = [152, 162, 157, 162, 154, 154, 159];
  
  console.log(ordenarArray(array1));
  console.log(ordenarArray(array2));
  console.log(ordenarArray(array3));
  console.log(ordenarArray(array4));
  console.log(ordenarArray(array5));

  function obtenerPares(arrays) {
    const pares = arrays.filter(function(numero) {
      return numero % 2 === 0;
    });
    return pares;
  }
  
  const arrays1 = [4, 6, 4, 4];
  const arrays2 = [25, 28, 24, 49, 41, 24, 46];
  const arrays3 = [46, 51, 33, 38];
  const arrays4 = [100, 111, 17, 76, 92, 108, 58, 15];
  const arrays5 = [23, 41, 26, 64, 64, 61, 59];
  
  console.log("Pares en", arrays1, ":", obtenerPares(arrays1));
  console.log("Pares en", arrays2, ":", obtenerPares(arrays2));
  console.log("Pares en", arrays3, ":", obtenerPares(arrays3));
  console.log("Pares en", arrays4, ":", obtenerPares(arrays4));
  console.log("Pares en", arrays5, ":", obtenerPares(arrays5));
  
  function arrayMapi(arr,myFunction){
    let newArr = arr.map((e)=>myFunction(e))
      return newArr
  }

  function eliminarDuplicados(arraydup) {

    const conjuntoSinDuplicados = new Set(arraydup);

    const arraySinDuplicados = [...conjuntoSinDuplicados];
    
    return arraySinDuplicados;
  }
  
  const arraydup1 = [34, 157, 10, 97, 34, 97, 10, 97, 34, 157, 10, 157];
  const arraydup2 = [21, 6, 46, 5, 26, 33, 22, 21, 46, 6, 5, 22, 29, 33, 29, 21, 46, 6, 5, 22, 26, 33, 29, 26];
  const arraydup3 = [101, 56, 89, 56, 89, 56, 101, 89, 101];
  const arraydup4 = [19, 64, 22, 28, 5, 19, 64, 22, 28, 5, 19, 64, 5, 28, 22];
  const arraydup5 = [10, 13, 28, 18, 10, 28, 13, 18, 27, 10, 28, 13, 18, 27, 27];
  
  console.log("Eliminar duplicados de", arraydup1, ":", eliminarDuplicados(arraydup1));
  console.log("Eliminar duplicados de", arraydup2, ":", eliminarDuplicados(arraydup2));
  console.log("Eliminar duplicados de", arraydup3, ":", eliminarDuplicados(arraydup3));
  console.log("Eliminar duplicados de", arraydup4, ":", eliminarDuplicados(arraydup4));
  console.log("Eliminar duplicados de", arraydup5, ":", eliminarDuplicados(arraydup5));
  
  /* Proyecto */

  let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

  let holaMundo = ['Hola', 'Mundo'];

  let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

  let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

  function multiplicacion(a, b) {
    return a * b;
  }

  console.log(multiplicacion(22, 18));
  console.log(multiplicacion(127, 84));
  console.log(multiplicacion(176, 113));
  console.log(multiplicacion(13, 172));
  console.log(multiplicacion(54, 120));

  function division(a, b) {
    return a / b;
  }

  console.log(multiplicacion(23, 169));
  console.log(multiplicacion(94, 116));
  console.log(multiplicacion(127, 182));
  console.log(multiplicacion(154, 120));
  console.log(multiplicacion(157, 10));

  function esPar(numero) {
      return numero % 2 === 0;
  }
  
  console.log(esPar(0));
  console.log(esPar(153));
  console.log(esPar(67));
  console.log(esPar(98));
  console.log(esPar(47));

function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function multiplicacion(a, b) {
    return a * b;
  }
  
  const arrayFunciones = [suma, resta, multiplicacion];
  
  console.log("Suma en posición 0");
  console.log(arrayFunciones[0](39, 75));
  console.log(arrayFunciones[0](49, 8));
  console.log(arrayFunciones[0](74, 163));
  console.log(arrayFunciones[0](85, 148));
  console.log(arrayFunciones[0](40, 58));
  
  console.log("Resta en posición 1");
  console.log(arrayFunciones[1](60, 17));
  console.log(arrayFunciones[1](166, 171));
  console.log(arrayFunciones[1](97, 59));
  console.log(arrayFunciones[1](31, 110));
  console.log(arrayFunciones[1](5, 155));
  
  console.log("Multiplicación en posición 2");
  console.log(arrayFunciones[2](97, 84));
  console.log(arrayFunciones[2](97, 135)); 
  
  function ordenarArray2(array) {
    array2.sort(function(a, b) {
      return a - b;
    });
    return array;
  }

  const array21 = [];
  const array22 = [44, 68, 51, 81, 56, 71, 28, 75, 62, 34];
  const array23 = [152, 221, 247, 178, 232, 231, 197, 204];
  const array24 = [198, 101, 110, 159, 164, 104, 108, 86, 103, 197];
  const array25 = [39, 27, 57, 84, 53, 103, 53, 64, 38, 79, 59];
  
  console.log(ordenarArray(array21));
  console.log(ordenarArray(array22));
  console.log(ordenarArray(array23));
  console.log(ordenarArray(array24));
  console.log(ordenarArray(array25));

  function obtenerImpares(arrays) {
    const impares = arrays.filter(function(numero) {
      return numero % 2 !== 0;
    });
    return impares;
  }
  
  const arraysim1 = [22, 89, 65, 102, 53, 73];
  const arraysim2 = [22, 89, 65, 102, 53, 73];
  const arraysim3 = [65, 53, 64, 38, 44, 9];
  const arraysim4 = [44, 69, 62, 127, 126, 64];
  const arraysim5 = [113, 99, 82, 121, 24, 73, 33, 10];
  
  console.log("Pares en", arraysim1, ":", obtenerImpares(arraysim1));
  console.log("Pares en", arraysim2, ":", obtenerImpares(arraysim2));
  console.log("Pares en", arraysim3, ":", obtenerImpares(arraysim3));
  console.log("Pares en", arraysim4, ":", obtenerImpares(arraysim4));
  console.log("Pares en", arraysim5, ":", obtenerImpares(arraysim5));

  function sumarArray(array) {
    let suma = 0;
  
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
  
    return suma;
  }
  
  console.log("Sumar array", [145, 2, 146, 6, 26], ":", sumarArray([145, 2, 146, 6, 26]));
  console.log("Sumar array", [5, 24, 22, 2], ":", sumarArray([5, 24, 22, 2]));
  console.log("Sumar array", [44, 36, 33, 15], ":", sumarArray([44, 36, 33, 15]));
  console.log("Sumar array", [76, 27, 62, 83, 76, 61, 108], ":", sumarArray([76, 27, 62, 83, 76, 61, 108]));
  console.log("Sumar array", [11, 2, 5, 9, 5, 15], ":", sumarArray([11, 2, 5, 9, 5, 15]));
  console.log("Sumar array", [44, 27, 39], ":", sumarArray([44, 27, 39]));

  function multiplicarArray(array) {
    if (array.length === 0) {
      return 1;
    }
  
    let producto = 1;
  
    for (let i = 0; i < array.length; i++) {
      producto *= array[i];
    }
  
    return producto;
  }
  
  console.log("Multiplicar array", [3, 46, 9, 24, 42, 39, 46], ":", multiplicarArray([3, 46, 9, 24, 42, 39, 46]));
  console.log("Multiplicar array", [121, 19, 84, 117, 20, 98], ":", multiplicarArray([121, 19, 84, 117, 20, 98]));
  console.log("Multiplicar array", [9, 29, 39, 28, 11, 4, 11, 21, 31], ":", multiplicarArray([9, 29, 39, 28, 11, 4, 11, 21, 31]));
  console.log("Multiplicar array", [13, 15, 15, 10], ":", multiplicarArray([13, 15, 15, 10]));
  console.log("Multiplicar array", [91, 61, 75, 31], ":", multiplicarArray([91, 61, 75, 31]));
  console.log("Multiplicar array", [54, 75, 61, 100, 39, 89, 43, 10], ":", multiplicarArray([54, 75, 61, 100, 39, 89, 43, 10]));
    
// 0. funcion que imprima todos los elementos de un array (usar for, y luego otra con forEach)

// 1. funcion que recibe un array y devuelva el primer elemento

// 2. funcion que recibe un array y devuelva el ultimo elemento

// 3. funcion que recibe un array y devuelva el resultado de todos los elementos sumados (usar reduce y luego con for)

// 4. funcion que recibe un array y devuelva el resultado de todos los elementos concatenados en un string (usar reduce y luego con for)

// 5. funcion que recibe un array y devuelva el mismo array con todos los numeros mas 1 (usar map y luego con for)

// 6. funcion que reciba un texto y devuelva el ultimo caracter (usar charAt)

// 7. funcion que reciba un texto y devuelva todos los caracteres menos el primero (usar slice)

// 8. funcion que reciba un texto y devuelva todos los caracteres menos el primero y el ultimo (usar slice)

// 9. funcion que reciba un texto y devuelva todo en minuscula

// 10. funcion que reciba un texto y devuelva todo en mayuscula

// 11. funcion que reciba un texto y devuelva todas las palabras separadas (usar split)

// 12. funcion que reciba un texto y devuelva todas las palabras separadas por un '-' (usar split y join)

// 13. funcion que reciba un texto y devuelva todas las palabras separadas por un '-' (usar replace)

// 14. funcion que reciba un texto y devuelva solo la primer letra de cada palabra (usar split y charAt) en un array

// 15. funcion que reciba un texto y devuelva solo la palabra sin la primer letra (usar split y slice) en un array

// 16. funcion que reciba un texto y devuelva solo la primer y ultima letra de cada palabra (usar split y charAt) en un array

// 17. funcion que reciba un texto y devuelva solo la primer letra de cada palabra en mayuscula (usar split, charAt, toUpperCase) en un array

// 18. funcion que reciba un texto y devuelva solo la primer letra de cada palabra en mayuscula (usar split, charAt, toUpperCase, join) en un STRING

// 19. funcion que reciba un texto y devuelva un texto con todas las palabras con la primera letra en mayuscula (usar split, charAt, slice, toUpperCase, join)

// 20. funcion que reciba un array e imprima el primer elemento

// 21. funcion que reciba un array y devuelva el ultimo elemento

// 22. funcion que reciba un array y cambie el valor del primer elemento a 8, y que retorne el array

// 23. funcion que reciba un array y cambie el valor del ultimo elemento a 12, y que retorne el array

// 24. funcion que reciba un array y cambie el valor del primer elemento a el valor del segundo elemento, y que retorne el array

// 25. funcion que reciba un array y cambie el valor de cada elemento por 5 (sin usar map), y devolver el array

// 26. funcion que reciba un array y cambie el valor de cada elemento por el valor del ultimo elemento (sin usar map), y devolver el array

// 27. funcion que reciba un array e imprima el valor de cada elemento pero empezando por el final (usar for, usar i-- como decrementador)

// 28. funcion que reciba un array y devuelva el array invertido es decir el primer elemento cambiado por el ultimo (crear un nuevo array y usar push)

// 29. funcion que reciba un array y devuelva el primer elemento que encuentre mayor a 5

// 30. funcion que reciba un array y devuelva el elemento mas grande del array

// 31. funcion que reciba un array y devuelva el elemento mas chico del array

// 32. funcion que reciba un array y devuelva el elemento mas grande sumado al mas chico del array

// 33. funcion que reciba un array y devuelva el promedio de todos los elementos (el promedio es la suma de todos los elementos dividido por la cantidad de elementos)

// 34. funcion que reciba 2 parametros numeros y que devuelva la multiplicacion de esos numeros

// 35. funcion que reciba 2 parametros numeros y que devuelva la multiplicacion de esos numeros sin usar '*' (usar 'for', recordar que la multiplicacion es solo sumar el mismo elemento la cantidad de veces pedida, pj: 3*4 es igual a 4 veces 3 osea 3+3+3+3)

// 36. funcion que reciba un numero e imprima la tabla de multiplicar ese numero hasta el 10, ejemplo:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

// 37. funcion que reciba un numero1 y un numero2 e imprima la tabla de multiplicar ese numero1 hasta ese numero2

// 38. funcion que imprimar la tabla de multiplicar del 1 al 10

// 39. funcion que reciba un texto y devuelva un texto con sus paalabras ordenadas alfabeticamente (usar split, sort, join)

// 39. funcion que reciba un texto y devuelva un texto con sus paalabras ordenadas alfabeticamente con la primer letra en mayuscula (usar split, sort, charAt, toUpperCase, slice, join)

// 40. funcion que reciba un texto y devuelva ese mismo texto pero con las vocales reemplazadas por numeros.
// Donde: 'a' se reemplza por '4'
// Donde: 'e' se reemplza por '3'
// Donde: 'i' se reemplza por '1'
// Donde: 'o' se reemplza por '0'
// Donde: 'u' se reemplza por '7'
// Ejemplo: "Muchedrunbre belicosa" devolvera "M7ch3dr7nbr3 b3l1c0s4"

const string1 =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
const string2 =
  "The quick brown dog jumps over the lazy fox. If the fox reacted, was it really lazy?";
const string3 = "dog";
const string4 = "fox";

const arraydeTexto = [
  "sheep",
  "sheep",
  "sheep",
  "fox",
  "sheep",
  "fox",
  "sheep",
  "sheep",
];
const arrayDeNumeros = [1, 5, 8, 3, 4, 7, 6, 7, 9, 2, 3];
const otroArrayDeNumeros = [8, -3, 4, 7, -2, 3];

// 41. funcion que recibe un numero del 1 al 12 y devuelve el mes correspondiente como texto

// 42. funcion que recibe un numero del 1 al 12 y devuelve que cuarto del año es
// por ejemplo: Enero es parte del primer cuarto del año, entonces devolvera 1
// Abril es parte del segundo cuarto del año, entonces devolvera 2

// 43. funcion que recibe un texto1 y un texto2 y devuelve true si ambos textos son iguales (usar ===)

// 44. funcion que recibe un texto1 y un texto2 y devuelve la primer posicion (en caso de estar mas de una vez) en la que se encuentra el primer texto dentro del segundo (usar indexOf)

// 45. funcion que recibe un texto1 y un texto2 y devuelve la ultima posicion en la que se encuentra el primer texto dentro del segundo (usar indexOf)

// 46. funcion que recibe un texto1 y un texto2 y devuelve cuantas letras son iguales entre ambos (misma posicion).
// usar un 'for' y tener en cuenta que los textos pueden tener diferente tamaño
// Ejemplo: 'hola' y 'hola' devolvera 4
// Ejemplo: 'hola' y 'hola mundo' devolvera 4
// Ejemplo: 'hola' y 'mundo' devolvera 0
// Ejemplo: 'hola' y 'mundo hola' devolvera 0

// 47. funcion que recibe un texto1 y un texto2 y devuelve la posicion de la primera letra que no son iguales (usar un for ccomparando letra por letra y guardar la posicion que no coincide en una variable y salir del bucle)

// 48. funcion que recibe un texto con con espacion al principio y al final y devuelve el texto sin espacios al principio y al final (usar trim)

// 49. funcion que recibe un texto con numeros y devuelve el numero que esta en ese texto (usar Number)

// 50. funcion que recibe un texto con numeros y devuelve el numero que esta en ese texto (usar parseInt)

// 51. funcion que recibe un texto con numeros en hexadecimal (EJ: #FF00FF) y devuelve el numero entero que esta en ese texto (usar Number.parseInt con base 16)

// 52. funcion que recibe un array1 con strings y un texto devuelve la posicion del texto dentro del array1 (usar indexOf pero de array)

// 53. funcion que reccibe un numero no negativo e imprime en pantalla Oveja 1... Oveja 2... Oveja 3... con tantas veces como indique el numero

// 54. funcion que recibe 2 textos y devuelve true si las palabras de ambos textos comienzan con la misma letra (usar split, charAt y ===)
// hacerlo usando 'for' y luego hacerlo usando 'reduce' con '&&'

// 55. funcion que recibe un numero e indica si es par o impar (usar %)

// 56. funcion que recibe un año e indica que decada es (usar modulo % 10 y restarselo al año)

// 57. funcion que recibe un año lo convierta a texto (usar toString), le quite las ultimas 2 letras y lo reconvierta a numeros (usar Number)
// Ejemplo: 2021 devolvera 20
// Ejemplo: 1921 devolvera 19
// Ejemplo: 1615 devolvera 16

// 58. funcion que recibe un año e indica que siglo es, recordar que los siglos comienzan en el año 1 (ayuda: sumar 99 al año y efectuar mismo que antes)
// Ejemplo:
// el año 1 es del siglo 1,
// el año 100 tambien es del siglo 1,
// el año 101 es del siglo 2,
// el año 1900 es del siglo 19,
// el año 1901 es del siglo 20

// 59. funcion que recibe un texto y devuelve el numero de palabras que tiene (usar split y lenght)

// 60. funcion que recibe 3 numeros y devuelve si el primero es divisible por ambos otros dos (usar %)
// recordar que cuando un numero es divisible por otro el resto da 0

// 61. funcion que recibe 2 numeros y devuelve el resto que falta para llegar a sumar 180

// 62. funcion que recibe un array de numeros y devuelve un array del mismo tamaño con los numeros multiplicados por 2

// 63. funcion que recibe un array de numeros y devuelve un array del mismo tamaño que indica si el numero de cada posicion es par o impar (usar %)

// 64. funcion que recibe un array de numeros y devuelve un array del mismo tamaño que cada posicion indica si el numero es mayor o igual que 5
// Ejemplo:
// [    1,    5,    8,     3,     4,    7,    6,    7,    9,     2,     3]
// da como resultado:
// [false, true, true, false, false, true, true, true, true, false, false]

// 65. funcion que recibe un numero y devuelve un array del mismo tamaño con los numeros del 1 al numero indicado
// Ejemplo:
// 5
// da como resultado:
// [1, 2, 3, 4, 5]

// 66. funcion que recibe un string de dinero en pesos (enteros) y devuelve el numero de pesos (usar replace o slice)
// Ejemplo:
// '$1000'
// da como resultado:
// 1000

// 67. funcion que recibe un string de dinero en pesos (enteros) pero con separador de miles y devuelve el numero de pesos (usar replace y parce int)
// Ejemplo:
// '$1,000'
// da como resultado:
// 1000

// 68. funcion que recibe un string de dinero en pesos pero con separador de miles y centavos y devuelve el numero de pesos (usar replace y parceFloat)
// Ejemplo:
// '$1,050.73'
// da como resultado:
// 1050.73

// 69. funcion que recibe un string de dinero en pesos (enteros) y devuelve el precio en dolares (conversion dolar = 201.5)
// Ejemplo:
// '$1,000.00'
// da como resultado:
// '2015.5'

// 70. funcion que recibe un string de dinero en pesos pero con separador de miles y centavos y devuelve el numero de pesos entero (usar replace y parceFloat y Math.round)
// Ejemplo:
// '$1,000.73'
// da como resultado:
// 1000

// 71. funcion que recibe un string de dinero en pesos pero con separador de miles y centavos y devuelve el numero de centavos
// (ayuda: no usar slice para optener los centavos, a lo sumo solo usarlo para remover el signo $ o mejor aun usar replace para eso,
// usar parceFloat y luego Math.round para obtener la parte entera y restarla a la parte total, luego multiplicar por 100)
// Ejemplo:
// '$1,000.73'
// da como resultado:
// 73
// '$1,000.06'
// da como resultado:
// 6
// '$1,000.2'
// da como resultado:
// 20

// 72. funcion que recibe un array de numeros e indica si todos los numeros son consecutivos ( osea si estan ordenados de menor a mayor y de a uno en uno)
// Ejemplo:
// [1, 2, 3, 4, 5]
// da como resultado:
// true
// [1, 2, 6, 7, 9]
// da como resultado:
// false
// [1, 2, 3, 5, 4]
// da como resultado:
// false

// 73. funcion que recibe un array de numeros e indica a primer posicion donde los numeros dejan de ser consecutivos
//  (si todos son concecutivos devuelve -1)
// Ejemplo:
// [1, 2, 3, 5, 4]
// da como resultado:
// 3
// [1, 2, 3, 4, 5]
// da como resultado:
// -1

// 74. funcion que recibe un array de numeros e indica si todos los numeros estan ordenados de menor a mayor
// Ejemplo:
// [1, 3, 7, 8, 10]
// da como resultado:
// true
// [1, 3, 7, 10, 8]
// da como resultado:
// false

// 75. funcion que recibe un array de numeros e indica a primer posicion donde los numeros dejan de estar ordenados
//  (si todos estan ordenados devuelve -1)
// Ejemplo:
// [1, 3, 6, 5, 9, 11]
// da como resultado:
// 3
// [1, 3, 5, 6, 9, 11]
// da como resultado:
// -1

// 76. funcion que recibe un texto con signos de explamacion y los remueve pero siempre agrega un signo de explamacion al final
// Ejemplo:
// "Hi!" da como resultado "Hi!"
// "Hi!!!" da como resultado "Hi!"
// "!Hi" da como resultado "Hi!"
// "!Hi!" da como resultado "Hi!"
// "Hi! Hi!" da como resultado "Hi Hi!"
// "Hi" da como resultado "Hi!"

// 77. funcion que devuelve un numero decimal random del 0 al 1 (usar Math.random)

// 78. funcion que devuelve un numero decimal random del 0 al 100 (usar Math.random)

// 79. funcion que devuelve un numero decimal entero random del 0 al 100 (usar Math.random y Math.floor)

// 80. funcion que devuelve un numero entero random del 0 al 5 (usar Math.random y Math.floor)
// pero como string por su nombre: "Uno", "Dos", "Tres", "Cuatro", "Cinco"

// 81. funcion que recibe un array y devuelve un elemento random del array (usar Math.random, lenght y Math.floor)

// 82. funcion que devuelve un numero decimal random del 50 al 100
// (usar Math.random, recordar que da un valor de 0 a 1, multiplicar y sumar adecuadamente para que de un valor de 50 a 100)

// 83. funcion que recibe un array de palabras y devuelve si la primer palabra esta repetida en el array (usar indexOf con la posicion contando despues de la posicion de la primer palabra)

// 84. funcion que recibe un array de palabras y cuenta cuantas ves la primer palabra esta repetida en el array (usar indexOf con un bucle while, y un contador de veces repetidas)

// 85. funcion que recibe un array de palabras y devuelve si alguna palabra esta repetida en el array
// (ayuda: usar un forEach con su index y el metodo 'indexOf' usando como 2do parametro la posicion de la palabra que se busca si esta repetida + 1)
// (Este ejercicio es particularmente dificil, no te preocupes si no sale)

// 86. funcion que recibe una palabra y devuelve si es palindromo
// (osea si se lee igual de izquierda a derecha que de derecha aizquierda) (usar split, reverse y join y ===)

// Ejemplo:
// 'ana'
// da como resultado:
// true
// 'radar'
// da como resultado:
// true
// 'rodar'
// da como resultado:
// false

// 87. funcion que recibe un texto y un numero, y devuelve el texto repetido el numero de veces indicado
// Ejemplo:
// 'hola', 3
// da como resultado:
// 'holaholahola'

// 88. funcion que recibe un array de numeros y devuelve la suma de todos los numeros positivos

// 89. funcion que recibe un texto y retorna un texto que cambia todas las letras mayusculas por un signo de exclamacion!
// Ejemplo:
// 'HOLA MUNDO'
// da como resultado:
// '!!!! !!!!!'
// 'Hola Mundo'
// da como resultado:
// '!ola !undo'
// (ayuda, crear una variable que guarde el texto en mayusculas para comparar si la letra que estas probando actualmente es mayuscula o minuscula)

// 90. funcion que recibe un texto y retorna un texto que cambia todas las letras mayusculas por minusculas y las minusculas por mayusculas
// Ejemplo:
// 'HOLA MUNDO' da como resultado: 'hola mundo'
// 'Hola Mundo' da como resultado: 'hOLA mUNDO'
// 'HoLa MuNDOo' da como resultado: 'hOlA mUndO'

// Los objetos se representan con llaves {} y las propiedades se representan con comas
// Eentre las comas se  pone llave : valor. Ejemplo:
// const objeto = {
//   nombre: 'Juan', // La llave es 'nombre' y el valor es 'Juan'
//   edad: 30,
//   profesion: 'Desarrollador Web'
// }
// Para acceder a la propiedad nombre:
// objeto.nombre // Esto es 'Juan'
// Para acceder a la propiedad edad:
// objeto.edad
// Para acceder a la propiedad profesion:
// objeto.profesion
// Para cambiar la propiedad nombre:
// objeto.nombre = 'Pedro'
// Para cambiar la propiedad edad:
// objeto.edad = 40
// Para cambiar la propiedad profesion:
// objeto.profesion = 'Desarrollador Mobile'
// Para agregar una propiedad nueva:
// objeto.nuevaPropiedad = 'valor'
// Para eliminar una propiedad:
// delete objeto.nuevaPropiedad
// Para saber si una propiedad existe:
// objeto.hasOwnProperty('nombre')
// Para saber si una propiedad existe y es de solo lectura:
// objeto.propertyIsEnumerable('nombre')

const persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};

// 91. funcion que recibe un objeto con las propiedades nombre,
// apellido, edad y retorna un texto con el nombre completo

// 92. funcion que recibe un objeto con las propiedades nombre,
// apellido, edad y modifica el nombre y el apellido (no retorna nada, modifica el objeto)

// 93. funcion que recibe un objeto con las propiedades nombre,
// apellido, edad y modifica en el objeto la edad aumentada en 1 (no retorna nada)

// 94. funcion que recibe un objeto con las propiedades nombre,
// apellido, edad y retorna un objeto igual, pero con la edad aumentada en 1 (retorna un nuevo objeto, no modifica el original)

// Los objetos pueden tener funciones dentro de ellos,
// las funciones pueden acceder a las propiedades del objeto usando la palabra clave `this`
// solo si son del tipo `function`, si no son del tipo `function` no se pueden acceder a ellas

const persona2 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  saludar: function () {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  },
};

// 95. funcion que recibe un objeto con las propiedades nombre,
// apellido, edad y saludar. Y llama a la funcion saludar del objeto

// 96. funcion que recibe un objeto con las propiedades nombre,
// apellido, edad y saludar. Y cambia la funcion saludar del objeto
// por una funcion que retorna un texto con el nombre completo sin la edad
// Recordar que `this` es el objeto que se esta evaluando

// 97. funcion que recibe un objeto con las propiedades nombre,
// apellido, edad y saludar. Y cambia la funcion saludar del objeto
// por una funcion FLECHA que retorna un texto con el nombre completo sin la edad
// NO VA A FUNCIONAR con funcion FLECHA, HACERLO SOLO PARA PRACTICAR y PROBAR QUE muestra al saludar

// 98. funcion que recibe nombre, apellido y edad y devuelve un objeto con esas propiedades

// 99. funcion que recibe nombre, apellido y edad y devuelve un objeto con esas propiedades
// y la funcion saludar, que cuando se la llama retorna un texto con el nombre completo

const objeto1 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};
const objeto2 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};
const objeto3 = {
  nombre: "Juan",
  apellido: "Diaz",
  edad: 32,
};

// 100. funcion que recibe 2 objetos con las propiedades nombre, apellido y edad.
// Y compara si son iguales simplemente con ===. Retorna true o false
// Notar que siempre va a dar false y esta bien eso.
// Porque son objetos diferentes aunque sus propieedades sean las mismas

// 101. funcion que recibe 2 objetos con las propiedades nombre, apellido y edad.
// Y compara si son iguales esas propiedades. Retorna true o false
// Notar que no se puede comparar el objeto con el objeto simplemente usando ===,
// sino que hay que comparar cada una de sus propiedades ob1.nombre === ob2.nombre && ob1.apellido === ob2.apellido etc..

const objetoMisterioso = {
  a: 10,
  b: 22,
  c: 34,
  d: 46,
  e: 58,
};

// 102. funcion que recibe un objeto con propiedades desconocidas, y
//  retorna un array con las propiedades del objeto (llave y valor). Usar Object.entries(objeto)

// 103. funcion que recibe un objeto con propiedades desconocidas, y
// e imprime en consola los nombres de las keys del objeto. Usar Object.keys(objeto)
// y luego hacerlo usando  Object.entries(objeto) y recorrer el array con un forEach

// 104. funcion que recibe un objeto con propiedades desconocidas, y
// e imprime en consola los valores de las propiedades del objeto.
// Usar Object.values(objeto) y luego hacerlo usando Object.entries(objeto)
// y luego hacerlo usando Object.keys(objeto) (recorrer el array con un forEach)

// 105. funcion que recibe un objeto con propiedades desconocidas, y
// Y compara si son iguales sus propiedades. Retorna true o false
// (recorrer un array de Object.entries(objeto) con un forEach e ir comparando cada una de las propiedades
// si existe y es igual en el otro objeto y si llegan a ser diferentes retornar false, si no retorna true)

function crearAutoSimple(marca, modelo, color) {
  return {
    marca,
    modelo,
    color,
  };
}

// 106. Llamar a la funcion crearAutoSimple y pasarle los parametros
// "Ford", "Mustang", "Rojo" y imprimir el resultado en consola

function Auto(fabricante, modelo, color) {
  this.fabricante = fabricante;
  this.modelo = modelo;
  this.color = color;
}

// 107. Llamar a la funcion Auto con y pasarle los parametros
// "Ford", "Mustang", "Rojo" y imprimir el resultado en consola
// Notar que el resultado es undefined, porque no tiene retorno

// 108. Llamar a la funcion Auto agregando la palabra clave `new` antes y pasarle los parametros
// "Ford", "Mustang", "Rojo" y imprimir el resultado en consola
// Ejemplo: const auto1 = new Auto('Eagle', 'Talon TSi', 'Verde');
// Notar que el resultado es un objeto con las propiedades fabricante, modelo y color,
// porque con new se retorna el objeto `this` de la funcion

// 109. Leer https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/new

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  };
}

// 110. Llamar a la funcion Persona agregando la palabra clave `new` antes y pasarle los parametros
// "Martin", "Perez", 23. guardar el resultado en una variable. E imprimirla en consola
// Luego llamar a la funcion saludar d eesa variable

const objeto4 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};

// 111. funcion que recibe un objeto con las propiedades nombre, apellido, edad
// y agrega una variable altura y le asigna un valor de 170 (modifica el original)

// 112. funcion que recibe un objeto con las propiedades nombre, apellido, edad
// y agrega una funcion saludar que retorna un texto con el nombre completo sin la edad (modifica el original)

const perrito = {
  nombre: "Firulais",
  raza: "Chihuahua",
  edad: 2,
};

// 113. Funcion que recibe un objeto con las propiedades nombre, raza, edad y agrega la funcion ladrar
// que imprime en consola un texto "guau guau" (modifica el objeto original)

// 114. Funcion que recibe un objeto con las propiedades nombre, raza, edad y agrega la funcion hablar
// que imprime en consola un texto diciendo su nombre y su raza (modifica el objeto original)

function Perro(nombre, raza, edad) {
  this.nombre = nombre;
  this.raza = raza;
  this.edad = edad;

  this.hablar = function () {
    console.log(`${this.nombre} es un perro de raza ${this.raza}`);
  };
}

Perro.ladrar = function () {
  console.log("Guau Guau");
};

// 115. Llamar a Perro.ladrar() y ver si funciona

// 116. Llamar a la funcion Perro agregando la palabra clave `new` antes y pasarle los parametros
// "Firulais", "Chihuahua", 2. guardar el resultado en una variable. E imprimirla en consola

// 117. Llamar a la funcion Perro agregando la palabra clave `new` antes y pasarle los parametros
// "Firulais", "Chihuahua", 2. guardar el resultado en una variable llamada 'miPerro'.
// Luego llamar a la funcion hablar de esa variable
// Luego llamar a la funcion ladrar de esa variable. Notar que no funciona, porque la funcion ladrar no existe en el objeto this de miPerro
// Luego llamar a Perro.ladrar() y ver si funciona. Notar que funciona, porque la funcion ladrar esta definida para Perro (pero no en su this)

class Gato {
  constructor(nombre, color, edad) {
    this.nombre = nombre;
    this.color = color;
    this.edad = edad;
  }
  hablar() {
    console.log(`${this.nombre} es un gato de color ${this.color}`);
  }

  static maullar() {
    console.log("Miau miau");
  }
}

// 118. Llamar a la funcion Gato.maullar() y ver si funciona

// 119. Llamar a la clase Gato agregando la palabra clave `new` antes y pasarle los parametros
// "Minino", "Marron", 4. guardar el resultado en una variable llamada 'miGato' e imprimirla.
// Luego llamar a la funcion hablar de esa variable y ver si funciona
// Luego llamar a la funcion maullar de esa variable y ver que no funciona
// Luego llamar a la funcion Gato.maullar() y ver que efectivamente si funciona
// Notar lo similar que es Perro.ladrar() y Gato.maullar()

// 120. Leer https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

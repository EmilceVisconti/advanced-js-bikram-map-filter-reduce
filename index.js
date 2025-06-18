//RESUELVE LOS EJERCICIOS AQUI
//1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10],
// crea una función elevados que sea el resultado de elevar cada número a si mismo.
// .map () sirve para recorrer uno a uno los elementos de un array y los transforma 

const numbers = [4, 5, 6, 7, 8, 9, 10]
const elevados = numbers.map (num => num ** num);

console.log(elevados);


// 2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], 
// generar un segundo array que consiga generar de salida el resultado esperado.

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const foodMap = {
  'Pizza': 'Como soy de Italia, amo comer Pizza',
  'Ramen': 'Como soy de Japón, amo comer Ramen',
  'Paella': 'Como soy de Valencia, amo comer Paella',
  'Entrecot': 'Aunque no como carne, el Entrecot es sabroso'
};

const foodFrases = foodList.map(food => foodMap[food] || `amo comer ${food}`);

console.log(foodFrases);

// 3.-Dado el array staff, crear un segundo array que forme frases 
//como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  { name: 'Pepe', role: 'The Boss', hobbies: ['leer', 'ver pelis']},
  { name: 'Ana', role: 'becaria', hobbies: ['nadar', 'bailar']},
  { name: 'Luis', role: 'programador', hobbies: ['dormir', 'comprar']},
  { name: 'Carlos', role: 'secretario', hobbies: ['futbol', 'queso']},
];

const frasesMap = staff.map(persona => {
  let hobbies = '';
  for (let i = 0; i < persona.hobbies.length; i++) {
    hobbies += persona.hobbies[i];
    if (i < persona.hobbies.length - 1) {
      hobbies += ' y ';
    }
  }
  return `${persona.name} es ${persona.role} y le gusta ${hobbies}`;
});

console.log(frasesMap);

// 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
//usando filter()

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(num => num % 2 !== 0);

console.log(result4);

// 5.- 5.- Dado el array foodList2, genera un segundo array result5 
// que filtre los platos veganos y saque una sentencia como la del ejemplo
// ['Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!']
//filter sirve para seleccionar elementos, para crear un nuevo array? no puedo armar frases 

const foodList2 = [
  { name: 'Tempeh', isVeggie: true },
  { name: 'Cheesbacon burguer', isVeggie: false },
  { name: 'Tofu burguer', isVeggie: true },
  { name: 'Entrecot', isVeggie: false }
];
const soloVegano = foodList2.filter(item => item.isVeggie);
console.log(soloVegano);


 //6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], 
 //obten la multiplicación de todos los elementos del array
 //reduce()

const numeros = [39, 2, 4, 25, 62];

const resultado = numeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);

console.log(resultado); 

//7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  'Emi',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const oracionCompleta = sentenceElements.reduce((acumulado, palabraActual) => acumulado + ' ' + palabraActual);

console.log(oracionCompleta);

//8 Obtener el monto total de los elementos 
// que pertenecen a catergory "code" en el siguiente array.
const books = [
  { name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const codeTotal= books.reduce((total, book) => {
  return book.category === 'code' ? total + book.price : total;
}, 0);

console.log(codeTotal);

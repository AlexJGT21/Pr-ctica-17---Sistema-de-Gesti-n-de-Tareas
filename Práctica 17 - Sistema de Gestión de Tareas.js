
// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) { 
  //Usamos el 'of' usando la el .(punto) para poder acceder a las propiedades del objeto,
  for(let i of lista){
    //Aquí por cada valor de "i", usamos "." para acceder al valor de la "clave" que nosotros indiquemos
    console.log(i.nombre , " ", i.completada);    
  }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  //Usamos la función filter que nos permite recorrer un iterable 
  //Que lo condicionamos con un booleano para que solo nos devuelva
  //Los objetos que cumplan esta propiedad
  //Devolviendonos un arreglo nuevo de la lista original pero con los objetos que cumplieron la condición.
  return lista.filter(tarea => tarea.completada === true)
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  //Usamos la función filter que nos permite recorrer un iterable
  //En esta ocasión, solo permite filtrar las tareas que son estrictamente iguales
  //A falsas para que se agreguen a la nueva lista.
    return lista.filter(tarea => tarea.completada === false);
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  //Usamos la función "map", que usamos para mapear una propiedad especifica en este caso
  //Se crea una lista nueva con los valores que nosotros le indicamos con "."
    return lista.map(tarea => tarea.nombre);
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  //Usamos la función length para que nos devuelva el total de elementos de un arreglo.
  console.log("Total de tareas: ", lista.length);
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

//Aquí se creo un objeto que tiene funciones que son llamadas internamente
//llamando a otras funciones
//Por ejemplo: "mostrarTareas" es una function que llama a otra función
const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    console.log(obtenerCompletadas(this.tareas));
  },

  mostrarPendientes: function() {
    console.log(obtenerPendientes(this.tareas));
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

//Se crea un condicional que si el length del arreglo es estrictamente igual a 0
//Significa que el arreglo no tiene objetos
if(tareas.length === 0) {
    console.log("No hay tareas.");
    //En esta segunda condición si todas las tareas estan completadas, se muestre un mensaje.
} else if (tareas.completada === true) {
    console.log("Todas las tareas estan completadas");
}

// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

//Uso de switch
//Esta es otra estructura condicional que se basa en las opciones (como el if)
//La unica diferencia de esta es su sintaxis y como se ejecutan las tareas
//Funciona con "interruptores" que ejecutaran una parte de codigo especifica 
//cuando le mandemos una opción deseada.
const opcion = 1;

switch (opcion) {
  case 1:
    mostrarTareas(tareas);    
    break;

  case 2:
    console.log(mostrarCompletadas(tareas));    
    break;

  case 3:
    console.log(obtenerPendientes(tareas));
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log("---PRUEBAS---");

console.log(mostrarTareas(tareas));
console.log("****************************");
console.log(obtenerCompletadas(tareas));
console.log("****************************");
console.log(obtenerPendientes(tareas));
console.log("****************************");
console.log(obtenerNombres(tareas));
console.log("****************************");
console.log(contarTareas(tareas));
sistema.mostrarCompletadas();
sistema.mostrarPendientes();
sistema.mostrarTareas();
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Prueba 
// Declarando Array para almacenar nombres de amigos
let amigos = [];
// Uniendo HTML CON JS y probando cambiar titulo. document.querySelector('h1'); la borré porque ahora hice funcion para cambiar titulos


// Habilitar botones


// Función para modificar titulos, es una funcion con parametros para poder reutilizarla, parametros me refiero a los que estan dentro del parentesis h1 y h2 o p.
function asignarTextoElemento(elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
// Función para agregar amigos
function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;
// Ahora vamos a hacer que la funcion haga alguna accion, ejemplo como en la clase, pusimos un alert y que el alert muestra al usuario un mensaje en este caso al dar click en el boton y decia click desde el boton alert('click desde el boton')

// Una vez que la persona captura nombre, checamos si no esta el campo vacio
if(nombreDeAmigo === ''){
    alert('Por favor ingresa un nombre');
    return;
} 
// Si no esta vacio, entonces lo agregamos al array de amigos
amigos.push(nombreDeAmigo);
// Ahora vamos a mostrar la lista de amigos en la consola
console.log('Agregaste a: ' + nombreDeAmigo);

//Ahora limpio la casilla
document.getElementById('amigo').value = '';
mostrarAmigos(); // SI SE PUEDE LLMAR UNA FUNCION DENTRO DE OTRA FUNCION
} 

// Función para mostrar la lista de amigos
function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiamos la lista de amigos una vez que ingresaron

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
} 

    // Funcion para sortear y mostrar al ganador
function sortearAmigo(){
        if(amigos.length === 0){
            alert('Primero agrega amigos');
            return;
        }
    
// Generar el amigo aleatorio
let indice = Math.floor(Math.random() * amigos.length);
let amigoSorteado = amigos[indice];

// Mostrar al amigo sorteado
let resultadoGanador = document.getElementById('resultado');
resultadoGanador.innerHTML = '';

let li = document.createElement('li');
li.textContent = amigoSorteado;
resultadoGanador.appendChild(li);

    }   

// Llamo a la primer funcion del titulo
// Puedo llamar a la funcion hasta al final porque mientras este fuera de las llaves, se puede hacer porque JS primero trabaja secuencialmente de arriba hacia abajo, va leyendo de linea 1 a linea 2, en tema de funciones lo primero que hace es ver si hay funciones declaradas o definidas, las lee y las deja por ahi listas para cuando sean llamadas en cualquier momento ES LO LLAMADO HOISTING.
asignarTextoElemento('h1','Juego secreto por Aldooo');
// Llamo a la segunda funcion para modificar las instrucciones
asignarTextoElemento('h2','Agrega el nombre de tus amigos porfa');

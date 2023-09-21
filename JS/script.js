// Crear un elemento h1
var h1 = document.createElement("h1");
h1.textContent = "Our Team";

// Crear un elemento h2 con texto lorem ipsum
var h2 = document.createElement("h2");
h2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac libero a ipsum bibendum euismod. ";

// Obtener el contenedor div con clase "container"
var container = document.querySelector(".container");

const user = {
  foto: ,
  nome: `Wayne Barngggett`,
  posto: `Founder & CEO`,
} 
// Agregar los elementos h1 y h2 al contenedor
container.appendChild(h1);
container.appendChild(h2);
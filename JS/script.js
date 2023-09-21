/* 1. creare i testi in h1 e h2 
2. organizare la informazione fornita in array come oggeti
3. stampare ogni oggetto nella console per verificare la informazione
4. con l'uso di bootstrap creare la card
5. riempire la car con i datti generici e inserire i oggeti specifici dove vano */
// 1.
var h1 = document.createElement("h1");
h1.textContent = "Our Team";

var h2 = document.createElement("h2");
h2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac libero a ipsum bibendum euismod. ";

var container = document.querySelector(".container");

container.appendChild(h1);
container.appendChild(h2);
// 2.
const team =[
  {
  foto: 'wayne-barnett-founder-ceo.jpg',
  name: 'Wayne Barnett',
  role:'CEO & Founder' ,
},
{
  foto: 'angela-caroll-chief-editor.jpg',
  name : 'Angela Caroll',
  role: 'Chief Editor',
},
{
  foto: 'walter-gordon-office-manager.jpg',
  name : 'Walter Gordon',
  role: 'Office Manager'  
},
{
  foto: 'angela-lopez-social-media-manager.jpg',
  name : 'Angela Lopez',
  role: 'Social Media Manager'  
},
{
  foto: 'scott-estrada-developer.jpg',
  name : 'Scott Estrada',
  role: 'Developer'  
},
{
  foto: 'barbara-ramos-graphic-designer.jpg',
  name : 'Barbara Ramos',
  role: 'Graphic Designer'  
},]

const deck = document.getElementById('cardsdeck')
deck.innerHTML += `<div id= "deck-manager" class="row row-cols-1 row-cols-md-3 mx-5 g-4"></div>`
const manager = document.getElementById('deck-manager')
 for(let member of team){
  // 3.
  console.log(member)
  manager.innerHTML += 
  // 4. 5.
  `<div class="col">
    <div class="card border-0 rounded-0">
      <img src="./img/${member.foto}" class="card-img-top rounded-0" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">${member.name}</h5>
        <p class="card-text text-center">${member.role}</p>
      </div>
    </div>
  </div>`
 }

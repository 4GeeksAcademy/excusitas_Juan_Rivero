import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  //write your code here
  
  let randomwho = Math.floor (Math.random () * 4);
  let excusewho = who[randomwho];

  console.log(randomwho);
  console.log(excusewho);

  let randomaction = Math.floor (Math.random () * 4);
  let excuseaction = action[randomaction];

  console.log(randomaction);
  console.log(excuseaction);

  let randomwhat = Math.floor (Math.random () * 3);
  let excusewhat = what[randomwhat];

  console.log(randomwhat);
  console.log(excusewhat);

  let randomwhen = Math.floor (Math.random () * 5);
  let excusewhen = when[randomwhen];

  console.log(randomwhen);
  console.log(excusewhen);

  let excusita = excusewho + " " + excuseaction + " " + excusewhat + " " + excusewhen;
  console.log (excusita);
  
  
  let excusitasjuanito = document.getElementById("excusazahtml");
  excusitasjuanito.innerHTML = excusita;
};

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
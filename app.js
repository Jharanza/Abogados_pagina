let parrafoUno = document.getElementById('parrafo1');
//parrafoUno.innerHTML = 'Parrafo 1 manipulado por JS con el ID';

let parrafoDos = document.getElementsByClassName('parrafo');
//parrafoDos[1].innerHTML = 'Párrafo 2 manipulado por JS con la clase';

let parrafoTres = document.getElementsByTagName('p');
//parrafoTres[2].innerHTML = 'Párrafo 3 manipulado por JS con la etiqueta p';


let parrafo01 = document.querySelector('#parrafo1');
parrafo01.innerHTML = 'Párrafo manipulado por query';

let parrafo02 = document.querySelectorAll('.parrafo');
const parr2Arr = [...parrafo02];
parr2Arr[1].innerHTML = "Manipulado por clase y transformado en array"

let parrafoCuatro = document.createElement('p');
let padre = document.querySelector('.padre');
padre.appendChild(parrafoCuatro);
parrafoCuatro.innerHTML = "Parrafo 4 creado con JS"

let parrafoCero = document.createElement('p');
padre.insertBefore(parrafoCero, parrafoUno);

parrafoCuatro.setAttribute('class', 'parrafo');
parrafoCuatro.setAttribute('id', 'parrafo4');

padre.replaceChild(parrafoCuatro, parrafoCero);

let botonSaludo = document.getElementById('saludoBtn');

botonSaludo.addEventListener('click', () => {
  console.log('Hola desde esta función');
});

botonSaludo.addEventListener('contextmenu', () => {
  console.log("Hola desde el botón derecho");
})

let userInput = document.getElementById('texto');
userInput.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    console.log(event.target.value);
  }
})

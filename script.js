
//Ejercicio 1
let body = document.body;
let cuadrado1 = document.querySelector('.cuadrado1');
cuadrado1.addEventListener('click', function () {
    body.style.backgroundColor = '#FF1A1A';

});

let cuadrado2 = document.querySelector('.cuadrado2');
cuadrado2.addEventListener('click', function () {
    body.style.backgroundColor = '#2025F9';

});

let cuadrado3 = document.querySelector('.cuadrado3');
cuadrado3.addEventListener('click', function () {
    body.style.backgroundColor = '#1AEA29';

});


//Ejercicio 2

let textarea = document.getElementById('textarea');
let contadorCaracteres = document.getElementById('contador');

textarea.addEventListener('input', function () {
    let longitudTexto = textarea.value.length;

    contadorCaracteres.textContent = longitudTexto;
});
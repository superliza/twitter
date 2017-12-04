//se traen los elementos del html que se modificarán o tendrán algún suceso (evento)
var formulary = document.getElementById('formulary');

//creamos elementos hijos del elemento que llamé anteriormente
var form = document.createElement('form');
var textArea = document.createElement('textarea');
var input = document.createElement('input');

//se crean atributos a los elementos creados
textArea.id = "text";
//textArea.setAttribute('value', " ");
//console.log(textArea);
input.id = "send-tweet";
input.setAttribute('type', 'submit');
input.setAttribute('value', 'Tweet');
//console.log(input);

//agregamos eventos
textArea.addEventListener('click', disabledButton);

//especificamos dónde se van a agregar los elementos creados
formulary.appendChild(form);
form.appendChild(textArea);
form.appendChild(input);

//especificamos que función realizará el evento.
function disabledButton(e) {
  e.preventDefault(); //prevenimos algunas funciones que los eventos crean por defecto.
  if (document.getElementById('text').value == "" || document.getElementById('text').length > 140) {
    //console.log('hola');
    //input.setAttribute('disabled', 'disabled');
    input.disabled = true;
    //document.getElementById("send-tweet").disabled = true;
  } else {
    //console.log(hola);
    //input.removeAttribute('disabled',);
    input.disabled = false;
    //document.getElementById("send-tweet").disabled = false;
  }

};

//textArea.addEventListener('click', disabledButton);

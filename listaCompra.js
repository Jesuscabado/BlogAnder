//Por qué es getElementById y no setElementById
//Cómo funciona .innerHTML
let boton = document.getElementById("guardar");
boton.addEventListener("click", guardarElemento);

function guardarElemento() {
  let text = document.getElementById("input").value.trim();
  let textToCheck = text.replace(/\s/g, "");
  if (textToCheck < 2) {
    return;
  }
  if (alreadyExist(text)) {
    return;
  }
  let li = document.createElement("li");
  let icono = document.createElement("i");
  icono.classList.add("fa", "fa-trash");
  li.innerText = text;
  li.appendChild(icono);
  li.addEventListener("click", clickImportant);
  document.getElementById("lista").appendChild(li);
  document.getElementById("input").value = "";
}
function clickImportant(event) {
  console.log(event.target);
  let element = event.target;
  if (element.classList.contains("fa-trash")) {
    deleteParent(element);
    return;
  }
  toggleImportant(event.target); //esto no sé yo
}

function toggleImportant(element) {
  element.classList.toggle("important");
}

function deleteParent(element) {
  let parent = element.parentElement;
  let text = parent.innerText;
  if (confirm("¿deseas borrar este elemento? \n" + text)) {
    parent.remove();
  }
}

function alreadyExist(text) {
  let lista = document.getElementById("lista");
  let elementosLista = lista.getElementsByTagName("li");
  for (let i = 0; i < elementosLista.length; i++) {
    if (text === elementosLista[i].innerText) {
      return true;
    }
  }
  return false;
}

function ValidarTexto() {
  const input = document.getElementById("titulo").value;
  if (input === "") {
    alert("debes postear algo primero");
    return false;
  }
  return true;
}

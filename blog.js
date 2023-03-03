//evento para submit
let form = document.getElementById("blogForm");
form.addEventListener("submit", createPost);

function createPost(event) {
  event.preventDefault();
  let titulo = document.getElementById("titulo").value.trim();
  let contenido = document.getElementById("contenido").value.trim();
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let article = document.createElement("article");
  let iconoEditar = crearIcono("fa-pencil",updatePost);
  let iconoBorrar = crearIcono("fa-trash",deletePost);
  h3.innerText = titulo;
  p.innerText = contenido;
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(iconoEditar);
  article.appendChild(iconoBorrar);
  nuevosBlog.insertBefore(article, nuevosBlog.children[1]);
  iconoBorrar.addEventListener("click", deletePost);
  document.getElementById("blogForm").reset();
}

function crearIcono(simbolo,callback){
  let icono = document.createElement("i");
  icono.classList.add("fa", simbolo);
  icono.addEventListener("click", callback);
  return icono;
}

function deletePost(event) {
  let element = event.target;
  let parent = element.parentElement;
  let text = parent.getElementsByTagName("h3")[0].innerText; 
  if (confirm("¿deseas borrar este elemento? \n" + text)) {
    parent.remove();
  }
}

function cancelEdit(event,textoTitulo,textoParrafo) {
  let element = event.target;
  let parent = element.parentElement;
  let titulo = document.createElement("h3");
  let parrafo = document.createElement("p");
  titulo.innerText = textoTitulo;
  parrafo.innerText = textoParrafo;
  parent.appendChild(titulo);
  parent.appendChild(parrafo);
  parent.getElementsByTagName("input")[0].remove();
  parent.getElementsByTagName("textarea")[0].remove();
  let iconoEditar = crearIcono("fa-pencil",updatePost);
  parent.appendChild(iconoEditar);
  element.remove();
}

function updatePost(event){
  console.log(event);
  console.log(event.target);
  let element = event.target;
  let parent = element.parentElement;
  let titulo = parent.getElementsByTagName("h3")[0].innerText;
  let texto = parent.getElementsByTagName("p")[0].innerText;
  let inputTitulo = document.createElement("input");
  let textArea = document.createElement("textarea");
  let br = document.createElement("br");

  let iconoCancelar = crearIcono("fa-close",function(event){
    cancelEdit(event,titulo,texto);
  })

  element.remove();
  inputTitulo.setAttribute("type", "text");
  inputTitulo.value = titulo;
  textArea.value = texto;
  parent.appendChild(inputTitulo);
  parent.appendChild(br);
  parent.appendChild(textArea);
  parent.appendChild(iconoCancelar);
  
  let titulo1 = parent.getElementsByTagName("h3")[0];
  titulo1.remove();
  parent.getElementsByTagName("p")[0].remove();
  
  
}


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
  let icono = document.createElement("i");
  icono.classList.add("fa", "fa-trash");
  h3.innerText = titulo;
  p.innerText = contenido;
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(icono);
  nuevosBlog.insertBefore(article, nuevosBlog.children[1]);
  icono.addEventListener("click", deletePost);
  document.getElementById("blogForm").reset();
}

function deletePost(event) {
  let element = event.target;
  let parent = element.parentElement;
  parent.remove();
  let text = parent.getElementsByTagName("h3")[0].innerText;
  if (confirm("¿deseas borrar este elemento? \n" + text)) {
    parent.remove();
  }
}

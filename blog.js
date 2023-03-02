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
  h3.innerText = titulo;
  p.innerText = contenido;
  article.appendChild(h3);
  article.appendChild(p);
  nuevosBlog.appendChild(article);
  document.getElementById("blogForm").reset();
}

document.querySelector("#btn").onclick = function() {

    let texto = document.querySelector("#tarea").value;

    let li = document.createElement("li");

    let contenido = document.createTextNode(texto);

    li.appendChild(contenido);

    document.querySelector("#lista").appendChild(li);

}
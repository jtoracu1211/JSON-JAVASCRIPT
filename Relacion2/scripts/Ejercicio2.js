function añadir() {

    let texto = document.querySelector("#texto").value;

    let ul = document.querySelector("ul");

    let li = document.createElement("li");

    let t = document.createTextNode(texto);

    li.appendChild(t);

    ul.appendChild(li);

}
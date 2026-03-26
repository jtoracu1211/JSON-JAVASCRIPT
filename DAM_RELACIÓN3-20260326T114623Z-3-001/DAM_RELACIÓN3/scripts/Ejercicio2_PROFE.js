//Constante para el elemento principal
const principal = document.querySelector("#mensajes");

// Ruta del archivo JSON local
const requestURL = "../json/datos_EJ2.json";

// Cargar el JSON con fetch()
async function cargarJSON() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();

    generaListaMensajes(data);
  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function generaListaMensajes(listaDeMensajes) {
  
 
  listaDeMensajes.forEach((mensajeUni) => {

    
     //Creando nueva seccion para cada iteración
     const sec=document.createElement("section");

    //Creando elementos para el para y el de
    const div_personas = document.createElement("div");
    const h3_para = document.createElement("h3");
    const h3_de = document.createElement("h3");

    div_personas.setAttribute("class","estiloPersonas");

    //Sacando contenido del JSON para los datos finales
    const texto_para = document.createTextNode("Para: " + mensajeUni.para);
    const texto_de = document.createTextNode("De: " + mensajeUni["de"]);

    //Añadiendo elementos a su nodo padre
    h3_para.append(texto_para);
    h3_de.append(texto_de);

    div_personas.append(h3_para, h3_de);

    //Creando elementos para el titulo y contenido
    const div_mensaje = document.createElement("div");
    const p_titulo = document.createElement("p");
    const p_contenido = document.createElement("p");

    //Sacando contenido del JSON para los datos finales
    const texto_titulo = document.createTextNode(mensajeUni.titulo);
    const texto_contenido = document.createTextNode(mensajeUni["contenido"]);

    //Añadiendo elementos a su nodo padre
    p_titulo.append(texto_titulo);
    p_contenido.append(texto_contenido);

    div_mensaje.append(p_titulo, p_contenido);

    sec.append(div_personas, div_mensaje);

    principal.append(sec);
  });
}

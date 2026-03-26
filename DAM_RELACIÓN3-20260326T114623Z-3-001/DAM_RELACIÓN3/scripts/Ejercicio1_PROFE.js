//Constante para el elemento principal
const principal=document.querySelector("#mensajes");

// Ruta del archivo JSON local
const requestURL = "../json/datos_EJ1.json";


// Cargar el JSON con fetch()
async function cargarJSON() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();

    generaMensaje(data);
  

  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function generaMensaje(datosDelMensaje) {

  //Consola para ver al inspeccionar  
  console.log(datosDelMensaje);

   //Creando elementos para el para y el de
  const div_personas=document.createElement("div");
  const h3_para=document.createElement("h3");
  const h3_de=document.createElement("h3");


  //Sacando contenido del JSON para los datos finales
  const texto_para=document.createTextNode("Para: "+datosDelMensaje.para);
  const texto_de=document.createTextNode("De: "+datosDelMensaje["de"]);


  //Añadiendo elementos a su nodo padre
  h3_para.append(texto_para);
  h3_de.append(texto_de);

  div_personas.append(h3_para,h3_de);

  //Creando elementos para el titulo y contenido
  const div_mensaje=document.createElement("div");
  const p_titulo=document.createElement("p");
  const p_contenido=document.createElement("p");


  //Sacando contenido del JSON para los datos finales
  const texto_titulo=document.createTextNode(datosDelMensaje.titulo);
  const texto_contenido=document.createTextNode(datosDelMensaje["contenido"]);


  //Añadiendo elementos a su nodo padre
  p_titulo.append(texto_titulo);
  p_contenido.append(texto_contenido);

  div_mensaje.append(p_titulo,p_contenido);

  principal.append(div_personas,div_mensaje);

}

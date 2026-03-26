const principal = document.querySelector("main");

// Ruta del archivo JSON local
const requestURL = "../json/ejercicioExamen.json";

// Cargar el JSON con fetch()
async function cargarJSON() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();

    mostrarDatos(data);
  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function mostrarDatos(jsonObj) {

    
  jsonObj.forEach((videoJ) => {
    //Datos principales del videojuego
    const sec = document.createElement("section");
    const h3_n = document.createElement("h3");
    const h3_est = document.createElement("h3");
    const h3_anio = document.createElement("h3");

    const nom_text = document.createTextNode(videoJ["nombre"]);
    const est_text = document.createTextNode(videoJ["estudio"]);
    const an_text = document.createTextNode(videoJ["anio"]);

    h3_n.append(nom_text);
    h3_est.append(est_text);
    h3_anio.append(an_text);

    sec.append(h3_n, h3_est, h3_anio);    

    //Plataformas

    const div_plat = document.createElement("div");
    div_plat.setAttribute("id", "plataformas");

    for (const plat of videoJ["plataformas"]) {
      const spa_pla = document.createElement("span");
      const pla_text = document.createTextNode(plat);
      spa_pla.append(pla_text);

      div_plat.append(spa_pla);
    }

    sec.append(div_plat);

    //Valoraciones

    const arti_valoraciones = document.createElement("article");

    videoJ["valoraciones"].forEach((valoracionUni) => {
      const div_valoracion = document.createElement("div");

      div_gam = document.createElement("div");
      div_jug = document.createElement("div");
      div_dis = document.createElement("div");
      div_his = document.createElement("div");

      console.log(valoracionUni);

      const gam_text = document.createTextNode("Gamer:" + valoracionUni.gamer);
      const jug_text = document.createTextNode(
        "Jugabilidad:" + valoracionUni.jugabilidad,
      );
      const dis_text = document.createTextNode(
        "Diseño:" + valoracionUni.disenio,
      );
      const his_text = document.createTextNode(
        "Historia:" + valoracionUni.historia,
      );

      div_gam.append(gam_text);
      div_jug.append(jug_text);
      div_dis.append(dis_text);
      div_his.append(his_text);

      div_valoracion.append(div_gam);
      div_valoracion.append(div_jug);
      div_valoracion.append(div_dis);
      div_valoracion.append(div_his);

      arti_valoraciones.append(div_valoracion);
    });

    sec.append(arti_valoraciones);
    principal.append(sec);

  });  
}

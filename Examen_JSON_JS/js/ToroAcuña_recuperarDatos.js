const sec_dato = document.querySelector("#datos");
const sec_excursiones = document.querySelector("#excursiones");

const requestURL = "../json/ToroAcuña_ofertas.json";

async function cargarJSON() {
    try {
        const response = await fetch(requestURL);
        const data = await response.json();
        mostrarDatos(data);
        mostrarExcursiones(data);
    } catch (error) {
        console.error("Error cargando el JSON:", error);
    }
}

cargarJSON();

function mostrarDatos(jsonObj) {
    const h1_nombre = document.createElement("h1");
    const div_info = document.createElement("div");
    const h2_contacto = document.createElement("h2");
    const p_telefono = document.createElement("p");
    const p_email = document.createElement("p");

    const nom_text = document.createTextNode(jsonObj["nombre"]);
    const h2_contacto_text = "Información de contacto";
    const tel_text = document.createTextNode(jsonObj["informacion"]["telefono"]);
    const email_text = document.createTextNode(jsonObj["informacion"]["email"]);

    h1_nombre.append(nom_text);
    h2_contacto.append(h2_contacto_text);
    p_telefono.append(tel_text);
    p_email.append(email_text);

    div_info.append(h2_contacto, p_telefono, p_email);
    sec_dato.append(h1_nombre, div_info);
}

function mostrarExcursiones(jsonObj) {
    jsonObj["excursiones"].forEach((excursion) => {
        const card_excursion = document.createElement("card");
        
        const h3_destino = document.createElement("h3");
        const h3_pais = document.createElement("h3");
        const h3_precio = document.createElement("h3");

        const destino_text = document.createTextNode(excursion["destino"]);
        const pais_text = document.createTextNode(excursion["pais"]);
        const precio_text = document.createTextNode(excursion["precio"]);

        h3_destino.append(destino_text);
        h3_pais.append(pais_text);
        h3_precio.append(precio_text);

        card_excursion.append(h3_destino, h3_pais, h3_precio);

        const div_act = document.createElement("div");

        for (const act of excursion["actividades"]) {
            const spa_act = document.createElement("span");
            const act_text = document.createTextNode(act);

            spa_act.append(act_text);

            div_act.append(spa_act);
        }

        card_excursion.append(div_act);

        sec_excursiones.append(card_excursion);
    });
}
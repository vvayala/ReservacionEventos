class Evento {
    constructor(nombre, fecha, sala, capacidad) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.sala = sala;
        this.capacidad = capacidad;
    }
}

const eventos = [];

//Elementos del DOM
const agregarEventoform = document.getElementById("agregarEventoform");
const listaEventos = document.getElementById("listaEventos");
const selectEvento = document.getElementById("selectEvento");

//Renderizar eventos en pantalla
function renderEventos() {
    listaEventos.innerHTML = "";
    selectEvento.innerHTML = '<option value="">-- Selecciona un evento --</option>';

    if (eventos.length === 0) {
        listaEventos.innerHTML = "<p class='text-muted'>No hay eventos aún.</p>";
        return;
    }

    eventos.forEach((evento, index) => {
        //Creamos la tarjeta del evento
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${evento.nombre}</h5>
        <p class="card-text">${evento.fecha}</p>
        <p class="card-text">Sala: ${evento.sala}</p>
        <p class="card-text">Capacidad: ${evento.capacidad}</p>
      </div>
    `;
        listaEventos.appendChild(card);

        //Agregar al select
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${evento.nombre} - ${evento.fecha}`;
        selectEvento.appendChild(option);
    });
}

//Agregamos un nuevo evento
agregarEventoform.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const sala = document.getElementById("sala").value;
    const capacidad = document.getElementById("capacidad").value;

    const nuevoEvento = new Evento(nombre, fecha, sala, capacidad);
    eventos.push(nuevoEvento);

    renderEventos();
    agregarEventoform.reset();
});

//Seleccionamos el evento
selectEvento.addEventListener("change", () => {
    if (selectEvento.value !== "") {
        const eventoSeleccionado = eventos[selectEvento.value];
        alert(
            `Has seleccionado: ${eventoSeleccionado.nombre} el ${eventoSeleccionado.fecha}`
        );
    }
});
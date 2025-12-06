const INFO_EVENTO = document.getElementById('info-evento')
const INFO_EVENTO_CONTAINER = document.getElementById('info-evento-container')
const CLOSE_BUTTON = document.getElementById('close-event')
const EVENTS = document.getElementById('eventos-container')
const EVENTS_HTML = document.getElementsByClassName('evento')

const events = [
    {
        id: 1,
        titulo: "Evento 1",
        fecha: "Lun 01/01/26",
        descripcion: "Este es el evento numero 1"
    },
    {
        id: 2,
        titulo: "Evento 2",
        fecha: "Lun 02/02/26",
        descripcion: "Este es el evento numero 2"
    },
    {
        id: 3,
        titulo: "Evento 3",
        fecha: "Lun 03/03/26",
        descripcion: "Este es el evento numero 3"
    },
    {
        id: 4,
        titulo: "Evento 4",
        fecha: "Lun 04/04/26",
        descripcion: "Este es el evento numero 4"
    },
    {
        id: 5,
        titulo: "Evento 5",
        fecha: "Lun 05/05/26",
        descripcion: "Este es el evento numero 5"
    },
]

const eventInfo = event => {
    INFO_EVENTO.style.display = ''
}

events.forEach(event => {
    EVENTS.innerHTML += `
    <div id="evento-${event.id}" class="evento appear">
        <h2>${event.titulo}</h2>
        <p><b>${event.fecha} | </b>${event.descripcion}</p>
    </div>
    `
})

for (let i = 0; i < EVENTS_HTML.length; i++) {
    const EVENT = EVENTS_HTML[i]
    console.log(EVENT.children[0])
    
    EVENT.children[0].addEventListener('click', () => eventInfo(EVENT))
}

CLOSE_BUTTON.addEventListener('click', () => {
    INFO_EVENTO.style.display = 'none'
})

console.log(EVENTS)
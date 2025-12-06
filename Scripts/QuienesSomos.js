const RETOS_BUTTON = document.getElementById('retos-fabio')
const DISCORD_BUTTON = document.getElementById('discord-button')
const INSTAGRAM_BUTTON = document.getElementById('instagram-button')
const EVENTOS_BUTTON = document.getElementById('eventos-button')
const ACTIVIDADES_PROYECTOS_BUTTON = document.getElementById('actividades-proyectos-button')

const openWindow = url => {
    window.open(url, "_blank")
}

RETOS_BUTTON.addEventListener('click', () => openWindow('https://discord.com/channels/1374849461586497638/1375856026254970890'))

ACTIVIDADES_PROYECTOS_BUTTON.addEventListener('click', () => openWindow('../Pages/ActividadesYProyectos.html'))
EVENTOS_BUTTON.addEventListener('click', () => openWindow('../Pages/CalendarioYEventos.html'))

DISCORD_BUTTON.addEventListener('click', () => openWindow('https://discord.com/channels/1374849461586497638/1374849462173958149'))
INSTAGRAM_BUTTON.addEventListener('click', () => openWindow('https://www.instagram.com/club.program/'))
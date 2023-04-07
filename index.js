const messages = [
    'Happy Birthday Bryan',
    'Happy Birthday Tom',
    'Happy Birthday to ME 😁😆'
];

const i = messages.length;
const s = Math.floor(Math.random() * i);

document.getElementById('msg')
.innerHTML = '" '  + messages[s] + ' "';
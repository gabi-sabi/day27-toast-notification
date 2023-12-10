const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Next month you will get promotion at work.',
    'Next month you will meet love of your life.',
    'Next month you will adopt a cute bunny.',
    'Next month you will win a lottery.',
    'Next month you will sit on a melted chocolate bar.',
    'Next month you will forget to buy toilet paper.',
    'Next month you will find a treasure chest.',
    'Next month you will have healthy gloving skin.',
    'Next month you will befriend a squirrel.',
]



const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}

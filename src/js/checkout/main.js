import '/src/css/globals.css'
import '/src/css/checkout.css'

const toggleButton = document.getElementsByClassName('nav-toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

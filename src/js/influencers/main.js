import '/src/css/globals.css'
import '/src/css/influencers.css'
import '/src/css/how-it-works.scss'
import '/src/css/footer.scss'

const toggleButton = document.getElementsByClassName('nav-toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

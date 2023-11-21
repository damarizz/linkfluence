import '/src/css/globals.css'
import '/src/css/brand.css'

const toggleButton = document.getElementsByClassName('nav-toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

const dynamicText = document.querySelector("h1 span");
const words = ["Sponsors", "Testimonios", "Colaboraciones"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    console.log(currentWord, currentChar);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

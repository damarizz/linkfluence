import '/src/css/globals.css'
import '/src/css/landing.scss'
import '/src/css/checkout.css'
import '/src/css/how-it-works.scss'
import '/src/css/footer.scss'

const feed = document.getElementById('influencers-feed')

const influencers = [
  {
    img: "/influencers/osito-peru.jpg",
    title: 'Osito Perú',
    location: "Perú",
    interests: "Humor, Vlogs",
    prices_from: 1200,
    social_media: "Instagram, YouTube"
  },
  {
    img: "/influencers/cholita-lu.jpg",
    title: 'La Cholita Lu',
    location: "Puno, Perú",
    interests: "Entretenimiento, Bailes",
    prices_from: 2000,
    social_media: "TikTok"
  },
  {
    img: "/influencers/jhair-tiktok.jpeg",
    title: 'Jhair de TikTok',
    location: "América Latina",
    interests: "Baile, Entretenimiento",
    prices_from: 3000,
    social_media: "TikTok, Instagram"
  },
  {
    img: "/influencers/luisito-comunica.jpg",
    title: 'Luisito Comunica',
    location: "México",
    interests: "Viajes, Comedia",
    prices_from: 8000,
    social_media: "YouTube, Twitter"
  },
  {
    img: "/influencers/waldir-maqque.jpg",
    title: 'Waldir Maqque',
    location: "Cusco, Perú",
    interests: "Estilo de vida, Comedia",
    prices_from: 2500,
    social_media: "Cocina, Estilo de vida"
  },
  {
    img: "/influencers/perro-de-alwin.png",
    title: 'El perro de Alwin',
    location: "Perú, Lima",
    interests: "Mascotas, Entretenimiento",
    prices_from: 9999999,
    social_media: "Instagram"
  },
  {
    img: "/influencers/andrew-tate.jpg",
    title: 'Andrew Tate',
    location: "Estados Unidos",
    interests: "Fitness, Emprendimiento",
    prices_from: 5000,
    social_media: "Instagram, YouTube"
  },
  {
    img: "/influencers/phillip-chu-joy.jpg",
    title: 'Phillip Chu Joy',
    location: "Desconocida",
    interests: "Tecnología, Videojuegos",
    prices_from: 2000,
    social_media: "Instagram, YouTube"
  },
  {
    img: "/influencers/sibenitoo-peru.jpeg",
    title: 'SiBenitoo',
    location: "Perú",
    interests: "Estilo de vida, Comedia",
    prices_from: 1000,
    social_media: "Twitch, Instagram"
  },
  {
    img: "/influencers/yao-cabrera.webp",
    title: 'Yao Cabrera',
    location: "Argentina",
    interests: "Controversia, Comedia",
    prices_from: 1500,
    social_media: "YouTube, Instagram"
  },
  {
    img: "/influencers/misias-pero-viajeras.avif",
    title: 'Misias Pero Viajeras',
    location: "Perú",
    interests: "Viajes, Comedia",
    prices_from: 2000,
    social_media: "Instagram, YouTube"
  },
  {
    img: "/influencers/mrbeast.jpg",
    title: 'Mr. Beast',
    location: "Estados Unidos",
    interests: "Caridad, Desafíos",
    prices_from: 100000,
    social_media: "YouTube, Twitter"
  },
]

influencers.forEach((influencer) => {
  const element = document.createElement('div')
  element.classList.add('influencer')
  element.innerHTML = `
    <a href="/profile/" class="img-wrapper">
      <img src="${influencer.img}" alt="Influencer">
      <h4>${influencer.title}</h4>
      <span class="location">${influencer.location}</span>
    </a>
    <div class="influencer__information">
      <header>
        <span>${influencer.social_media}</span>
        <span class="price">S/ ${influencer.prices_from}</span>
      </header>
      <span>${influencer.interests}</span>
    </div>
  `
  feed.appendChild(element)
})

const toggleButton = document.getElementsByClassName('nav-toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

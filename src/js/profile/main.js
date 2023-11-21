import '/src/css/globals.css'
import '/src/css/profile.css'

// const toggleButton = document.getElementsByClassName('nav-toggle-button')[0]
// const navBarLinks = document.getElementsByClassName('nav-bar-links')[0]

// toggleButton.addEventListener('click', () => {
//     navBarLinks.classList.toggle('active')
// }) 

document.getElementById('ft1').addEventListener('click', function() {
    console.log('Clic en ft1');
    openModal('../../../public/misias1.jpg');
  });

  document.getElementById('ft2').addEventListener('click', function() {
    console.log('Clic en ft2');
    openModal('../../../public/misias2.avif');
  });

  document.getElementById('ft3').addEventListener('click', function() {
    console.log('Clic en ft3');
    openModal('../../../public/misias3.avif');
  });

  document.getElementById('ft4').addEventListener('click', function() {
    console.log('Clic en ft4');
    openModal('../../../public/misias4.avif');
  });

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    currentImageIndex = getImageIndex(imageSrc);
  
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  }

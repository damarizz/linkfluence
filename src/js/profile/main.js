import '/src/css/globals.css'
import '/src/css/profile.css'

document.getElementById('ft1').addEventListener('click', function() {
    console.log('Clic en ft1');
    openModal('../../../public/imagenEjemplo.jpg');
  });

  document.getElementById('ft2').addEventListener('click', function() {
    console.log('Clic en ft2');
    openModal('../../../public/holi.png');
  });

  document.getElementById('ft3').addEventListener('click', function() {
    console.log('Clic en ft3');
    openModal('../../../public/imagenEjemplo.jpg');
  });

  document.getElementById('ft4').addEventListener('click', function() {
    console.log('Clic en ft4');
    openModal('../../../public/imagenEjemplo.jpg');
  });

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    currentImageIndex = getImageIndex(imageSrc);
  
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  }

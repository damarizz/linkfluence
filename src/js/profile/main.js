import '/src/css/globals.css'
import '/src/css/profile.css'

let currentImageIndex = 0;

function openModal(imageSrc) {
    console.log('Abriendo modal con:', imageSrc);
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    currentImageIndex = getImageIndex(imageSrc);
  
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  }

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function changeImage(n) {
  currentImageIndex += n;
  const images = document.querySelectorAll('.fotito img');

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  const newImageSrc = images[currentImageIndex].src;
  document.getElementById('modalImage').src = newImageSrc;
}

function getImageIndex(imageSrc) {
  const images = document.querySelectorAll('.fotito img');
  for (let i = 0; i < images.length; i++) {
    if (images[i].src === imageSrc) {
      return i;
    }
  }
  return 0;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  } else if (event.key === 'ArrowLeft') {
    changeImage(-1);
  } else if (event.key === 'ArrowRight') {
    changeImage(1);
  }
});
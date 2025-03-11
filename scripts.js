
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
        if (window.scrollY > 50) {
        header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
    });

    function openLightbox(img) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
  
      lightboxImg.src = img.src; // Use the clicked image's src
      lightbox.classList.add('show');
    }
  
    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
  
      lightbox.classList.remove('show');
      lightboxImg.src = ''; // Clear the image
    }
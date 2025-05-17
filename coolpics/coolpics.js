const menuButton = document.querySelector('#menu_button');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.querySelector('#links'); 
    menu.classList.toggle('show');
}


//Resize

function handleResize() {
    const menu = document.querySelector('#links');
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

// handleResize();
// window.addEventListener("resize", handleResize);


// Modal
const gallery = document.querySelector('.gallery')

const modal = document.createElement('dialog');

modal.innerHTML = '<div class="modal-content"><button class="close-viewer">X</button><img class="modal-img"></div>';

document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-img');
const closeBtn = modal.querySelector('.close-viewer');

closeBtn.addEventListener('click', () => {
    modal.close();
  });

  gallery.addEventListener('click', (event) => {
    const clickedImg = event.target.closest('img');
  
    if (!clickedImg) return;
  
    // Get the src of the clicked image
    const thumbSrc = clickedImg.getAttribute('src');
  
    // Assume high-def version is in a different folder, remove '-thumb' from the filename
    const highDefSrc = thumbSrc.replace('-thumb', '').replace('thumbs/', 'images/');
  
    // Set the high-def image into the modal
    modalImg.setAttribute('src', highDefSrc);
    modalImg.setAttribute('alt', clickedImg.alt);
  
    // Show the modal
    modal.showModal();
  });

modal.addEventListener('click', (event) => {
// If the click is outside the image, close the modal
if (event.target === modal) {
    modal.close();
}
});
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

window.addEventListener("resize", handleResize);

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
  
    const thumbSrc = clickedImg.getAttribute('src');
    const altText = clickedImg.getAttribute('alt');
  
    const fullImageSrc = thumbSrc.split('-')[0] + '-full.jpeg';
  
    modalImg.setAttribute('src', fullImageSrc);
    modalImg.setAttribute('alt', altText);
  
    modal.showModal();
  });

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
    modal.close();
    }
});
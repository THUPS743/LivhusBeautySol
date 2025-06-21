let navdiv = document.querySelector('.navdiv');
let header = document.querySelector('header');
let section = document.querySelector('section');

navdiv.onclick = function(){
    header.classList.toggle('active')
    section.classList.toggle('active')
}

// Slideshow background for .Home section
const slideshowImages = [
    'Images/background.jpg',
    'Images/hair1.jpg',
    'Images/nails1.jpg'
];
let currentSlide = 0;
const homeSection = document.querySelector('.Home');
const homeBefore = document.createElement('style');
document.head.appendChild(homeBefore);

function setSlideshowBackground(index) {
    homeBefore.innerHTML = `.Home::before { background-image: url('${slideshowImages[index]}') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; 
    background-position: center; }`;
}

setSlideshowBackground(currentSlide);
setInterval(() => {
    currentSlide = (currentSlide + 1) % slideshowImages.length;
    setSlideshowBackground(currentSlide);
}, 4000);
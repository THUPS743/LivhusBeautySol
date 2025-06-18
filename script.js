

let navdiv = document.querySelector('.navdiv');
let header = document.querySelector('header');
let section = document.querySelector('section');

navdiv.onclick = function(){
    header.classList.toggle('active')
    section.classList.toggle('active')
}
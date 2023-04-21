//------INTRO---------

let navbar = document.querySelector('.navbar');
let clouds = document.querySelectorAll('.cloud');
let sky = document.querySelector('.sky');
let siteBody = document.querySelector('#siteBody');

window.addEventListener('load', () => {

    setTimeout(() => {
      navbar.style.display = 'block'
    }, "3700");

    clouds.forEach(function(cloud){
      setTimeout(() => {
      cloud.style.display = 'none'
      }, "4000");
    });

    setTimeout(() => {
      sky.style.display = 'none'
    }, "4000");
    setTimeout(() => {
      siteBody.style.display = 'block'
    }, "4000");
    
});



//--------SKILLS--------------

const modalTrigger = document.querySelector('.modal-trigger');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

modalTrigger.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});




//Slide and all Images and dots container
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = carouselSlide.querySelectorAll('img');
const navDots = document.querySelector('.nav-dots');
//Image Counter to track which picture we are on
let slideIndex = 0; 
let timeoutId = null;
//gives the width of pic5 which is the first image in the array, all images should have the same width hopefully
let size = carouselImages[0].clientWidth;
//Create/append dots and add listeners to them
for (let i = 0; i < carouselImages.length; ++i) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('data-img-index', `${i}`)
    navDots.appendChild(dot);
    dot.addEventListener("click", currentSlide.bind(event));
}

//select all dots created from the for loop
const allDots = navDots.querySelectorAll('.dot');
//adds active class to first dot
allDots[0].classList.add('active-dot');
//Buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


//add Listener to arrow buttons 
prevBtn.addEventListener('click', plusSlides.bind(null,-1));
nextBtn.addEventListener('click', plusSlides.bind(null,1));

//initial display of Images
showSlides();

function currentSlide(event) {
    let {target} = event;
    slideIndex = parseInt(target.getAttribute('data-img-index'), 10);
    showSlides();
}

function plusSlides(step) {
 if(step < 0) {
     slideIndex -= 2;
     if(slideIndex < 0) {
       slideIndex = carouselImages.length - 1;
     }
 }
 showSlides();
}

function showSlides() {
 for(let i = 0; i < carouselImages.length; i++) {
   carouselImages[i].style.display = "none";
   allDots[i].classList.remove('active-dot');
 }
 slideIndex++;
 if(slideIndex > carouselImages.length) {
   slideIndex = 1
 }
 carouselImages[slideIndex - 1].style.display = "block";
 allDots[slideIndex - 1].classList.add('active-dot');
  if(timeoutId) {
     clearTimeout(timeoutId);
  }
 timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

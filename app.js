//Slide and all Images and dots container
const carouselSlide = document.querySelector('.carousel-slide');

const navDots = document.querySelector('.nav-dots');

//Buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//Image Counter to track which picture we are on
let slideIndex = 0; //starting on 0 trying to get rid of clones
let timeoutId = null;
const carouselImages = carouselSlide.querySelectorAll('img');
 //gives the width of pic5 which is the first image in the array, all images should have the same width hopefully
 let size = carouselImages[0].clientWidth;
/* carouselSlide.style.transform =` translateX(${-size*slideIndex}px)` */

/* nextBtn.addEventListener('click', () => {
    if(slideIndex >= carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    slideIndex++;
    carouselSlide.style.transform = 'translateX(' + (-size * slideIndex) + 'px)'
});

prevBtn.addEventListener('click', () =>{
    if(slideIndex <= 0)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    slideIndex--;
    carouselSlide.style.transform = 'translateX(' + (-size * slideIndex) + 'px)'
});

carouselSlide.addEventListener('transitionend', ()=> {
    if(carouselImages[slideIndex].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        slideIndex = carouselImages.length-2;
        carouselSlide.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
    }
    if(carouselImages[slideIndex].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        slideIndex = carouselImages.length- slideIndex;
        carouselSlide.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
        console.log(slideIndex);
    }
}); */

//Create/append dots and add listeners to them
for (let i = 0; i < carouselImages.length; ++i) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('data-img-index', `${i}`)
    navDots.appendChild(dot);
    dot.addEventListener("click", currentSlide.bind(event));
}
//select dots
const allDots = navDots.querySelectorAll('.dot');
//adds active class to first dot
allDots[0].classList.add('active-dot');

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











/**
     * Decides if animate to left or right and highlights clicked dot
     * @param {number} dotIndex - index of clicked dot
     */
/* function dotClick(event){
*    let {target} = event
**    let nextImg = parseInt(target.getAttribute('data-img-index'), 10);
**    let distance;
**    if (nextImg < 0) return;
**
**    if(nextImg > slideIndex){
**        if(slideIndex === 0){
**        distance = nextImg - slideIndex
**        animateSlider(nextImg, distance, 'right')
**        
**        } else{
**        distance = nextImg - slideIndex;
**        animateSlider(nextImg, distance, 'right')
**        }
**        
**    } else {
**        if(slideIndex === 0) {nextImg = 1;
**            }
**        distance = slideIndex - nextImg
**        animateSlider(nextImg, distance, 'left')
**        
**    }
**    
**
**}
**
**function animateSlider(nextImg, distance, direction){
**     if (!nextImg)
**            nextImg = slideIndex + 1 < carouselImages.length ? slideIndex + 2 : 1; 
**    if (direction === 'right'){
**    carouselSlide.style.transform = 'translateX(' + (-size * distance) + 'px)'
**    } else {carouselSlide.style.transform = 'translateX(' + (-size * (distance)) + 'px)'}
**
**    prevIndex = slideIndex;
**    slideIndex = nextImg;
**
**    let currDot = allDots[slideIndex];
**    currDot.classList.add('active-dot');
**    let prevDot = allDots[prevIndex];
**    prevDot.classList.remove('active-dot');
**    
*} */
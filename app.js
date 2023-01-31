//Slide and all Images
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = carouselSlide.querySelectorAll('img');

//Buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//Image Counter to track which picture we are on
let counter = 1; //starts on the first picture instead of the clone
let size = carouselImages[0].clientWidth;
 //gives the width of pic5 which is the first image in the array, all images should have the same width hopefully

carouselSlide.style.transform =` translateX(${-size*counter}px)`

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
});

prevBtn.addEventListener('click', () =>{
    if(counter <= 0)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
});

carouselSlide.addEventListener('transitionend', ()=> {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length-2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length- counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        console.log(counter);
    }
});
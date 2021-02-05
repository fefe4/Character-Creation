let currentSlide = 0;
const slides = document.getElementsByClassName("slides");
function displaySlides(n) {  
  console.log (n);
  const slides = document.getElementsByClassName("slides");  
  for (let i=0; i<slides.length; i++) {
    if (i == n) {slides[i].style.display = "block";}
    else {slides[i].style.display = "none";}
  };
}  
displaySlides (0)

const left = document.getElementById("left");
left.addEventListener ('click', () =>{
  currentSlide -= 1;
  if (currentSlide < 0) {currentSlide = slides.length-1;}
  displaySlides (currentSlide);
});

const right = document.getElementById("right");
right.addEventListener ('click', () =>{
  currentSlide += 1;
  if (currentSlide > slides.length-1) {currentSlide = 0;}
  displaySlides (currentSlide);
});


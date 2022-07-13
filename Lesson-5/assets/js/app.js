var mySlider = [
    'assets/images/1.png',
    'assets/images/2.png',
    'assets/images/3.jpg'
]

let NumSlide = 0;
let img = document.querySelector('.slider img');
img.src = mySlider[NumSlide]

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')


next.addEventListener('click',function() {
    currentSlide++;
    if(currentSlide > mySlider.length - 1) {
        currentSlide = 0
    }
    img.src = mySlider[NumSlide];
})

prev.addEventListener('click',function() {
  NumSlide--;
    if(NumSlide === -1) {
      NumSlide = mySlider.length - 1;
    }
    img.src = mySlider[NumSlide]
})


function AutoPlay() {
  NumSlide++;
    if(NumSlide > mySlider.length - 1) {
      NumSlide = 0
    }
    img.src = mySlider[NumSlide];
}
setInterval(() => {
    AutoPlay();
}, 2500);

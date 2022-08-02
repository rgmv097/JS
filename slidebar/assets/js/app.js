
var sliderImg = [
  'assets/images/image1.jpg',
  'assets/images/image2.jpg',
  'assets/images/image3.jpg'
];

let index = 0;
var img = document.querySelector("#slider img");

//Move to ago
var next = document.querySelector("#next");
next.addEventListener("click", function () {
  index++;
  if (index == sliderImg.length) {
    index = 0;
  }
  img.src = sliderImg[index];
});
 
//Move to Back
var prev = document.querySelector("#prev");
prev.addEventListener("click", function () {
  if (index == 0) {
    index = sliderImg.length;
  }
  index--;
  img.src = sliderImg[index];
});

//Frist dote
var frist=document.querySelector("#frist")
frist.addEventListener('click',()=>{     
     img.src=sliderImg[0]
})

//Second dote
var second=document.querySelector("#second")
second.addEventListener('click',()=>{     
     img.src=sliderImg[1]
})

//Thrid dote
var thrid=document.querySelector("#thrid")
thrid.addEventListener('click',()=>{     
     img.src=sliderImg[2]
})

//Forth dote
var forth=document.querySelector("#forth")
forth.addEventListener('click',()=>{     
     img.src=sliderImg[3]
})

//Auto Move
function AutoPlay(){
    index++;
    if (index == sliderImg.length) {
      index = 0;
    }
    img.src = sliderImg[index];
}

setInterval(() => {
    index++;
    if (index == sliderImg.length) {
      index = 0;
    }
    img.src = sliderImg[index];
}, 6000);
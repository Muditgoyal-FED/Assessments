let image = 0;


function controller(x){
     image = image + x;
     slideshow(image);
}


slideshow(image);

function slideshow(num){
  let slides = document.getElementsByClassName('slide');

  if(num == slides.length){
    image = 0;
    num = 0;
  }
  if (num < 0 ){
    image = slides.length-1;
    num = slides.length-1;
  }

  for(let y of slides){
     y.style.display = "none";
  }
  
  slides[num].style.display = "block";
}
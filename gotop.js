window.onscroll = function(){
    if(document.documentElement.scrollTop > 170){
     document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
top: 0,
behavior: 'smooth'
    });
});





document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "https://www.dontata.com/fiambres/salame-de-milan-fiambres-don-tata-banfield-lomas-de-zamora-french-acevedo-portela.jpg",
  "https://saporiepasta.com/wp-content/uploads/2020/10/lomo-suizo-horneado-fiambres-don-tata-banfield-lomas-de-zamora-french-acevedo-portela.jpg",
  "https://www.superseis.com.py/images/thumbs/0208200.jpeg",
  "https://www.templura.com/wp-content/uploads/2020/04/CERDO.jpg",
  "https://www.dontata.com/fiambres/panceta-ahumada-fiambres-don-tata-banfield-lomas-de-zamora-french-acevedo-portela.jpg",
  "https://www.dontata.com/fiambres/salame-holstein-fiambres-don-tata-banfield-lomas-de-zamora-french-acevedo-portela.jpg",
  "https://cocinerosargentinos.com/content/recipes/500x500/cantimpalo-casero.5338.jpg",
  "https://www.dontata.com/fiambres/bondiola-fiambres-don-tata-banfield-lomas-de-zamora-french-acevedo-portela.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lAnM3eg3mU-bo6H69ZVRg8yrP5qQc8L5Uw&usqp=CAU",
  "https://lacocinademercheborjas.com/wp-content/uploads/2021/11/FIAMBRE-DE-POLLO-RELLENWEBP-3-500x500.webp",
  "https://distriuruguayexpress.com.ar/wp-content/uploads/2021/06/C3D3116B-B7E8-4D2E-A496-85054603C841.jpeg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();
/*Animated Menu*/
function myFucntion(m){
  m.classList.toggle("change");
}

/*Search Function*/
function openSearch(){
  document.getElementById("bottomList").style.visibility = "hidden";
  document.getElementById('searchBar').style.display = "block";
  document.getElementById('closeButton').style.display = "block";
}

function closeSearch(){
  document.getElementById("bottomList").style.visibility = "visible";
  document.getElementById('searchBar').style.display = "none";
  document.getElementById('closeButton').style.display = "none";
}

/*Side Menu Open Function*/
function togglemenuFunction(m){
  if(m.classList.contains("change")){
    document.getElementById('sideMenu').style.width = "18em";
    document.body.style.overflowY = "hidden";
    document.getElementById("overlayBackground").style.display ="block";

  }
  else {
    document.getElementById('sideMenu').style.width = "0";
    document.body.style.overflowY = "scroll";
    document.getElementById("overlayBackground").style.display ="none";
  }
}


// /*Hide the top menu when scroll down*/
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("Header").style.transform = "translate(0px, 0px)";
//     document.getElementById("subLogo").style.display = "none";
//   } else {
//     document.getElementById("Header").style.transform = "translate(0px, -52px";
//     document.getElementById("subLogo").style.display = "block";
//
//   }
//   prevScrollpos = currentScrollPos;
// }


/*Carousel*/

var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("exploremoreCarousel");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

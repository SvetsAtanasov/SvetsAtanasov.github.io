/*Logic for expanding the hanburger menu*/
function Expand(){
    var newClass = " Responsive";
    var element = document.getElementById("NavRectangle");

    if(element.className === "NavRectangle"){
        element.className += newClass;
    }

    else{
        element.className = "NavRectangle";
    }
}

/*Logic for returning an element*/
function GetElement(element){
    return document.getElementById(element.className).style
}

/*Logic for the carousel*/
var slideIndex = 1;

function Increment(n) {
  Slides(slideIndex += n);
}

function Slides(n) {
  var i;
  var currentSlide
  var slides = document.getElementById("SlideWrapper").children;

  if (n > slides.length){
      slideIndex = 1}

  if (n < 1){
      slideIndex = slides.length}

  for (i = 0; i < slides.length; i++){
      currentSlide = GetElement(slides[i]);
      currentSlide.display = "none";
  }
  currentSlide = GetElement(slides[slideIndex - 1]);
  currentSlide.display = "inline";
}
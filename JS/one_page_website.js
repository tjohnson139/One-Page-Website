//open the Modal//
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//Close the Modal//
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls//
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumnail image controls
function currentSlide(i) {
    showSlides(slideIndex = i);
}

function showSlides(a) {
    var a1;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (a > slides.length) {slideIndex = 1}
    if (a < 1) {slideIndex = slides.length}
    for (b=0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
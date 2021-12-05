document.getElementsByClassName("slider_dots")[0].children[0].style.background = "rgb(222, 174, 68)";
let nImage = 0;
let inputs = document.getElementsByClassName("slider_dot");
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("click", changeDotColor.bind(event, i));
}
let galleryTimer = setInterval(changeGalleryImage, 5000);

showTimeForSale();
setInterval(showTimeForSale, 1000);
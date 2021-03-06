const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const menu = document.getElementById('menu');

sideNav.style.right = "-180px";

menuBtn.addEventListener('click', () => {
   
  if(sideNav.style.right == "-180px") {
    sideNav.style.right = "0";
    menu.src = "images/close.png";
  } else {
    sideNav.style.right = "-180px";
    menu.src = "images/menu.png";
  }
})

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


 
/* ====== Loader ====== */

const loader = document.getElementById('preloader');

window.addEventListener('load', () => {
  loader.style.display = "none";
});
 
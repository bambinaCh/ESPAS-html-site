//NABAR
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//YEAR
var d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

let header=document.getElementById('header-section');
let navItem =document.getElementById('nav-section');



console.log(header.offsetHeight)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > header.offsetHeight ||document.documentElement.scrollTop > header.offsetHeight) {
    navItem.classList.add('bg-navbar')
  } else {
    navItem.classList.remove('bg-navbar')
  }
}
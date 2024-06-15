/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})


document.addEventListener('scroll', function() {
   const elements = document.querySelectorAll('.main__title, .main__subtitle');

   elements.forEach(element => {
       const scrollThreshold = parseInt(element.getAttribute('data-scroll'), 10);
       const scrollTop = window.scrollY;

       if (scrollTop > scrollThreshold) {
           element.classList.add('visible');
       }
   });
});




document.getElementById('scrollTocapa2').addEventListener('click', function() {
   document.getElementById('capa2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollTocapa3').addEventListener('click', function() {
   document.getElementById('capa3').scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('scrollTocapa1').addEventListener('click', function() {
   document.getElementById('capa1').scrollIntoView({ behavior: 'smooth' });
});



function redirigir() {
   window.location.href = 'contacta.html';
}


document.addEventListener("DOMContentLoaded", function() {
   const container = document.querySelector('.contenedor2');
   const scrollDistance = 360; // Adjust as needed, controls how much to scroll per click

   // Function to handle right arrow click
   document.querySelectorAll('.redondita').forEach(button => {
       button.addEventListener('click', function() {
           container.scrollBy({
               left: scrollDistance,
               behavior: 'smooth'
           });
       });
   });

   // Function to handle left arrow click
   document.querySelectorAll('.redondita2').forEach(button => {
       button.addEventListener('click', function() {
           container.scrollBy({
               left: -scrollDistance,
               behavior: 'smooth'
           });
       });
   });
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
//function to open the about us page on click
function aboutus(){
    window.open("about us.html")
   }
function user(){
    window.open("login page.html")
   }
   function register(){
    window.open("register.html")
   }
   function contactus(){
    window.open("contactus.html")
   }
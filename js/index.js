let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('#navbar');
menuIcon=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
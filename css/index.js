var menu = document.querySelector('.menu i');
var btn = document.querySelector('.btn');
var btnDark = document.querySelector('.btn-dark i');
var darki = document.querySelector('.dark i');
menu.addEventListener('click', ()=>{
menu.classList.toggle('fa-xmark')
});



darki.addEventListener('click', () =>{
    darki.classList.toggle('fa-toggle-on');
    document.querySelector('body').classList.toggle('dark-mode');
    document.querySelector('.header').classList.toggle('header-dark-mode');
    document.querySelector('.home .image').classList.toggle('image-dark-mode');
});

const toggleBtn = document.querySelector('.menu-toggle');
const dropDown = document.querySelector('.dropdown-menu');
const close = document.querySelector('.menu-toggle-close')

toggleBtn.addEventListener('click', function(){
    dropDown.classList.toggle('open');
})
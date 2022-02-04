$(document).ready(function (){
    let headerBars = document.querySelector('.header__bars'),
    mobileHeaderBars = document.querySelector('.mobile__header-bars'),
    faClose = document.querySelector('.fa-close'),
    mobileMenu = document.querySelector('.mobile__menu');

    headerBars.addEventListener('click', function() {
        mobileMenu.classList.add('mobile__menu_active');
    });

    mobileHeaderBars.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.matches('i.fa-close')) {
            mobileMenu.classList.remove('mobile__menu_active');
        }
    });
});
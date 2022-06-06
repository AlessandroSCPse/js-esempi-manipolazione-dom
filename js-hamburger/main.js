// Al click sul burgerButton aggiungo active a hamburger-menu
const burgerButton = document.querySelector('.header-right > a');
burgerButton.addEventListener('click',
    function() {
        document.querySelector('.hamburger-menu').classList.add('active');
    }
);

// Al click sul closeButton rimuovo active a hamburger-menu
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click',
    function() {
        document.querySelector('.hamburger-menu').classList.remove('active');
    }
);

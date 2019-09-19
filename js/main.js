window.onload = function () {

    // vanilla js
    document.querySelector('.help').addEventListener('click', function (e) {
        e.preventDefault();

        let menu = document.querySelector('.hidden-menu');
        menu.classList.toggle('visible');
    });

    document.querySelector('.btn-enter').addEventListener('click', function (e) {
        e.preventDefault();
        let overlay = document.querySelector('.overlay');
        let modalWindow = document.querySelector('.modal-window');

        overlay.classList.toggle('visible');
        modalWindow.classList.toggle('visible');

        overlay.addEventListener('click', function () {
            overlay.classList.remove('visible');
            modalWindow.classList.remove('visible');
        });
    });

    // jQuery
    $('.short-view').on('click', function() {
        $(this).next().slideToggle();
    })

    $('.btn-burger').on('click', function() {
        $('.side-menu').toggleClass('visible');
        // $('.overlay').show();
    })
}




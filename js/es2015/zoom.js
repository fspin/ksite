(function() {
        function zoom(e) {
            const image = e.target;
            const overlay = image.parentElement.nextElementSibling;
            const body = document.body;
            const closeButton = e.target.nextElementSibling;

            image.classList.toggle('u-zoom');
            body.classList.toggle('u-overflow-hidden');
            closeButton.classList.toggle('is-hidden');
            overlay.classList.toggle('is-hidden');
        }


        function close(e) {
            e.stopPropagation();
            document.querySelector('.js-image.u-zoom').click();
        }

        const bigPictures = document.querySelectorAll('.js-image');
        const closeButtons = document.querySelectorAll('.js-close');

        bigPictures.forEach(picture => picture.addEventListener('click', zoom));
        closeButtons.forEach(picture => picture.addEventListener('click', close));
})();

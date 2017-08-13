(function() {
        function zoom(e) {
            const image = e.target;
            const parent = image.parentElement;
            const body = document.body;

            if (image.classList.contains('u-zoom')) {
                removeCloseButton(image);
            } else {
                addCloseButton(image);
            }

            image.classList.toggle('u-zoom');
            parent.classList.toggle('u-pos-unset');
            body.classList.toggle('u-overflow-hidden');

        }

        function addCloseButton(image) {
            image.innerHTML = `<span class="u-close js-close">Click anywhere to close</span>`;
            document.querySelector('.js-close').addEventListener('click', close);
        }

        function removeCloseButton(image) {
            image.innerHTML = '';
        }

        function close(e) {
            e.stopPropagation();
            e.target.parentElement.click();
        }

        const bigPictures = document.querySelectorAll('.js-image');
        bigPictures.forEach(picture => picture.addEventListener('click', zoom));
})();

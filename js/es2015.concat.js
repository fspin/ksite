'use strict';

(function () {
    function changeImage(e) {
        // check clicked image
        var thumbnail = e.target.style.backgroundImage;
        var bigImage = document.querySelector('.js-image[data-title="' + e.target.title + '"]');
        bigImage.style.backgroundImage = thumbnail;
    }

    var thumbnails = document.querySelectorAll('.js-thumbnail');

    thumbnails.forEach(function (thumbnail) {
        return thumbnail.addEventListener('click', changeImage);
    });
})();
'use strict';

(function () {
    function toggleReadMore(e) {
        var container = e.target.parentElement;
        var target = container.parentElement;

        target.classList.toggle('is-open');
        container.addEventListener('transitionend', hideReadMore);
    }

    function hideReadMore(e) {
        if (e.propertyName.includes('padding')) e.target.classList.add('is-hidden');
    }

    var readMoreTriggers = document.querySelectorAll('.js-expand');
    readMoreTriggers.forEach(function (trigger) {
        return trigger.addEventListener('click', toggleReadMore);
    });
})();
'use strict';

(function () {
    function zoom(e) {
        var image = e.target;
        var parent = image.parentElement;
        var body = document.body;

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
        image.innerHTML = '<span class="u-close js-close">Click anywhere to close</span>';
        document.querySelector('.js-close').addEventListener('click', close);
    }

    function removeCloseButton(image) {
        image.innerHTML = '';
    }

    function close(e) {
        e.stopPropagation();
        e.target.parentElement.click();
    }

    var bigPictures = document.querySelectorAll('.js-image');
    bigPictures.forEach(function (picture) {
        return picture.addEventListener('click', zoom);
    });
})();
//# sourceMappingURL=es2015.concat.js.map

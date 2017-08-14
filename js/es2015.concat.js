'use strict';

(function () {
    function changeImage(e) {
        var thumbnail = e.target.style.backgroundImage;
        var url = thumbnail.match(/(?:\(['"]?)(.*?)(?:['"]?\))/)[1].replace(/('|")/g, '');
        var bigImage = document.querySelector('.js-image[data-title="' + e.target.title + '"]');
        bigImage.src = url;
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
        var overlay = image.parentElement.nextElementSibling;
        var body = document.body;
        var closeButton = e.target.nextElementSibling;

        image.classList.toggle('u-zoom');
        body.classList.toggle('u-overflow-hidden');
        closeButton.classList.toggle('is-hidden');
        overlay.classList.toggle('is-hidden');
    }

    function close(e) {
        e.stopPropagation();
        document.querySelector('.js-image.u-zoom').click();
    }

    var bigPictures = document.querySelectorAll('.js-image');
    var closeButtons = document.querySelectorAll('.js-close');

    bigPictures.forEach(function (picture) {
        return picture.addEventListener('click', zoom);
    });
    closeButtons.forEach(function (picture) {
        return picture.addEventListener('click', close);
    });
})();
//# sourceMappingURL=es2015.concat.js.map

(function() {
    function changeImage(e) {
        // check clicked image
        const thumbnail = e.target.style.backgroundImage;
        const bigImage = document.querySelector(`.js-image[data-title="${e.target.title}"]`)
        bigImage.style.backgroundImage = thumbnail;
    }

    const thumbnails = document.querySelectorAll('.js-thumbnail');
    thumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImage));
})();

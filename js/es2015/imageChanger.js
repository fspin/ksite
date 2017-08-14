(function() {
    function changeImage(e) {
        const thumbnail = e.target.style.backgroundImage;
        const url = thumbnail.match(/(?:\(['"]?)(.*?)(?:['"]?\))/)[1].replace(/('|")/g,'');
        const bigImage = document.querySelector(`.js-image[data-title="${e.target.title}"]`)
        bigImage.src = url;
    }
    const thumbnails = document.querySelectorAll('.js-thumbnail');

    thumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImage));
})();

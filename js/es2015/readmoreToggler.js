(function() {
    function toggleReadMore(e) {
        const container = e.target.parentElement;
        const target = container.parentElement;

        target.classList.toggle('is-open');
        container.addEventListener('transitionend', hideReadMore);
    }

    function hideReadMore(e) {
        if (e.propertyName.includes('padding')) e.target.classList.add('is-hidden');
    }

    const readMoreTriggers = document.querySelectorAll('.js-expand');
    readMoreTriggers.forEach(trigger => trigger.addEventListener('click', toggleReadMore));

})();

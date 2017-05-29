$(chopstick.init);

(function() {
    var worksSubitemsToggler = new ChopstickToggle({
        trigger: '.js-works-trigger',
        target: '.js-works-subitems',
        className: 'is-visible'
    });

    var workshopSubitemsToggler = new ChopstickToggle({
        trigger: '.js-workshop-trigger',
        target: '.js-workshop-subitems',
        className: 'is-visible'
    });
})();

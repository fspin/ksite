// Polyfill NodeList.forEach
(function (){
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
})();

var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
        chopstick.loadObject(chopstick.hide, 'chopstick.hide');
        // chopstick.loadObject(chopstick.toggle, 'chopstick.toggle');
    },

    /**
     * This function will load an object by a given name
     *
     * If the object doesn't exist no error will be thrown
     * But if object exists but doesn't have an init method it will throw an error
     *
     * If everything is ok we'll initiate the given object
     */
    loadObject: function(obj, name)
    {
        // create object based on a name
        // var objName = window[objName];

        // check if object exists
        if(typeof obj != 'undefined') {

            // check if object has a method init
            if (typeof obj.init == 'undefined') {
                // we will throw an error so the designer / developer know there's a problem
                throw new Error('ERROR: "' + name + '" does not have an init function');

            } else {
                // everything is fine so initiate
                obj.init();
            }
        }
    }
};

var hideSettings
chopstick.hide =
{
    settings:
    {
        hide: $('.js-hide')
    },

    init: function()
    {
        hideSettings = chopstick.hide.settings;
        chopstick.hide.hideContent();
    },

    hideContent: function ()
    {
        hideSettings.hide.on('click', function(e)
        {
            e.preventDefault();
            $(this).closest(hideSettings.hide).parent().addClass('is-hidden');
        });
    }
};

var mobileNavSettings
chopstick.mobileNav =
{
    settings:
    {
        navigation: $('.js-nav'),
        trigger: $('.js-nav-trigger')
    },

    init: function()
    {
        // Initialize mobile nav settings
        mobileNavSettings = chopstick.mobileNav.settings;
        // Bind toggle events
        chopstick.mobileNav.bindUIEvents();
    },

    bindUIEvents: function()
    {
        mobileNavSettings.trigger.on('click', function() {
            chopstick.mobileNav.toggleNavigation();
        });
    },

    // build mobile nav
    toggleNavigation: function()
    {
        mobileNavSettings.navigation.toggleClass('is-visible');
        mobileNavSettings.trigger.toggleClass('is-active');
    }
};

/**
 * chopstickToggle
 * A basic javascript toggle module with extra options
 *
 * Dependency: jQuery
 *
 * Functionalities:
 * - Hide an element
 * - Toggle a class
 */


//* to create a closure (scoping)
(function() {

    // Define the constructor
    this.ChopstickToggle = function() {
        // Global element references

        // Create default values (super basic toggle)
        var defaults = {
            trigger: '.js-toggle-trigger',
            triggerClassName: 'is-active', // class toggled on trigger
            target: '.js-toggle-target',
            targetClassName: 'is-hidden', // class toggled on target
            eventName: 'click',
            preventDefault: true //the default action of the event will not be triggered.
        }

        // Create options by extending defaults with the passed in arugments
        // if (arguments[0] && typeof arguments[0] === "object") {
        this.options = $.extend(defaults, arguments[0]); //https://api.jquery.com/jquery.extend/
        // console.log(this.options);
        // }

        // console.log(this.options);
        bindUIEvents.call(this);
    }

    // public methods
    ChopstickToggle.prototype.applyState = function() {
        // Apply a certain classname on a certain target
        var _ = this;
        $(_.options.target).addClass(_.options.targetClassName);
        $(_.options.trigger).addClass(_.options.triggerClassName);
    }

    ChopstickToggle.prototype.removeState = function() {
        // Remove a certain classname on a certain target
        var _ = this;
        $(_.options.target).removeClass(_.options.targetClassName);
        $(_.options.trigger).removeClass(_.options.triggerClassName);
    }

    ChopstickToggle.prototype.toggleState = function() {
        // toggle a certain classname on a certain target
        var _ = this;
        $(_.options.target).toggleClass(_.options.targetClassName);
        $(_.options.trigger).toggleClass(_.options.triggerClassName);
    }

    // Private methods
    function bindUIEvents() {
        var _ = this;
        // console.log(_.options.eventName);

        $(_.options.trigger).on(_.options.eventName, function(e) {
            // Toggle the default classname on the default target
            if (_.options.preventDefault) {
                e.preventDefault();
            }

            _.toggleState();
        });
    }
}());

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

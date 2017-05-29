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

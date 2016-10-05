// to es2015-ify

// import joose-utils once is es2015 compatible

;
var joose = window.joose || {};
joose.navigation = window.joose.navigation || {};
joose.navigation.fullScreen = (function(joose) {

    "use strict";

    // shared configuration / variables
    var config = {
        menuShownClass: 'menu-shown'
    };

    // private functions
    var toggleNav = function(parentElement, pageContentElement) {
        if (joose.utils.hasClass(parentElement, config.menuShownClass)) {
            joose.utils.removeClass(parentElement, config.menuShownClass);
            pageContentElement.style.removeProperty('top');
        } else {
            joose.utils.addClass(parentElement, config.menuShownClass);
            pageContentElement.style.top = window.innerHeight + 'px';
        }
    }

    // initialise toggle links
    var init = function (menuToggleLinks, parentElement, pageContentElement) {
        menuToggleLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                toggleNav(parentElement, pageContentElement);
            });
        });
    }

    // public functions
    return {
        toggleNav: toggleNav,
        init: init
    }

})(joose);
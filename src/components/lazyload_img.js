/**
 * Lazyload
 * Set lazyload element's image src to data-src
 * Set lazyload elemnt's background-image to data-bgsrc
 * Author: May
 * Create Time: 2017.12.05 21:18:00
 */

;
"use strict";
// 待图片全部上S3 CDN；待webp实例图片提供
// import { imageTypeDetect } from './image_type_detect.js';
// console.log(imageTypeDetect);

var lazyloadImg = {
    imageUrlSuffix: '',
    /** 
     * Get lazyload element loaded status 
     */
    isLazyImgLoaded: function(lazyImgEl) {
        return lazyImgEl.getAttribute('lazy-loaded');
    },
    /**
     * Mark lazyload element has been loaded
     */
    markLazyImgLoaded: function(lazyImgEl) {
        lazyImgEl.setAttribute('lazy-loaded', true);
    },
    /** 
     * Load lazyload image
     * set data-src value to src
     * set data-bgsrc value to style.backgroundImage
     */
    loadLazyImg: function(lazyImgEl) {
        var LazyEl = lazyImgEl;
        var imageSrc = LazyEl.getAttribute('data-src');
        var bgSrc = LazyEl.getAttribute('data-bgsrc');
        if (imageSrc && imageSrc.length > 0) {
            LazyEl.setAttribute('src', imageSrc + this.imageUrlSuffix);
        }
        if (bgSrc && bgSrc.length > 0) {
            LazyEl.style.backgroundImage = 'url(' + bgSrc + this.imageUrlSuffix + ')';
        }
        this.markLazyImgLoaded(LazyEl);
    },
    /**
     * Get Lazyload element offset value
     */
    getElementCoordPoints: function(lazyImgEl) {
        var currentEl = lazyImgEl;
        var elOffsetTop = 0;
        var elOffsetLeft = 0;

        while (currentEl) {
            elOffsetTop += currentEl.offsetTop;
            elOffsetLeft += currentEl.offsetLeft;

            currentEl = currentEl.offsetParent;
        }
        return {
            offsetTop: elOffsetTop,
            offsetLeft: elOffsetLeft
        };
    },
    /** 
     * when lazyload image display none, offsetHeight and offsetTop is 0
     * this function get hidden lazyload element's display parent container
     */
    getDisplayElementContainer: function(lazyImgEl) {
        var displayContainer = lazyImgEl;

        while (!displayContainer.offsetTop && !displayContainer.offsetHeight) {
            displayContainer = displayContainer.parentNode;
        }
        
        return displayContainer;
    },
    getPageScreenRatio: function() {
        var pageScreenRatio = Math.ceil(window.innerWidth / screen.width);
        return pageScreenRatio > 1 ? pageScreenRatio : 1;
    },
    /** 
     * Check element whether in viewpoint
     */
    checkInViewpoint: function(lazyImgEl) {
        var displayElementContainer = this.getDisplayElementContainer(lazyImgEl);

        var elCoordPoints = this.getElementCoordPoints(displayElementContainer);
        var clientSize = {
            width: screen.width * this.getPageScreenRatio(), //document.documentElement.clientHeight || window.innerheight,
            height: screen.height * this.getPageScreenRatio() //document.documentElement.clientWidth || window.innerwidth
        };
        var elementSize = {
            width: displayElementContainer.offsetWidth,
            height: displayElementContainer.offsetHeight
        };
        var scrollCoordPoints = {
            scrollTop: document.body.scrollTop || document.documentElement.scrollTop,
            scrollLeft: document.body.scrollLeft || document.documentElement.scrollLeft
        };

        // console.log(++count, 'clientHeight', clientSize.height, 'elementHeight', elementSize.height, 'scrollTop', scrollCoordPoints.scrollTop, 'offsetTop', elCoordPoints.offsetTop);
        if (elCoordPoints.offsetTop < scrollCoordPoints.scrollTop + clientSize.height
            && elCoordPoints.offsetTop + elementSize.height > scrollCoordPoints.scrollTop
            && (!scrollCoordPoints.scrollLeft
                || elCoordPoints.offsetLeft < scrollCoordPoints.scrollLeft + clientSize.width
                && elCoordPoints.offsetLeft + elementSize.width > scrollCoordPoints.scrollLeft)
        ) {
            return true;
        }
        return false;
    },
    /** 
     * Traversal lazyload elements whether need to load or not 
     */
    traversalLazyLoadImgs: function() {
        var _this = this;
        var lazyImagesEls = document.querySelectorAll(".lazyload-el");

        var lazyImgEl;
        for (var i = 0; i < lazyImagesEls.length; i++) {
            lazyImgEl = lazyImagesEls[i];
            if (_this.checkInViewpoint(lazyImgEl) && !_this.isLazyImgLoaded(lazyImgEl)) {
                _this.loadLazyImg(lazyImgEl);
            }
        }
    },
    /** 
     * Listen scroll event
     */ 
    bindScrollEvent: function() {
        var _this = this;
        var timeout;

        window.onscroll = function() {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function() {
                clearTimeout(timeout);
                _this.traversalLazyLoadImgs();
            }, 20);
        }
    },
    /** 
     * After DomReady，Lazyload Entrance
     */ 
    init: function() {
        typeof imageTypeDetect !== "undefined" && !!imageTypeDetect && (this.imageUrlSuffix = imageTypeDetect.init());
        this.bindScrollEvent();
        this.traversalLazyLoadImgs();
    }
};

$(function() {
    lazyloadImg.init();
});

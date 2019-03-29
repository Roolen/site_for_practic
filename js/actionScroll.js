window.addEventListener("scroll", ThrottleScroll, false);

let isScrolling = false;

function ThrottleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let wineImage = document.getElementById("wine-image");
let chefImage = document.getElementById("chef-image");
let kitchenImage = document.getElementById("kitchen-image");
let meatImage = document.getElementById("meat-image");

let meatOneImage = document.getElementById("meat-1");
let meatTwoImage = document.getElementById("meat-2");
let cakesImage = document.getElementById("cakes");

let reservationBlock = document.getElementById("reservation");
let eventsBlock = document.getElementById("events");

function scrolling(e) {
    if (isFullyVisible(wineImage)) {
        wineImage.classList.add("move_left_100");
        wineImage.style.opacity = 1;
    }

    if (isPartiallyVisible(chefImage)) {
        chefImage.classList.add("move_top_100");
        chefImage.style.opacity = 1;
    }

    if (isPartiallyVisible(kitchenImage)) {
        kitchenImage.classList.add("move_left_100");
        kitchenImage.style.opacity = 1;
    }

    if (isPartiallyVisible(meatImage)) {
        meatImage.classList.add("move_left_100");
        meatImage.style.opacity = 1;
    }

    if (isFullyVisible(meatOneImage)) {
        meatOneImage.classList.add("move_reset");
        meatOneImage.style.opacity = 1;
    }

    if (isFullyVisible(meatTwoImage)) {
        meatTwoImage.classList.add("move_reset");
        meatTwoImage.style.opacity = 1;
    }

    if (isFullyVisible(cakesImage)) {
        cakesImage.classList.add("move_reset");
        cakesImage.style.opacity = 1;
    }

    if (isFullyVisible(reservationBlock)) {
        reservationBlock.classList.add("move_reset");
        reservationBlock.style.opacity = 1;
    }

    if (isFullyVisible(eventsBlock)) {
        eventsBlock.classList.add("move_reset");
        eventsBlock.style.opacity = 1;
    }
}

function isPartiallyVisible(element) {
    let elementBoundary = element.getBoundingClientRect();
 
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
function isFullyVisible(element) {
    let elementBoundary = element.getBoundingClientRect();
 
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
 
    return ((top >= 0) && (bottom <= window.innerHeight));
}
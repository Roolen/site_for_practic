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
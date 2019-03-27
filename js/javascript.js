



//--------------------Events--------------------//

document.getElementById("see-menu-button").onclick = function () {
    let y = FindPosition(document.getElementById("point_2")).y;
    ScrollScreen(y - 240 - scrollY, 500, 60);
}

document.getElementById("find-table-button").onclick = function() {
    let y = FindPosition(document.getElementById("point_3")).y;
    ScrollScreen(y -200 - scrollY, 500, 60);
}

document.getElementById("scroll-down-button").onclick = function() {
    let y = FindPosition(document.getElementById("point_1")).y;
    ScrollScreen(y - 100 - scrollY, 500, 60);
}

let date = document.getElementById("reservations-field-date");
date.onfocus = function () {
    document.getElementById("reservations-field-date").type = "date";
}
date.onblur = function () {
    document.getElementById("reservations-field-date").type = "text";
}

let time = document.getElementById("reservations-field-time");
time.onfocus = function () {
    document.getElementById("reservations-field-time").type = "time";
}
time.onblur = function () {
    document.getElementById("reservations-field-time").type = "text";
}


//--------------------Suports of Functions--------------------//

function ScrollScreen(y, t, f) {
    let fps = f || 50;
    let time = t || 500;
    let steps = time / (1000 / fps);
    let position = scrollY;
    let move = y / steps;

    let timer = setInterval(function () {
        position += move;

        scrollTo(0, position);

        steps--;

        if (steps <= 0) {
            clearInterval(timer);
        }
    }, (1000 / fps));
}

function FindPosition(obj) {
    let x = y = 0;

    while (obj) {
        x += obj.offsetLeft;
        y += obj.offsetTop;
        obj = obj.offsetParent;
    }

    return { x: x, y: y };
}
"use strict";

// components
const menuComps = document.querySelectorAll(".menu ul li");
const titles = document.querySelectorAll("h2");
const images = document.querySelectorAll(".image-collage img");

// buttons
const showAnimButt = document.getElementById("animation_btn"); 

// set styles
showAnimButt.style.cursor = "pointer";

// functions
function removeUnnecessaryClass(components, className) {
    try {
        components.forEach(element => {
            element.classList.add('animate__animated', className);
            element.addEventListener('animationend', () => {
                element.classList.remove('animate__animated', className);
                element.removeEventListener('animationend', () => {});
            });
        });
    } catch (e) {
        console.error("Oops: " + e);
    }
}

function showAnimation() {
    removeUnnecessaryClass(titles, 'animate__hinge');
    removeUnnecessaryClass(images, 'animate__zoomOut');
    removeUnnecessaryClass(menuComps, 'animate__fadeOutDown');
}

showAnimButt.addEventListener("click", () => showAnimation());

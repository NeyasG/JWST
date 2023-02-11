const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const body = document.querySelectorAll("body, div.img-caption, a.icon");
const closedIcon = document.getElementById("mobile-close-icon");
const hamburgerIcon = document.getElementById("ham-icon");
const primaryHeader = document.getElementById("primary-header")

function toggleStyle(ele, styleName, value) {
    if (ele.style[styleName] !== value) {
        ele.style[styleName] = value;
    } else {
        ele.style[styleName] = '';
    }

}


/* mobile nav toggle logic */
navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('opened')

    toggleStyle(closedIcon, "display", "inline")
    toggleStyle(hamburgerIcon, "display", "none")
    toggleStyle(primaryHeader, "background-color", "transparent")


    body.forEach((ele) => {
        ele.classList.toggle('blurred')
    })

});
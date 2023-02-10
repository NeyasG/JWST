const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const body = document.querySelectorAll("body, div.img-caption, a.icon");

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('opened');
    // body.classList.toggle('blurred');
    console.log(body);

    body.forEach((ele) => {
        ele.classList.toggle('blurred');
    })

});
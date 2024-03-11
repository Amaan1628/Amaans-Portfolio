/* menu show Y hidden */
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*---------- Menu SHOW --------*/
/* validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/* -----------Menu Hidden------- */
/* validate if constant exist*/
if (navClose) {
    navClose.addEventListener("click", ()=> {
        navMenu.classList.remove("show-menu")
    })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n=>n.addEventListener("click", linkAction))

/*-------------------- Skills-------------------- */

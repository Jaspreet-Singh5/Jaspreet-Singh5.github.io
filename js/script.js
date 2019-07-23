// for mobile navigation menu
function mobList() {
    var x = document.querySelector(".navigation__list");
    var nav = document.querySelector(".navigation");
    var navNav = document.querySelector(".navigation__nav");
    var navIcon = document.querySelector(".navigation__icon");
    var navIconI = document.querySelector(".navigation__icon .fa");

    if (x.style.display === "flex") {
        navIconI.classList.remove("fa-times");
        navIconI.classList.add("fa-bars");
        navIcon.style.marginLeft = "0rem";

        nav.style.width = "8rem";
        x.style.display = "none";


        if (screen.width < 900) {
            nav.style.backgroundColor = "transparent";
            nav.style.right = "-1.2rem";
            nav.style.top = "1rem";
        }

        if (screen.width < 600) {
            navIcon.style.transform = "translateY(-3rem)";
        }
    } else {
        navIconI.classList.remove("fa-bars");
        navIconI.classList.add("fa-times");
        navIcon.style.marginLeft = "5rem";

        if (screen.width > 900)
            nav.style.width = "50%";
        else {
            nav.style.right = "0rem";
            nav.style.top = "0rem";
            navNav.style.padding = "1rem";
            nav.style.width = "25%";
            nav.style.backgroundColor = "#4b7bec";
            nav.style.borderRadius = "0px";
            nav.style.margin = "0px";

            if (screen.width < 600) {
                nav.style.width = "35%";
                nav.style.height = "100%";
            }
        }

        x.style.display = "flex";
        x.style.justifyContent = "space-between";
        x.style.alignItmes = "center";
    }
}
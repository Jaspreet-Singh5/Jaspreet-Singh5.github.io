function myFunction() {
    var x = document.querySelector(".navigation__list");
    var nav = document.querySelector(".navigation");
    var navNav = document.querySelector(".navigation__nav");
    var navIcon = document.querySelector(".navigation__icon");

    if (x.style.display === "flex") {
        navIcon.style.marginLeft = "0rem";

        if (screen.width < 600)
            navIcon.style.transform = "translateY(-3rem)";
        nav.style.width = "8%";
        x.style.display = "none";
        

        if (screen.width < 900) {
            nav.style.backgroundColor = "transparent";
        }        
    } else {
        navIcon.style.marginLeft = "5rem";

        if (screen.width > 900)
            nav.style.width = "50%";
        else {
            navNav.style.padding = "1rem";
            nav.style.width = "25%";
            nav.style.backgroundColor = "#4b7bec";
            nav.style.borderRadius = "0px";
            nav.style.margin = "0px";
        }
       
        x.style.display = "flex";
        x.style.justifyContent = "space-between";
        x.style.alignItmes = "center";
    }
}
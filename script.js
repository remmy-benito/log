var backgroundEnter = document.getElementsByClassName("backdrop-img");


// Adds mouseenter/mouseleave events to landing page articles
for (let index = 0; index < backgroundEnter.length; index++) {
    const element = backgroundEnter[index];

    element.addEventListener("mouseenter", mouseEnter);
    element.addEventListener("mouseleave", mouseLeave);

    var c = document.getElementsByClassName("article-info");
    
    function mouseEnter() {
        backgroundEnter[index].style.filter ="brightness(100%)";
        c[index].style.visibility = "visible";
        c[index].style.opacity = "1";
    }
    
    function mouseLeave() {
        backgroundEnter[index].style.filter ="brightness(55%)";
        c[index].style.visibility = "hidden";
        c[index].style.opacity = "0";
    }
}

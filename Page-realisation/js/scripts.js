// 	console.log(window.innerHeight);
// 	console.log(document.getElementById("home").offsetHeight);
// 	console.log(document.getElementById("portfolio").offsetHeight);
// console.log(document.getElementById("home").offsetHeight == window.innerHeight &&
//     document.getElementById("about").offsetHeight == window.innerHeight &&
//     document.getElementById("services2").offsetHeight === window.innerHeight &&
//     document.getElementById("portfolio").offsetHeight === window.innerHeight &&
//     document.getElementById("values").offsetHeight == window.innerHeight &&
//     document.getElementById("clients").offsetHeight == window.innerHeight);


// scroll by 100vh
if (document.getElementById("home").offsetHeight == window.innerHeight &&
    document.getElementById("about").offsetHeight == window.innerHeight &&
    document.getElementById("services2").offsetHeight == window.innerHeight &&
    document.getElementById("portfolio").offsetHeight == window.innerHeight &&
    document.getElementById("values").offsetHeight == window.innerHeight &&
    document.getElementById("clients").offsetHeight == window.innerHeight) {


    document.getElementById("home").addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            // scroll Down
            e.preventDefault();
            document.getElementById("about").scrollIntoView();
        }
    });

    document.getElementById("about").addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            // scroll Down
            e.preventDefault();
            document.getElementById("services2").scrollIntoView();
        } else {
            // scroll Up
            e.preventDefault();
            document.getElementById("home").scrollIntoView();
        }
    });

    document.getElementById("services2").addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            // scroll Down
            e.preventDefault();
            document.getElementById("portfolio").scrollIntoView();
        } else {
            // scroll Up
            e.preventDefault();
            document.getElementById("about").scrollIntoView();
        }
    });

    document.getElementById("portfolio").addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            // scroll Down
            e.preventDefault();
            document.getElementById("values").scrollIntoView();
        } else {
            // scroll Up
            e.preventDefault();
            document.getElementById("services2").scrollIntoView();
        }
    });

    document.getElementById("values").addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            // scroll Down
            e.preventDefault();
            document.getElementById("clients").scrollIntoView();
        } else {
            // scroll Up
            e.preventDefault();
            document.getElementById("portfolio").scrollIntoView();
        }
    });

    document.getElementById("clients").addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            // scroll Down
            e.preventDefault();
            document.getElementById("footer").scrollIntoView();
        } else {
            // scroll Up
            e.preventDefault();
            document.getElementById("values").scrollIntoView();
        }
    });
}

function loadNav() {
    if (window.innerWidth >= 768) {
        document.getElementById("nav-toggler").classList.add("nav-toggler-position-hidden");
        document.getElementById("navResponsive").classList.add("nav-list-wide-visible");
        document.getElementById("navResponsive").classList.remove("nav-list-wide-hidden");
        document.getElementById("navResponsive").classList.remove("nav-list-expanding-hidden");
    } else {
        document.getElementById("nav-toggler").classList.add("nav-toggler-position-visible");
        document.getElementById("navResponsive").classList.add("nav-list-wide-hidden");
        document.getElementById("navResponsive").classList.add("nav-list-expanding-hidden");
    }
}

// toggle menu/hamburger when window has 768 px
function toggleNav() {
    if (window.innerWidth >= 768) {
        document.getElementById("nav-toggler").classList.remove("nav-toggler-position-visible");
        document.getElementById("nav-toggler").classList.add("nav-toggler-position-hidden");

        document.getElementById("navResponsive").classList.remove("nav-list-wide-hidden");
        document.getElementById("navResponsive").classList.add("nav-list-wide-visible");

        document.getElementById("navResponsive").classList.remove("nav-list-expanding-hidden");
        document.getElementById("navResponsive").classList.remove("nav-list-expanding-visible");
    } else {
        document.getElementById("nav-toggler").classList.remove("nav-toggler-position-hidden");
        document.getElementById("nav-toggler").classList.add("nav-toggler-position-visible");

        document.getElementById("navResponsive").classList.remove("nav-list-wide-visible");
        document.getElementById("navResponsive").classList.add("nav-list-wide-hidden");

        document.getElementById("navResponsive").classList.add("nav-list-expanding-hidden");
    }
}

// toggle hamburger-menu when hamburger is clicked
function toggleExpandMenu() {
    var navResponsive = document.getElementById("navResponsive");

    if (navResponsive.classList.contains("nav-list-expanding-hidden")) {
        navResponsive.classList.remove("nav-list-expanding-hidden");
        navResponsive.classList.add("nav-list-expanding-visible");
    } else {
        navResponsive.classList.remove("nav-list-expanding-visible");
        navResponsive.classList.add("nav-list-expanding-hidden");
    }
}

// hide menu 
// and show arrow
// when window is scrolled
window.addEventListener("scroll", function() {
    var nav = document.getElementById("navigation");
    var arrow = document.getElementById("fixed-nav-arrow");

    if (window.scrollY > 10) {
        arrow.classList.remove("arrow-position-hidden");
        arrow.classList.add("arrow-position-visible");

        nav.classList.remove("nav-container-position-visible");
        nav.classList.add("nav-container-position-hidden");
    } else {
        arrow.classList.remove("arrow-position-visible");
        arrow.classList.add("arrow-position-hidden");

        nav.classList.remove("nav-container-position-hidden");
        nav.classList.add("nav-container-position-visible");
    }
});
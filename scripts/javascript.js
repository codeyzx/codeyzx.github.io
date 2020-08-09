const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-list');
const titleWeb = document.getElementById('websiteName');  
let mainNav = document.getElementById("mainNav");
        
    window.addEventListener("scroll", function() {

        if (window.pageYOffset > 0) {
        mainNav.classList.add("is-sticky");
        } else {
        mainNav.classList.remove("is-sticky");
        }

        if (window.pageYOffset > 0) {
        hamburger.classList.add("is-sticky");
        } else {
        hamburger.classList.remove("is-sticky");
        }

            
        if (window.pageYOffset > 0) {
        titleWeb.classList.add("is-sticky");
        } else {
        titleWeb.classList.remove("is-sticky");
        }
            
    });

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });


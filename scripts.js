/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

typeInsidePrintfLoop('Etudiant à l\'ISEN', document.getElementById("hello"), 300);

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function typeInsidePrintfLoop(word, targetElement, speed) {
    let index = 0;
    const printfElement = targetElement;

    function typeNextLetter() {
        const currentText = printfElement.textContent;
        const nextLetter = word[index];

        if (nextLetter!==undefined) {
            printfElement.innerHTML = `printf(<span style='color: green;'>"${currentText.slice(8,-3)}${nextLetter}"</span>);`;
            index++;
        } else {
            // Si on a atteint la fin du mot, réinitialise l'index
            index = 0;
            printfElement.innerHTML = 'printf();';
            typeNextLetter();
            // Attendez un peu avant de réinitialiser pour donner un effet de pause
        }
    }

    // Utilise setInterval pour afficher les lettres à l'intervalle spécifié
    setInterval(typeNextLetter, speed);
}

// Exemple d'utilisation avec un mot "Etudiant à l'ISEN" et un élément HTML avec l'id "printfOutput"


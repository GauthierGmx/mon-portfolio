// Fait apparaitre le bouton "backToTop" lorsqu'on scroll en dessous de 200px
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Permet de naviguer entre les onglets de la section "about"
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Désactiver tous les onglets
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activer l'onglet cliqué
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

// Permet de gérer la pop-up
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("photoPopup");
    const openPopupLink = document.querySelector("a#photoUsageLink  ");
    const closeBtn = document.querySelector(".close-btn");

    // Ouvrir la pop-up
    openPopupLink.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "block";
    });

    // Fermer la pop-up
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Fermer la pop-up en cliquant à l'extérieur
    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});

// Permet de gérer le menu burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
    
    burgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Fermer le menu après avoir cliqué sur un lien
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            burgerMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
});

// Gestion de l'envoi du formulaire de contact avec EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("_GsICEiBPbwzcYP0i"); // Remplace par ta clé publique EmailJS

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_jcea7hw", "template_enqgoul", this)
                .then(() => {
                    alert("Message envoyé avec succès !");
                    contactForm.reset(); // Réinitialise le formulaire après l'envoi
                })
                .catch((err) => {
                    alert("Une erreur s'est produite. Veuillez réessayer.");
                    console.error("Erreur EmailJS :", err);
                });
        });
    }
});

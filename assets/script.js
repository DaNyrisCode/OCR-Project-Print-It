const arrows = document.querySelectorAll(".arrow");
const bannerImg = document.querySelector(".banner-img");
const tagline = document.querySelector(".tagline");
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Représente l'index de la slide actuellement affichée. Oour suivre la position actuelle dans le tableau slides. Sera modifiée chaque fois que la slide change.
let currentIndex = 0;

// Permet de changer de slide en fonction de la direction (1 pour suivant, -1 pour précédent).
function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;

    // Mettre à jour l'image et le texte
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    tagline.innerHTML = slides[currentIndex].tagLine;
    }

// Ajout des écouteurs d'événements pour les flèches
arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        const direction = e.target.id === "arrow_right" ? 1 : -1;
        changeSlide(direction);
    });
});

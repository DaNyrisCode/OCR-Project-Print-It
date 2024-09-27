// Sélection des éléments du DOM
const arrows = document.querySelectorAll(".arrow");
const bannerImg = document.querySelector(".banner-img");
const tagline = document.querySelector(".tagline");
const dotsContainer = document.querySelector(".dots");

// Données des slides
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
    },
    {
        "image": "slide5.png",
        "tagLine": "Donnez <span>un nouveaux style à votre intérieur</span>"
    },
    {
        "image": "slide6.png",
        "tagLine": "Surprennez vos proches <span>avec des cartes faites à votre images</span>"
    }
];

let currentIndex = 0;
let dots = [];

// Fonctions
// Direction des slides.
const changeSlide = (direction) => {
    currentIndex += direction; 
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateSlide(); 
};

// Maj du current slide avec l'images et le texte.
const updateSlide = () => {
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    tagline.innerHTML = slides[currentIndex].tagLine;

    // Et les bullet points
    dots.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === currentIndex);
    });
};

// Création des bullet points
const createDots = () => {
    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("dot_selected");
        dotsContainer.appendChild(dot);
        dots.push(dot);

        // Ecouteur des bullet points
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlide();
        });
    });
};

// Ecouteur des flèches
const arrowListener = () => {
    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            const direction = e.target.id === "arrow_right" ? 1 : -1;
            changeSlide(direction);
        });
    });
};

// Appel des fonctions
createDots();
arrowListener();

const arrows = document.querySelectorAll(".arrow");
const bannerImg = document.querySelector(".banner-img");
const tagline = document.querySelector(".tagline");
const dotsContainer = document.querySelector(".dots");

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

// Représente l'index de la slide actuellement affichée. Sera modifiée chaque fois que la slide change.
let currentIndex = 0;

// Bullet points
// slide = élément actuel du tableau (contient les informations d'un slide).
slides.forEach((slide, index) => {
    // Création d'une div avec la class .dot
    const dot = document.createElement("div");
    dot.classList.add("dot");
    // Si index est égal à 0 (le premier slide) la class active est ajoutée pour le 1er dot par defaut.
    if (index === 0) dot.classList.add("dot_selected");
    // parent.appendChild(nouvelEnfant)
    dotsContainer.appendChild(dot);

    // Ajout des écouteurs d'événement pour les bullet points
    dot.addEventListener("click", () => {
       // Met à jour currentIndex avec l'index du dot cliqué.
        currentIndex = index;
        // Met à jour l'image, le texte et les bullet points, en fonction de la nouvelle valeur de currentIndex.
        updateSlide();
    });
});

// Maj des images, texte et les bullet points
function updateSlide() {
    // Met à jour la src de l'image. Insére le nom de l'image dans le chemin. slides = tableau, image = appartient à slides et contient le nom de l'image.
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    // Met à jour le HTML de l'élément tagline avec la propriété tagLine de slides correspondant au currentIndex.
    tagline.innerHTML = slides[currentIndex].tagLine;

    // Récupère tous les bullet points.
    const dots = document.querySelectorAll(".dot");
    // Retire la classe active de tous les points.
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    // Ajoute la classe active au point correspondant.
    dots[currentIndex].classList.add("dot_selected");
}

// Ajout des écouteurs d'événements pour les flèches
arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        // Si e.target.id est égal à "arrow_right", direction sera 1. Sinon (:), direction sera -1.
        const direction = e.target.id === "arrow_right" ? 1 : -1;
        // Appelle la fonction changeSlide avec la valeur de direction calculée au dessus.
        changeSlide(direction);
    });
});

// Permet de changer de slide en fonction de la direction (1 pour suivant, -1 pour précédent).
function changeSlide(direction) {
    // Modifie la valeur de currentIndex en ajoutant la valeur de direction.
    currentIndex += direction; 
    // Si on dépasse le premier slide en previous, currentIndex est réinitialisé au dernier slide.
    if (currentIndex < 0) currentIndex = slides.length - 1;
    // Si currentIndex est sup ou égal à slides.length = on dépasse le dernier slide en next. currentIndex est réinitialisé à 0, le premier slide.
    if (currentIndex >= slides.length) currentIndex = 0;
    // Fonction qui met à jour l'affichage du carrousel, utilise la valeur de currentIndex pour déterminer quelle image, texte, bullet point activer.
    updateSlide(); 
}
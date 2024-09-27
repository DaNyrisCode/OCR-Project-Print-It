Print it.

Dynamisez le site Internet statique d’une petite imprimerie familiale.

Etape 1 :

- Ajoutez les images des flèches pour pouvoir naviguer dans le carrousel.

Etape 2 :

- Mettez un event listener sur chacune des flèches.
- Assurez-vous qu’on peut différencier le clic sur le bouton gauche du clic sur le bouton droit.

Etape 3 :

- Ajoutez les bullet points sur la partie basse du slider. Il nous faut un point par image contenue dans le slider.
- Une fois les points affichés, différenciez le point qui signale la diapositive en cours de visionnage : ce sera la première. Dans le CSS, le point en cours a une classe spécifique.

Etape 4 :

- Au clic sur la flèche droite :
  on change le bullet point actif au suivant ;
  on change l’image ;
  on change le texte correspondant à l’image.
- Au clic sur la flèche gauche, nous faisons la même chose mais pour les éléments précédents.

Etape 5 :

- Si on est à la dernière image et que l’on clique à droite :
  on affiche la première image ;
  le point sélectionné est le premier.
- Si on est à la première image et qu’on clique à gauche :
  on affiche la dernière image ;
  le point sélectionné est le dernier.
- Dans tous les cas, le texte change en accord avec l’image montrée.

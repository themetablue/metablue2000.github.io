// Fonction pour recharger la page toutes les 15 secondes
function rechargerPage() {
    location.reload();
}

// Appeler la fonction pour la première fois
rechargerPage();

// Configurer une boucle pour recharger la page toutes les 15 secondes
setInterval(rechargerPage, 15000); // 15 000 millisecondes équivalent à 15 secondes

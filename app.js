particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,  // Nombre total de particules
      "density": {
        "enable": true,  // Activer ou désactiver la densité des particules
        "value_area": 800  // Densité des particules par zone
      }
    },
    "color": {
      "value": "#ffffff"  // Couleur des particules
    },
    "shape": {
      "type": "circle",  // Type de forme des particules (circle, edge, triangle, polygon, star, image)
      "stroke": {
        "width": 0,  // Largeur de la bordure de la particule
        "color": "#000000"  // Couleur de la bordure de la particule
      },
      "polygon": {
        "nb_sides": 5  // Nombre de côtés pour les particules de type polygon
      },
      "image": {
        "src": "img/github.svg",  // Chemin vers l'image personnalisée (laissez vide pour des cercles)
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,  // Opacité des particules
      "random": false,  // Opacité aléatoire pour chaque particule
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,  // Taille des particules
      "random": true,  // Taille aléatoire pour chaque particule
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,  // Activer ou désactiver les lignes entre les particules
      "distance": 150,  // Distance maximale des lignes entre les particules
      "color": "#ffffff",  // Couleur des lignes entre les particules
      "opacity": 0.4,  // Opacité des lignes entre les particules
      "width": 1  // Largeur des lignes entre les particules
    },
    "move": {
      "enable": true,  // Activer ou désactiver le mouvement des particules
      "speed": 6,  // Vitesse de déplacement des particules
      "direction": "none",  // Direction du mouvement des particules (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
      "random": false,  // Direction aléatoire pour chaque particule
      "straight": false,  // Mouvement rectiligne des particules
      "out_mode": "out",  // Que faire lorsque les particules sortent du conteneur (out, bounce)
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",  // Détecter les interactions sur le canvas
    "events": {
      "onhover": {
        "enable": true,  // Activer ou désactiver les interactions au survol
        "mode": "repulse"  // Mode d'interaction au survol (grab, repulse, bubble)
      },
      "onclick": {
        "enable": true,  // Activer ou désactiver les interactions au clic
        "mode": "push"  // Mode d'interaction au clic (push, remove, bubble)
      },
      "resize": true  // Recalculer les particules lors du redimensionnement de la fenêtre
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,  // Activer la détection de la rétine
  "config_demo": {
    "hide_card": false,  // Masquer la carte de démonstration
    "background_color": "#b61924",  // Couleur de fond du canvas
    "background_image": "",  // Image de fond du canvas
    "background_position": "50% 50%",  // Position de l'image de fond
    "background_repeat": "no-repeat",  // Répétition de l'image de fond
    "background_size": "cover"  // Taille de l'image de fond
  }
});

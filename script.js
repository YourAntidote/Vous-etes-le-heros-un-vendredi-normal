let chaptersObj = {
  depart: {
    subtitle: "Sortie du magasin",
    text: "Vous sortez d'un petit magasin et vous marchez vers votre voiture non loin. Cependant, en tournant la tête, vous voyez un homme avec une cagoule qui essaie d'arracher la saccoche d'une dame.",
    img: "../assets/Images/vole_saccoche.png",
    options: [
      {
        text: "Intervenir",
        action: "goToChapter('intervenir')",
      },
      {
        text: "Ne pas intervenir",
        action: "goToChapter('pas_intervenir')",
      },
    ],
  },

  intervenir: {
    subtitle: "Intervenir",
    text: "Votre cri à distrait le voleur, ainsi cela à permis à la dame de s'enfuir. Par contre le voleur n'a pas aimé votre petit jeu et marche dans votre direction.",
    img: "../assets/Images/pointe_doigt.png",
    options: [
      {
        text: "Oh oh..",
        action: "goToChapter('menace')",
      },
    ],
  },
  menace: {
    subtitle: "Menace",
    text: "À présent que vous avez tout son attention, le voleur sors son fusil et vous pointe avec en vous menacant de vous tuez. Que feriez-vous?",
    img: "../assets/Images/pointe_fusil.png",
    options: [
      {
        text: "Partir à courir",
        action: "goToChapter('accident')",
      },
      {
        text: "Faire à croire que la police est derrière lui",
        action: "goToChapter('distration')",
      },
      {
        text: "Vous faites à semblant que vous le reconnaissez",
        action: "goToChapter('confus')",
      },
    ],
  },
  accident: {
    subtitle: "Mort - L'accident",
    text: "Un conducteur imprudent arrive trop vite dans votre direction et n'a pas réagit assez vite pour s'arrêter et il vous rentre très vite dessus. Vous êtes mort",
    img: "../assets/Images/accident.png",
    options: [
      {
        text: "Recommencer",
        action: "goToChapter('depart')",
      },
    ],
  },
  distration: {
    subtitle: "Distration",
    text: "Vous avez réussi à le distraire et vous protifez de l'occasion pour y sauter dessus.",
    img: "../assets/Images/attaque.jpg",
    options: [
      {
        text: "À l'attaaaaque!",
        action: "goToChapter('tomber')",
      },
    ],
  },
  distrationxxx: {
    subtitle: "Distration",
    text: "Vous avez réussi à le distraire et vous protifez de l'occasion pour y sauter dessus.",
    img: "../assets/Images/attaque.jpg",
    options: [
      {
        text: "À l'attaaaaque!",
        action: "goToChapter('tomberxxx')",
      },
    ],
  },
  tomber: {
    subtitle: "Ennemi tomber à terre",
    text: "En tombant à terre, le voleur échappé son fusil à côté de lui, et il s'empresse de se relevé afin d'aller le récupérer.",
    img: "../assets/Images/tomber.png",
    options: [
      {
        text: "Le maintenir à terre",
        action: "goToChapter('arreter')",
      },
      {
        text: "Donner un coup de pied à son arme",
        action: "goToChapter('arreter')",
      },
    ],
  },
  tomberxxx: {
    subtitle: "Ennemi tomber à terre",
    text: "En tombant à terre, le voleur échappé son fusil à côté de lui, et il s'empresse de se relevé afin d'aller le récupérer.",
    img: "../assets/Images/tomber.png",
    options: [
      {
        text: "Le maintenir à terre",
        action: "goToChapter('arreter')",
      },
      {
        text: "Donner un coup de pied à son arme",
        action: "goToChapter('stab')",
      },
    ],
  },
  arreter: {
    subtitle: "Victoire - Arrêter",
    text: "Les autorités sont arrivées juste à temps. Le cambrioleur est arrêté et vous êtes sain et sauf.",
    img: "../assets/Images/arreter.png",
    options: [
      {
        text: "Recommencer",
        action: "goToChapter('debut')",
      },
    ],
  },
  pas_intervenir: {
    subtitle: "Dans la voiture",
    text: "Le braqueur sait que vous l'avez vu, et à présent il vous menace avec son fusil de descendre de votre véhicule et de laisser les clés dans le contacte.",
    img: "../assets/Images/pointe_fusil.png",
    options: [
      {
        text: "Oh oh...",
        action: "goToChapter('couteau')",
      },
    ],
  },
  couteau: {
    subtitle: "Se défendre?",
    text: "Vous avez un de chasse dans votre coffre à gant.",
    img: "../assets/Images/couteau_voiture.png",
    options: [
      {
        text: "Le prendre",
        action: "goToChapter('questionxxx')",
      },
      {
        text: "Le laisser",
        action: "goToChapter('question')",
      },
    ],
  },
  question: {
    subtitle: "Question",
    text: "Vous descendez du véhicule comme il vous l'a demandé. Il vous demande si vous êtes armé.",
    img: "../assets/Images/pointe_doigt.png",
    options: [
      {
        text: "Dire la vérité",
        action: "goToChapter('carJacking')",
      },
      {
        text: "Vous faîtes à semblant de parler une autre langue",
        action: "goToChapter('confus')",
      },
    ],
  },
  questionxxx: {
    subtitle: "Question",
    text: "Vous descendez du véhicule comme il vous l'a demandé. Il vous demande si vous êtes armé.",
    img: "../assets/Images/pointe_doigt.png",
    options: [
      {
        text: "Dire la vérité",
        action: "goToChapter('verite')",
      },
      {
        text: "Vous faîtes à semblant de parler une autre langue",
        action: "goToChapter('confusxxx')",
      },
      {
        text: "Mentir",
        action: "goToChapter('carJackingxxx')",
      },
    ],
  },
  confus: {
    subtitle: "Confus",
    text: "L'agresseur est confus et énervé et baisse sa garde sans s'en rendre compte, vous profitez de l'occasion pour y sauter dessus.",
    img: "../assets/Images/confus.png",
    options: [
      {
        text: "À l'attaaaaaque!",
        action: "goToChapter('tomber')",
      },
    ],
  },
  confusxxx: {
    subtitle: "Confus",
    text: "L'agresseur est confus et énervé et baisse sa garde sans s'en rednre compte, vous profitez de l'occasion pour y sauter dessus.",
    img: "../assets/Images/confus.png",
    options: [
      {
        text: "À l'attaaaaaque!",
        action: "goToChapter('tomberxxx')",
      },
    ],
  },
  verite: {
    subtitle: "Vériter",
    text: "Vous avouez la vérité sur le couteau et il vous demande de vous lui donner.",
    img: "../assets/Images/fusil_main.png",
    options: [
      {
        text: "Lui remettre dans sa main",
        action: "goToChapter('carJacking')",
      },
      {
        text: "Le lancer à ses pieds",
        action: "goToChapter('distrationxxx')",
      },
    ],
  },

  stab: {
    subtitle: "Mort - Poignardé",
    text: "Vous êtes parvenu à éloigné son arme à feu, mais il a récupérer votre couteau et il vous a poignardé.",
    img: "../assets/Images/stab.jpg",
    options: [
      {
        text: "Recommencer",
        action: "goToChapter('debut')",
      },
    ],
  },
  carJacking: {
    subtitle: "Car jacking",
    text: "Le cambrioleur vous menace de vous écartez du chemin afin qu'il accède à votre voiture.",
    img: "../assets/Images/car_jacking.png",
    options: [
      {
        text: "Le laisser passer",
        action: "goToChapter('bye')",
      },
      {
        text: "Lui sauter dessus",
        action: "goToChapter('homicide')",
      },
    ],
  },
  carJackingXXX: {
    subtitle: "Car jacking",
    text: "Le cambrioleur vous menace de vous écartez du chemin afin qu'il accède à votre voiture.",
    img: "../assets/Images/car_jacking.png",
    options: [
      {
        text: "Vous laisser passer",
        action: "goToChapter('bye')",
      },
      {
        text: "Vous lancer votre couteau",
        action: "goToChapter('tomberxxx')",
      },
      {
        text: "Sauter sur lui",
        action: "goToChapter('homicide')",
      },
    ],
  },
  homicide: {
    subtitle: "Homicide",
    text: "L'agresseur vous a vu venir et vous a tiré une balle dans la poitrine sans hésiter. Vous êtes mort.",
    img: "../assets/Images/homicide.jpg",
    options: [
      {
        text: "Recommencer",
        action: "goToChapter('debut')",
      },
    ],
  },
  bye: {
    subtitle: "Bye bye",
    text: "Vous avez pris la bonne décision de laisser le voleur prendre votre voiture, parce que rien n'est plus important que votre propre vive. Vous êtes sain et sauf",
    img: "../assets/Images/voiture_au_loin.jpg",
    options: [
      {
        text: "Recommencer",
        action: "goToChapter('debut')",
      },
    ],
  },
};

function goToChapter(chapterName) {
  let chapitreTitre = chaptersObj[chapterName]["subtitle"];
  let chapitreTexte = chaptersObj[chapterName]["text"];
  let chapitreImage = chaptersObj[chapterName]["img"];
  let chapitreOptions = chaptersObj[chapterName]["options"];

  let chapitreHTML = document.querySelector(".chapitre");
  let texteHTML = document.querySelector(".texte");
  let imageHTML = document.getElementById("image");

  console.log(chapitreTitre);

  chapitreHTML.innerHTML = chapitreTitre;
  texteHTML.innerHTML = chapitreTexte;
  imageHTML.src = chapitreImage;

  let button = document.querySelectorAll(".btn");

  for (let index = 0; index <= 2; index++) {
    if (chapitreOptions[index] != undefined) {
      button[index].innerHTML = chapitreOptions[index].text;
      button[index].setAttribute("onclick", chapitreOptions[index].action);
      button[index].classList.remove("vide");
    } else {
      button[index].classList.add("vide");
    }
  }
}

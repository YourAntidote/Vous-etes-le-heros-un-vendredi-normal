
let chaptersObj = {
  depart: {
    subtitle: "Sortie du magasin",
    text: "Vous sortez d'un petit magasin et vous marchez vers votre voiture non loin. Cependant, en tournant la tête, vous voyez un homme avec une cagoule qui essaie d'arracher la sacoche d'une dame.",
    img: "./assets/Images/vole_sacoche.png",
    options: [
      {
        text: "Intervenir 👍",
        action: "goToChapter('intervenir')",
      },
      {
        text: "Ne pas intervenir 👎",
        action: "goToChapter('pas_intervenir')",
      },
    ],
  },

  intervenir: {
    subtitle: "Intervenir",
    text: "Votre cri a distrait le voleur, ainsi cela à permis à la dame de s'enfuir. Par contre le voleur n'a pas aimé votre petit jeu et marche dans votre direction.",
    img: "./assets/Images/pointe_doigt.png",
    options: [
      {
        text: "Oh oh...😬",
        action: "goToChapter('menace')",
      },
    ],
  },
  menace: {
    subtitle: "Menace",
    text: "À présent que vous avez toute son attention, le voleur sort son fusil et vous pointe avec en vous menaçant de vous tuez. Que feriez-vous?",
    img: "./assets/Images/pointe_fusil.png",
    options: [
      {
        text: "S'enfuir 🏃‍♂️💨",
        action: "goToChapter('accident')",
      },
      {
        text: "Faire à croire que la police est derrière lui ❗👮‍♂️👈",
        action: "goToChapter('distraction')",
      },
      {
        text: "Faire à semblant de le reconnaître 👋😄",
        action: "goToChapter('confus')",
      },
    ],
  },
  accident: {
    subtitle: "Mort - L'accident",
    text: "Un conducteur imprudent arrive trop vite dans votre direction et n'a pas réagit assez vite pour s'arrêter et il vous rentre très vite dessus. Vous êtes mort",
    img: "./assets/Images/accident.png",
    options: [
      {
        text: "Recommencer 🔄",
        action: "goToChapter('depart')",
      },
    ],
  },
  distraction: {
    subtitle: "Distraction",
    text: "Vous avez réussi à le distraire et vous profitez de l'occasion pour y sauter dessus.",
    img: "./assets/Images/attaque.jpg",
    options: [
      {
        text: "À l'attaaaaque! 🤛💨",
        action: "goToChapter('tomber')",
      },
    ],
  },
  tomber: {
    subtitle: "Ennemi à terre!",
    text: "En tombant à terre, le voleur échappé son fusil à côté de lui, et il s'empresse de se relevé afin d'aller le récupérer.",
    img: "./assets/Images/tomber.png",
    options: [
      {
        text: "Le maintenir à terre 😵💫",
        action: "goToChapter('arreter')",
      },
      {
        text: "Donner un coup de pied à son arme 🔫",
        action: "chute()",
      },
    ],
  },
  arreter: {
    subtitle: "Victoire - Arrêter",
    text: "Les autorités sont arrivées juste à temps. Le cambrioleur est arrêté et vous êtes sain et sauf.",
    img: "./assets/Images/arreter.png",
    options: [
      {
        text: "Recommencer 🔄",
        action: "goToChapter('depart')",
      },
    ],
  },
  pas_intervenir: {
    subtitle: "Dans la voiture",
    text: "Le braqueur sait que vous l'avez vu, et à présent il vous menace avec son fusil de descendre de votre véhicule et de laisser les clés dans le contacte.",
    img: "./assets/Images/pointe_fusil.png",
    options: [
      {
        text: "Oh oh...😬",
        action: "goToChapter('couteau')",
      },
    ],
  },
  couteau: {
    subtitle: "Se défendre?",
    text: "Vous avez un couteau de chasse dans votre coffre à gant.",
    img: "./assets/Images/couteau_voiture.png",
    options: [
      {
        text: "Le prendre🔪",
        action: "objetcdc()",
      },
      {
        text: "Le laisser❌",
        action: "goToChapter('question')",
      },
    ],
  },
  question: {
    subtitle: "Question",
    text: "Vous descendez du véhicule comme il vous l'a demandé. À présent, il vous demande si vous êtes armé.",
    img: "./assets/Images/pointe_doigt.png",
    options: [
      {
        text: "Dire la vérité 🤔",
        action: "honnete()",
      },
      {
        text: "Essayer de parler une autre langue " + "<br>" + "🤨💬❓",
        action: "goToChapter('confus')",
      },
      {
        text: "Mentir 🤐",
        action: "menssonge()",
      },
    ],
  },
  confus: {
    subtitle: "Confus",
    text: "L'agresseur est confus et énervé et baisse sa garde sans s'en rendre compte, vous profitez de l'occasion pour y sauter dessus.",
    img: "./assets/Images/confus.png",
    options: [
      {
        text: "À l'attaaaaque! 🤛💨",
        action: "goToChapter('tomber')",
      },
    ],
  },
  verite: {
    subtitle: "Vérité",
    text: "Vous avouez la vérité sur le couteau et il vous demande de lui donner.",
    img: "./assets/Images/fusil_main.png",
    options: [
      {
        text: "Lui remettre dans sa main 🤲",
        action: "goToChapter('carJacking')",
      },
      {
        text: "Le lancer à ses pieds 👇🦶",
        action: "goToChapter('distraction')",
      },
    ],
  },
  mauvais_menteur: {
    subtitle: "Mauvais menteur",
    text: "Il vous demande de lui donner.",
    img: "./assets/Images/fusil_main.png",
    options: [
      {
        text:"Euuuh...enfaite 😅",
        action: "goToChapter('enerve')",
      },
    ],
  },
  enerve: {
    subtitle: "Homme en colère",
    text: "Il n'a vraiment pas aimé que vous vous moquiez de lui et il est très énervé.",
    img: "./assets/Images/confus.png",
    options: [
      {
        text: "Et meeeeeer--😬",
        action: "goToChapter('homicide')",
      },
    ],
  },
  stab: {
    subtitle: "Mort - Poignardé",
    text: "Vous êtes parvenu à éloigner son arme à feu, mais il a récupéré votre couteau et il vous a poignardé.",
    img: "./assets/Images/stab.jpg",
    options: [
      {
        text: "Recommencer 🔄",
        action: "goToChapter('depart')",
      },
    ],
  },
  carJacking: {
    subtitle: "Carjacking",
    text: "Le cambrioleur vous menace de vous écarter du chemin afin qu'il accède à votre voiture.",
    img: "./assets/Images/car_jacking.png",
    options: [
      {
        text: "Le laisser passer 🖖",
        action: "goToChapter('bye')",
      },
      {
        text: "Lui sauter dessus 🏃‍♂️💨",
        action: "goToChapter('homicide')",
      },
    ],
  },
  lancer: {
    subtitle: "Carjacking",
    text: "Le cambrioleur vous menace de vous écarter du chemin afin qu'il accède à votre voiture.",
    img: "./assets/Images/car_jacking.png",
    options: [
      {
        text: "Vous laisser passer 🖖",
        action: "goToChapter('bye')",
      },
      {
        text: "Vous lancer votre couteau 🔪💨",
        action: "goToChapter('distraction')",
      },
      {
        text: "Sauter sur lui 🏃‍♂️💨",
        action: "goToChapter('homicide')",
      },
    ],
  },
  homicide: {
    subtitle: "Mort - Homicide",
    text: "L'agresseur vous a tiré une balle dans la poitrine. Vous êtes mort.",
    img: "./assets/Images/homicide.jpg",
    options: [
      {
        text: "Recommencer 🔄",
        action: "goToChapter('depart')",
      },
    ],
  },
  bye: {
    subtitle: "Bye bye",
    text: "Vous avez pris la bonne décision de laisser le voleur prendre votre voiture, parce que rien n'est plus important que votre propre vive. Vous êtes sain et sauf",
    img: "./assets/Images/voiture_au_loin.jpg",
    options: [
      {
        text: "Recommencer 🔄",
        action: "goToChapter('depart')",
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

  let button = document.querySelectorAll(".btn");

  chapitreHTML.innerHTML = chapitreTitre;
  texteHTML.innerHTML = chapitreTexte;
  imageHTML.src = chapitreImage;

  for (let index = 0; index <= 2; index++) {
    if (chapitreOptions[index] != undefined) {
      button[index].innerHTML = chapitreOptions[index].text;
      button[index].setAttribute("onclick", chapitreOptions[index].action);
      button[index].classList.remove("none");
    } else {
      button[index].classList.add("none");
    }
  }
}

let knifeFounded = false;

function objetcdc() {
  knifeFounded = true;
  console.log("🔪");
  goToChapter("question");

}

function chute(){
  if (knifeFounded == true){
    goToChapter('stab');
  } else {
    goToChapter('arreter');
  }
}

function menssonge() {
  if (knifeFounded == true){
    goToChapter('verite');
  } else {
    goToChapter('mauvais_menteur');
  }
}

function lancer_couteau(){
  if (knifeFounded == true){
    goToChapter('lancer');
  } else {
    goToChapter('carJacking');
  }
}

function honnete(){
  if (knifeFounded == true){
    goToChapter('verite');
  } else {
    goToChapter('carJacking');
  }
}

goToChapter("depart");

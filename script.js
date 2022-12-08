
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
    text: "Un conducteur ne vous a pas vu arriver et vous avez pris un gros impact. Vous êtes mort",
    img: "./assets/Images/accident.png",
    options: [
      {
        text: "Recommencer 🔄",
        action: "recommencer()",
      },
    ],
  },
  distraction: {
    subtitle: "Distraction",
    text: "Vous avez réussi à le distraire et vous profitez de l'occasion pour y sauter dessus.",
    img: "./assets/Images/attaque.jpg",
    video: "./assets/vision_combat.mp4",
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
    video: "./assets/voiture_police.mp4",
    options: [
      {
        text: "Recommencer 🔄",
        action: "recommencer()",
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
        action: "recommencer()",
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
        action: "recommencer()",
      },
    ],
  },
  bye: {
    subtitle: "Bye bye",
    text: "Vous avez pris la bonne décision de laisser le voleur prendre votre voiture, parce que rien n'est plus important que votre propre vive. Vous êtes sain et sauf",
    video: "/assets/forrest_gump.mp4",
    options: [
      {
        text: "Recommencer 🔄",
        action: "recommencer()",
      },
    ],
  },
};

let audioOn =  document.querySelector('.sound-on'); 
let audioOff =  document.querySelector('.sound-off'); 
let btnAudio = document.querySelector('.audio'); 
let audio_value = true;
audio_value = localStorage.getItem('audio_is');


btnAudio.addEventListener("click", function(){
  audioOn.classList.toggle('none');
  audioOff.classList.toggle('none');
  if (audioOn.classList.contains('none') == true){
    audio_value = false;
    localStorage.setItem('audio_is', audio_value);
  } else {
    audio_value = true;
    localStorage.setItem('audio_is', audio_value);
  }
});

  if (audio_value == 'true' && audioOn.classList.contains('none') == true){
    audioOn.classList.remove('none');
    audioOff.classList.add('none');
    console.log("logo on is on");
  } else if (audio_value == 'false' && audioOff.classList.contains('none') == true) {
    audioOn.classList.add('none');
    audioOff.classList.remove('none');
    console.log("logo off is on");
  }


function goToChapter(chapterName) {
  let body = document.querySelector('body');
  let lastClass = body.className;
  body.classList.replace(lastClass, chapterName);
  const son = new Audio("./assets/son_bouton.mp3");

  if (audio_value == 'true' || audio_value == true){
    son.currentTime = 0;
    son.play();

  }

  localStorage.setItem('sauvegarde', chapterName);

  

  knifeFounded = localStorage.getItem('arme_blanche');
   

  let chapitreTitre = chaptersObj[chapterName]["subtitle"];
  let chapitreTexte = chaptersObj[chapterName]["text"];
  let chapitreImage = chaptersObj[chapterName]["img"];
  let chapitreOptions = chaptersObj[chapterName]["options"];
  let chapitreVideo = chaptersObj[chapterName]["video"];

  let chapitreHTML = document.querySelector(".chapitre");
  let texteHTML = document.querySelector(".texte");
  let imageHTML = document.getElementById("image");
  let videoHTML = document.getElementById("video");
  let button = document.querySelectorAll(".btn");
  chapitreHTML.innerHTML = chapitreTitre;
  texteHTML.innerHTML = chapitreTexte;

  
  if (chapitreVideo != undefined){
    
    videoHTML.src = chapitreVideo;
    videoHTML.classList.remove("none");
    imageHTML.classList.add("none");
    videoHTML.playbackRate = 0.5;
  } else {
    imageHTML.src = chapitreImage;
    videoHTML.classList.add("none");
    imageHTML.classList.remove("none");
  }



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


let chapterName = 'depart';


let knifeFounded = false;
knifeFounded = localStorage.getItem('arme_blanche');


function objetcdc() {
  knifeFounded = true;

  
  console.log(knifeFounded +"2");
  localStorage.setItem('arme_blanche', knifeFounded);
  console.log(localStorage.getItem('arme_blanche') + "3");
  goToChapter("question");
}

function chute(){
  if (knifeFounded == 'true'){
    goToChapter('stab');
  } else {
    goToChapter('arreter');
  }
}

function menssonge() {
  if (knifeFounded == 'true'){
    goToChapter('lancer');
  } else {
    goToChapter('mauvais_menteur');
  }
}

function lancer_couteau(){
  if (knifeFounded == 'true'){
    goToChapter('lancer');
  } else {
    goToChapter('carJacking');
  }
}

function honnete(){
  if (knifeFounded == 'true'){
    goToChapter('verite');
  } else {
    goToChapter('carJacking');
  }
}

function recommencer(){
  knifeFounded = false;
  localStorage.setItem('arme_blanche', knifeFounded);
  goToChapter('depart');
}

chapterName = localStorage.getItem('sauvegarde');

if (chapterName == 'null'){
  goToChapter('depart');
} else {
  goToChapter(chapterName);
}

let optionBtn = document.getElementById('options'); 
let option_value = optionBtn.checked;
let ui_option = document.querySelector('.ui_option');
let exit_screen = document.querySelector('.exit_screen'); 

exit_screen.addEventListener('click', function(){
  ui_option.classList.toggle('none');
  exit_screen.classList.toggle('none');
  optionBtn.checked = false;
})
optionBtn.addEventListener('change', function(){
  ui_option.classList.toggle('none');
  exit_screen.classList.toggle('none');
})

let reset = document.querySelector('.reset');

reset.addEventListener('click', function(){
  ui_option.classList.toggle('none');
  exit_screen.classList.toggle('none');
  optionBtn.checked = false;
  knifeFounded = false;
  localStorage.setItem('arme_blanche', knifeFounded);
  goToChapter('depart');
})


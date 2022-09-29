let chaptersObj = {
    depart : {
        subtitle: "Sortie du magasin",
        text: "Vous sortez d'un petit magasin et vous marchez vers votre voiture non loin. Cependant, en tournant la tête, vous voyez un homme avec une cagoule qui essaie d'arracher la saccoche d'une dame.",
        img: "../assets/Images/vole_saccoche.png",
        options: {
            option1: {
                text: "Intervenir", 
                action:"goToChapter('intervenir')"
            }, 
            option2: {
                text: "Ne pas intervenir", 
                action:"goToChapter('pas_intervenir')"
            },
        },
    },

    intervenir : {
        subtitle: "Intervenir",
        text: "Votre cri de distraire le voleur, ainsi cele à permis à la dame de s'enfuir. Par contre le voleur n'a pas aimé votre petit jeu et marche dans votre direction.",
        img: "../assets/Images/dame_cour.png",
        options: {
            option1: {
                text: "Oh oh..", 
                action:"goToChapter('menace')"
            },
        },
    },
    menace : {
        subtitle: "Menace",
        text: "À présent que vous avez tout son attention, le voleur sors sont fusil et vous pointe avec en vous menacant de vous tuez. Que feriez-vous?",
        img: "../assets/Images/pointe_fusil.png",
        options: {
            option1: {
                text: "Partir à courir", 
                action:"goToChapter('ecrasement')"
            }, 
            option2: {
                text: "Faire à croire que la police est derrière lui", 
                action:"goToChapter('distration')"
            },
            option3: {
                text: "Vous faites à semblant que vous le reconnaissez", 
                action:"goToChapter('confu')"
            },
        },
     },
    ecrasement : {
        subtitle: "Mort - Écrasement",
        text: "Un conducteur imprudent arrive trop vite dans votre direction et n'a pas réagit assez vite pour s'arrêter et il vous rentre très vite dessus. Vous êtes mort",
        img: "../assets/Images/ecrasement.png",
        options: {
            option1: {
                text: "Recommencer", 
                action:"goToChapter('depart')"
            },
        },
    },
    distration : {
        subtitle: "Distration",
        text: "Vous avez réussi à le distraire et vous protifez de l'occasion pour y sauter dessus.",
        img: "../assets/Images/distration.png",
        options: {
            option1: {
                text: "À l'attaaaaque!", 
                action:"goToChapter('tomber')"
            },
        },
    },
    distrationxxx : {
        subtitle: "Distration",
        text: "Vous avez réussi à le distraire et vous protifez de l'occasion pour y sauter dessus.",
        img: "../assets/Images/distration.png",
        options: {
            option1: {
                text: "À l'attaaaaque!", 
                action:"goToChapter('tomberxxx')"
            },
        },
    },
    tomber : {
        subtitle: "Ennemi tomber à terre",
        text: "En tombant à terre, le voleur échappé son fusil à côté de lui, et il s'empresse de se relevé afin d'aller le récupérer.",
        img: "../assets/Images/tomber.png",
        options: {
            option1: {
                text: "Le maintenir à terre", 
                action:"goToChapter('arreter')"
            },
            option2: {
                text: "Donner un coup de pied à son arme", 
                action:"goToChapter('arreter')"
            },
        },
    },
    tomberxxx : {
        subtitle: "Ennemi tomber à terre",
        text: "En tombant à terre, le voleur échappé son fusil à côté de lui, et il s'empresse de se relevé afin d'aller le récupérer.",
        img: "../assets/Images/tomber.png",
        options: {
            option1: {
                text: "Le maintenir à terre", 
                action:"goToChapter('arreter')"
            },
            option2: {
                text: "Donner un coup de pied à son arme", 
                action:"goToChapter('stab')"
            },
        },
    },
    arreter : {
        subtitle: "Victoire - Arrêter",
        text: "Les autorités sont arrivées juste à temps. Le cambrioleur est arrêté et vous êtes sain et sauf.",
        img: "../assets/Images/arreter.png",
        options: {
            option1: {
                text: "Recommencer", action:"goToChapter('debut')"
            },
        },
    },
    pas_intervenir : {
        subtitle: "Dans la voiture",
        text: "Le braqueur sait que vous l'avez vu, et à présent il vous menace avec son fusil de descendre de votre véhicule et de laisser les clés dans le contacte.",
        img: "../assets/Images/voiture.png",
        options: {
            option1: {
                text: "Oh oh...", 
                action:"goToChapter('couteau')"
            },
        },
    },
    couteau : {
        subtitle: "Couteau suisse",
        text: "Vous avez un couteau suisse dans votre porte-goblet.",
        img: "../assets/Images/couteau_voiture.png",
        options: {
            option1: {
                text: "Le prendre", 
                action:"goToChapter('questionxxx')"
            },
            option2: {
                text: "Le laisser", 
                action:"goToChapter('question')"
            },
        },
    },
    question : {
        subtitle: "Question",
        text: "Vous descendez du véhicule comme il vous l'a demandé. Il vous demande si vous êtes armé.",
        img: "../assets/Images/couteau_voiture_pris.png",
        options: {
            option1: {
                text: "Dire la vérité", 
                action:"goToChapter('carJacking')"
            },
            option2: {
                text: "Vous faîtes à semblant de parler une autre langue", 
                action:"goToChapter('confu')"
            },
        },
    },
    questionxxx : {
        subtitle: "Question",
        text: "Vous descendez du véhicule comme il vous l'a demandé. Il vous demande si vous êtes armé.",
        img: "../assets/Images/couteau_voiture_pris.png",
        options: {
            option1: {
                text: "Dire la vérité", 
                action:"goToChapter('verite')"
            }, 
            option2: {
                text: "Vous faîtes à semblant de parler une autre langue",
                action:"goToChapter('confuxxx')"
            },
            option3: {
                text: "Mentir", 
                action:"goToChapter('carJackingxxx')"
            },
        },
    },
    confu : {
        subtitle: "Confu",
        text: "L'agresseur est confu et baisse sa garde sans s'en rednre compte, vous profitez de l'occasion pour y sauter dessus.",
        img: "../assets/Images/confu.png",
        options: {
            option1: {
                text: "À l'attaaaaaque!", 
                action:"goToChapter('tomber')"
            },
        },
    },
    confuxxx : {
        subtitle: "Confu",
        text: "L'agresseur est confu et baisse sa garde sans s'en rednre compte, vous profitez de l'occasion pour y sauter dessus.",
        img: "../assets/Images/confu.png",
        options: {
            option1: {
                text: "À l'attaaaaaque!", 
                action:"goToChapter('tomberxxx')"
            },
        },
    },
    verite : {
        subtitle: "Vériter",
        text: "Vous avouez la vérité sur le couteau et il vous demande de la lancer sur le côté.",
        img: "../assets/Images/couteau_main.png",
        options: {
            option1: {
                text: "La lancer sur le côté", 
                action:"goToChapter('carJacking')"
            },
            option2: {
                text: "La lancer à ses pied", 
                action:"goToChapter('distrationxxx')"
            },
        },
    },

    stab : {
        subtitle: "Mort - Poignardé",
        text: "Vous êtes parvenu à éloigné son arme à feu, mais il a récupérer votre couteau et il vous a poignardé.",
        img: "../assets/Images/couteau_main.png",
        options: {
            option1: {
                text: "Recommencer", 
                action:"goToChapter('debut')"
            },
        },
    },
    carJacking : {
        subtitle: "Car jacking",
        text: "Le cambrioleur vous menace de vous écartez du chemain afin qu'il accède à votre voiture.",
        img: "../assets/Images/car_jacking.png",
        options: {
            option1: {
                text: "Le laisser passer", 
                action:"goToChapter('bye')"
            },
            option2: {
                text: "Lui sauter dessus", 
                action:"goToChapter('homicide')"
            },
        },
    },
    carJackingXXX : {
        subtitle: "Car jacking",
        text: "Le cambrioleur vous menace de vous écartez du chemain afin qu'il accède à votre voiture.",
        img: "../assets/Images/car_jacking.png",
        options: {
            option1: {
                text: "Vous laisser passer", 
                action:"goToChapter('bye')"
            },
            option2: {
                text: "Vous lancer votre couteau", 
                action:"goToChapter('tomberxxx')"
            },
            option3: {
                text: "Sauter sur lui", 
                action:"goToChapter('homicide')"
            },
        },
    },
    homicide : {
        subtitle: "Homicide",
        text: "L'agresseur vous a vu venir et vous a tiré une balle dans la poitrine sans hésiter. Vous êtes mort.",
        img: "../assets/Images/homicide.png",
        options: {
            option1: {
                text: "Recommencer", 
                action:"goToChapter('debut')"
            },
        },
    },
    bye : {
        subtitle: "Bye bye",
        text: "Vous avez pris la bonne décision de laisser le voleur prendre votre voiture, parce que rien n'est plus important que votre propre vive. Vous êtes sain et sauf",
        img: "../assets/Images/voiture_au_loin.png",
        options: {
            option1: {
                text: "Recommencer", 
                action:"goToChapter('debut')"
            },
        },
    },
};




function goToChapter(chapterName) {
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
  };

let germanDisplay = document.getElementById("germanWords");
let spanishDisplay = document.getElementById("spanishWords");

let germanWords = [
    { german: "sein", spanish: "ser" },
    { german: "haben", spanish: "haber" },
    { german: "werden", spanish: "convertirse" },
    { german: "können", spanish: "poder" },
    { german: "müssen", spanish: "deber" },
    { german: "wollen", spanish: "querer" },
    { german: "sagen", spanish: "decir" },
    { german: "geben", spanish: "dar" },
    { german: "kommen", spanish: "venir" },
    { german: "gehen", spanish: "ir" },
    { german: "wissen", spanish: "saber" },
    { german: "sehen", spanish: "ver" },
    { german: "lassen", spanish: "dejar hacer/permitir" },
    { german: "stehen", spanish: "estar de pie" },
    { german: "finden", spanish: "encontrar" },
    { german: "bleiben", spanish: "permanecer" },
    { german: "liegen", spanish: "yacer" },
    { german: "heißen", spanish: "llamarse" },
    { german: "denken", spanish: "pensar" },
    { german: "nehmen", spanish: "tomar" },
    { german: "tun", spanish: "hacer" },
    { german: "dürfen", spanish: "permitir" },
    { german: "glauben", spanish: "creer" },
    { german: "halten", spanish: "mantener" },
    { german: "nennen", spanish: "nombrar" },
    { german: "mögen", spanish: "gustar" },
    { german: "zeigen", spanish: "mostrar" },
    { german: "führen", spanish: "dirigir/conducir" },
    { german: "sprechen", spanish: "hablar" },
    { german: "bringen", spanish: "traer" },
    { german: "fahren", spanish: "conducir" },
    { german: "leben", spanish: "vivir" },
    { german: "meinen", spanish: "opinar" },
    { german: "fragen", spanish: "preguntar" },
    { german: "kennen", spanish: "conocer" },
    { german: "gelten", spanish: "valer" },
    { german: "stellen", spanish: "poner" },
    { german: "spielen", spanish: "jugar" },
    { german: "arbeiten", spanish: "trabajar" },
    { german: "brauchen", spanish: "necesitar" },
    { german: "folgen", spanish: "seguir" },
    { german: "lernen", spanish: "aprender" },
    { german: "verstehen", spanish: "entender" },
    { german: "versuchen", spanish: "intentar" },
    { german: "schreiben", spanish: "escribir" },
    { german: "laufen", spanish: "correr" },
    { german: "erklären", spanish: "explicar" },
    { german: "sitzen", spanish: "sentarse" },
    { german: "scheinen", spanish: "parecer cierto" },
    { german: "gehören", spanish: "pertenecer" },
    { german: "bekommen", spanish: "recibir" },
    { german: "anfangen", spanish: "comenzar" },
    { german: "verbringen", spanish: "pasar tiempo" },
    { german: "erreichen", spanish: "lograr" },
    { german: "verändern", spanish: "cambiar" },
    { german: "entwickeln", spanish: "desarrollar" },
    { german: "entscheiden", spanish: "decidir" },
    { german: "bauen", spanish: "construir" },
    { german: "öffnen", spanish: "abrir" },
    { german: "dienen", spanish: "servir" },
    { german: "verlieren", spanish: "perder" },
    { german: "helfen", spanish: "ayudar" },
    { german: "behalten", spanish: "conservar" },
    { german: "studieren", spanish: "estudiar" },
    { german: "reisen", spanish: "viajar" },
    { german: "erlauben", spanish: "permitir" },
    { german: "genießen", spanish: "disfrutar" },
    { german: "gewinnen", spanish: "ganar" },
    { german: "trinken", spanish: "beber" },
    { german: "tragen", spanish: "llevar" },
    { german: "aussehen", spanish: "parecer" },
    { german: "fühlen", spanish: "sentir" },
    { german: "suchen", spanish: "buscar" },
    { german: "bieten", spanish: "ofrecer" },
    { german: "erwarten", spanish: "esperar" },
    { german: "bedeuten", spanish: "significar" }
];

let start = "";
let germanList = new Set();
let spanishList = new Set();
let score = document.getElementById("score");
let points = 0;
let timerId = 0;

// Make random words and start time

function showWords() {
    let i = 0;
    germanList.clear();
    spanishList.clear();
    while (i < 10) {
        let x = Math.floor(Math.random() * germanWords.length);
        let wordAdded = germanWords[x].german;
        let wordAddedSpanish = germanWords[x].spanish;
        germanList.add(wordAdded);
        spanishList.add(wordAddedSpanish);
        i++
    }
    if (germanList.size !== spanishList.size || germanList.size <= 9){
        showWords();
        return;
    }
    clearLists();
    printList();
    document.getElementById("play").style.display = "none";
    start = new Date();
    timerId = setInterval(time, 1000);
    reset();
};

function time() {
    const timer = document.getElementById("time");
    let currentTime = new Date();
    let total = Math.floor((currentTime - start) / 1000);
    timer.innerHTML = `Time: ${total}`;
    if(total === 50){
        germanDisplay.style.display = "none";
        spanishDisplay.style.display = "none";
        score.textContent = "Sorry, time out!";
        clearInterval(timerId);
    }
};

// Change the order

function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// Show list of words
let germanArray = [];
let spanishArray = null;

function printList() {
    germanArray = Array.from(germanList);
    spanishArray = Array.from(spanishList);

    let germanListShuffle = shuffleArray(germanArray);
    let spanishListShuffle = shuffleArray(spanishArray);

    germanListShuffle.forEach(function (word) {
        let paragraph = document.createElement('p');
        paragraph.textContent = word;
        germanDisplay.appendChild(paragraph);
    });

    for (i in spanishListShuffle) {
        let paragraph = document.createElement('p');
        paragraph.textContent = spanishListShuffle[i];
        spanishDisplay.appendChild(paragraph);
    };
}

// Check if cliked
let word1 = null;
let word2 = null;

let selectedWord1 = null;
let selectedWord2 = null;

let selectedObject1 = null;
let selectedObject2 = null;

germanDisplay.addEventListener('click', function (event) {
    if (event.target.tagName === 'P') {
        word1 = event.target;
        event.target.style.color = 'red';
        selectedWord1 = event.target.textContent;
        matchCheck();
    }
});

spanishDisplay.addEventListener('click', function (event) {
    if (event.target.tagName === 'P') {
        event.target.style.color = 'pink';
        word2 = event.target;
        selectedWord2 = event.target.textContent;
        matchCheck();
    }   
});

// Check if match && the score

function matchCheck() {
    selectedObject1 = germanArray.findIndex(obj => obj === selectedWord1);
    selectedObject2 = spanishArray.findIndex(obj => obj === selectedWord2);

    if (selectedObject1 === selectedObject2 && selectedWord1 !== null) {
        points++;
        score.innerHTML = points;
        word1.style.display = 'none';
        word2.style.display = 'none';
        selectedWord1 = "";
        selectedWord2 = "";
        if (points === 10) {
            germanDisplay.style.display = "none";
            spanishDisplay.style.display = "none";
            score.textContent = "Congratulations, you won!";
            clearInterval(timerId);
            levelTwo();
        }
    } 
}

// Reset
function reset() {
    let restart = document.getElementById("restart");
    let startAgain = document.createElement('button');
    startAgain.textContent = "Restart";
    restart.append(startAgain);
    restart.addEventListener('click', function () {
        location.reload();
    })
}

// Level two
function levelTwo() {
    if (score.textContent === "Congratulations, you won!") {
        let restart = document.getElementById("restart");
        let levelTwoButton = document.createElement('button');
        levelTwoButton.textContent = "Play level 2";
        restart.append(levelTwoButton);
        levelTwoButton.addEventListener('click', function () {
            showLevelTwoWords();
        });
    }
}

let levelTwoGermanWords = [
    { german: "Auto", spanish: "coche" },
    { german: "Haus", spanish: "casa" },
    { german: "Baum", spanish: "árbol" },
    { german: "Hund", spanish: "perro" },
    { german: "Katze", spanish: "gato" },
    { german: "Buch", spanish: "libro" },
    { german: "Stuhl", spanish: "silla" },
    { german: "Tisch", spanish: "mesa" },
    { german: "Tür", spanish: "puerta" },
    { german: "Fenster", spanish: "ventana" },
    { german: "Blume", spanish: "flor" },
    { german: "Vogel", spanish: "pájaro" },
    { german: "Fisch", spanish: "pez" },
    { german: "Straße", spanish: "calle" },
    { german: "Stadt", spanish: "ciudad" },
    { german: "Land", spanish: "país" },
    { german: "Wasser", spanish: "agua" },
    { german: "Feuer", spanish: "fuego" },
    { german: "Himmel", spanish: "cielo" },
    { german: "Sonne", spanish: "sol" },
    { german: "Mond", spanish: "luna" },
    { german: "Stern", spanish: "estrella" },
    { german: "Berg", spanish: "montaña" },
    { german: "Fluss", spanish: "río" },
    { german: "Meer", spanish: "mar" },
    { german: "See", spanish: "lago" },
    { german: "Wald", spanish: "bosque" },
    { german: "Wiese", spanish: "pradera" },
    { german: "Feld", spanish: "campo" },
    { german: "Pferd", spanish: "caballo" },
    { german: "Kuh", spanish: "vaca" },
    { german: "Schaf", spanish: "oveja" },
    { german: "Huhn", spanish: "pollo" },
    { german: "Schwein", spanish: "cerdo" },
    { german: "Elefant", spanish: "elefante" },
    { german: "Löwe", spanish: "león" },
    { german: "Tiger", spanish: "tigre" },
    { german: "Bär", spanish: "oso" },
    { german: "Frosch", spanish: "rana" },
    { german: "Schlange", spanish: "serpiente" },
    { german: "Krokodil", spanish: "cocodrilo" },
    { german: "Affe", spanish: "mono" },
    { german: "Biene", spanish: "abeja" },
    { german: "Schmetterling", spanish: "mariposa" },
    { german: "Spinne", spanish: "araña" },
    { german: "Käfer", spanish: "escarabajo" },
    { german: "Fliege", spanish: "mosca" },
    { german: "Mücke", spanish: "mosquito" },
    { german: "Ameise", spanish: "hormiga" },
    { german: "Wolke", spanish: "nube" },
    { german: "Regen", spanish: "lluvia" },
    { german: "Schnee", spanish: "nieve" },
    { german: "Wind", spanish: "viento" },
    { german: "Sturm", spanish: "tormenta" },
    { german: "Blitz", spanish: "rayo" },
    { german: "Donner", spanish: "trueno" },
    { german: "Kälte", spanish: "frío" },
    { german: "Hitze", spanish: "calor" },
    { german: "Herbst", spanish: "otoño" },
    { german: "Frühling", spanish: "primavera" },
    { german: "Sommer", spanish: "verano" },
    { german: "Winter", spanish: "invierno" },
    { german: "Schule", spanish: "escuela" },
    { german: "Lehrer", spanish: "profesor" },
    { german: "Schüler", spanish: "estudiante" },
    { german: "Klassenzimmer", spanish: "aula" },
    { german: "Bleistift", spanish: "lápiz" },
    { german: "Papier", spanish: "papel" },
    { german: "Tafel", spanish: "pizarra" },
    { german: "Buch", spanish: "libro" },
    { german: "Kugelschreiber", spanish: "bolígrafo" },
    { german: "Uhr", spanish: "reloj" },
    { german: "Handy", spanish: "móvil" },
    { german: "Computer", spanish: "ordenador" },
    { german: "Tasche", spanish: "bolso" },
    { german: "Brille", spanish: "gafas" },
    { german: "Jacke", spanish: "chaqueta" },
    { german: "Hose", spanish: "pantalones" },
    { german: "Schuh", spanish: "zapato" },
    { german: "Hut", spanish: "sombrero" },
    { german: "Kleid", spanish: "vestido" },
    { german: "Anzug", spanish: "traje" },
    { german: "Rock", spanish: "falda" },
    { german: "Pullover", spanish: "suéter" },
    { german: "Mantel", spanish: "abrigo" },
    { german: "Socken", spanish: "calcetines" },
    { german: "Unterwäsche", spanish: "ropa interior" },
    { german: "Bett", spanish: "cama" },
    { german: "Küche", spanish: "cocina" },
    { german: "Bad", spanish: "baño" },
    { german: "Wohnzimmer", spanish: "salón" },
    { german: "Schlafzimmer", spanish: "dormitorio" },
    { german: "Kühlschrank", spanish: "frigorífico" },
    { german: "Herd", spanish: "horno" },
    { german: "Mikrowelle", spanish: "microondas" },
    { german: "Fernseher", spanish: "televisión" }
];

function showLevelTwoWords() {
    let i = 0;
    germanList.clear();
    spanishList.clear();
    while (i < 10) {
        let x = Math.round(Math.random() * levelTwoGermanWords.length);
        let wordAdded = levelTwoGermanWords[x].german;
        let wordAddedSpanish = levelTwoGermanWords[x].spanish;
        germanList.add(wordAdded);
        spanishList.add(wordAddedSpanish);
        i++;
    }
    if (germanList.size !== spanishList.size || germanList.size <= 9){
        showWords();
        return;
    }
    germanDisplay.style.display = "";
    spanishDisplay.style.display = "";
    document.getElementById("play").style.display = "none";
    printList();
    start = new Date();
    timerId = setInterval(time, 1000);
    reset();
    console.log("showleveltwo executed");
};

function clearLists() {
    while (germanDisplay.firstChild) {
        germanDisplay.removeChild(germanDisplay.firstChild);
    }
    while (spanishDisplay.firstChild) {
        spanishDisplay.removeChild(spanishDisplay.firstChild);
    }
}
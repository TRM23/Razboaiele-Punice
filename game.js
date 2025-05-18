const question = document.getElementById("question");
const alegeri = Array.from(document.getElementsByClassName("alege-text"));

let curentIntrebare = {};
let acceptRaspunsuri = false;
let scor = 0;
let nrIntrebari = 0;
let listaIntrebari = [];

let intrebari = [
    {
        question: "Intrebare 1?",
        alegere1: "alegere 1",
        alegere2: "alegere 2",
        alegere3: "alegere 3",
        alegere4: "alegere 4",
        raspuns: 1
    },
    {
        question: "Intrebare 2?",
        alegere1: "alegere 1",
        alegere2: "alegere 2",
        alegere3: "alegere 3",
        alegere4: "alegere 4",
        raspuns: 2
    },
    {
        question: "Intrebare 3?",
        alegere1: "alegere 1",
        alegere2: "alegere 2",
        alegere3: "alegere 3",
        alegere4: "alegere 4",
        raspuns: 3
    },
];

//Constante

const raspuns_corect = 10;
const nr_intrebari = 3;

startGame = () => {
    nrIntrebari = 0;
    scor = 0;
    listaIntrebari = [...intrebari]
    console.log(listaIntrebari)
    nouaIntrebare();
}

nouaIntrebare = () => {
    if(listaIntrebari===0 || nrIntrebari >= nr_intrebari)
        return window.location.assign("/end.html");
    nrIntrebari++;
    const intrebariExistente = Math.floor(Math.random() * listaIntrebari.length);

    console.log
    curentIntrebare = listaIntrebari[intrebariExistente];
    question.innerText = curentIntrebare.question;

    alegeri.forEach(alegere => {
        const number = alegere.dataset["number"];
        alegere.innerText = curentIntrebare["alegere" + number]
    });

    listaIntrebari.splice(intrebariExistente, 1)

    acceptRaspunsuri = true;
}

alegeri.forEach(alegere => {
    alegere.addEventListener('click', e => {
        if(!acceptRaspunsuri) return;

        acceptRaspunsuri = false;
        const alegereSelectata = e.target;
        const raspunsSelectat = alegereSelectata.dataset["number"];

        console.log(raspunsSelectat);

        const clasaAplicata = raspunsSelectat == curentIntrebare.raspuns ? 'corect' : 'incorect';
        alegereSelectata.parentElement.classList.add(clasaAplicata);

        setTimeout( () => {
            alegereSelectata.parentElement.classList.remove(clasaAplicata);
            console.log(clasaAplicata);
            nouaIntrebare();
        }, 1000);

        
    });
})

startGame();
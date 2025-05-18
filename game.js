const question = document.getElementById("question");
const alegeri = Array.from(document.getElementsByClassName("alege-text"));
const progressText = document.getElementById('progressText');
const scorText = document.getElementById('scor');
const progressBarFull = document.getElementById('progressBarFull');

let curentIntrebare = {};
let acceptRaspunsuri = false;
let scor = 0;
let nrIntrebari = 0;
let listaIntrebari = [];

let intrebari = [
    {
        question: "Războaiele punice reprezintă confruntări armate între:",
        alegere1: "romani și daci",
        alegere2: "romani și carthaginezi",
        alegere3: "cartaginezi și puni",
        alegere4: "daci și gali",
        raspuns: 2
    },
    {
        question: "Au existat:",
        alegere1: "4 războaie",
        alegere2: "2 războaie",
        alegere3: "1 războaie",
        alegere4: "3 războaie",
        raspuns: 4
    },
    {
        question: "Ambele puteri doreau hegemonia asupra:",
        alegere1: "Imperiul Roman",
        alegere2: "Peninsulei Iberice",
        alegere3: "Mării Mediterane",
        alegere4: "Africii",
        raspuns: 3
    },
    {
        question: "Primul război punic mai este cunoscut și sub următorul nume:",
        alegere1: "Războiul Siciliei",
        alegere2: "Războiul Spartei",
        alegere3: "Războiul Carthaginei",
        alegere4: "Războiul Saguntului",
        raspuns: 1
    },
    {
        question: "Campania împotriva Romei rămasă celebră datorită folosirii elefanților a fost condusă de:",
        alegere1: "Dio Cassius",
        alegere2: "Scipio",
        alegere3: "Hannibal",
        alegere4: "Hasdrubal",
        raspuns: 3
    },
    {
        question: "Teritoriul carthaginez va fi transformat în provincia romană",
        alegere1: "Africa",
        alegere2: "Dacia",
        alegere3: "Egipt",
        alegere4: "Hispania",
        raspuns: 1
    },
    {
        question: "În anul 146 î.Hr. Carthagina este cucerită și distrusă de generalul roman:",
        alegere1: "Duilius",
        alegere2: "Hannibal",
        alegere3: "Hanno",
        alegere4: "Scipio",
        raspuns: 4
    },
    {
        question: "Ce oraș a fost cucerit de Hannibal în 219 î.Hr., declanșând al Doilea Război Punic?",
        alegere1: "Roma",
        alegere2: "Siracuza",
        alegere3: "Saguntum",
        alegere4: "Cartagina Nova",
        raspuns: 3
    },
    {
        question: "Ce a provocat Războiul Mercenarilor?",
        alegere1: "Încălcarea tratatului de la Ebru",
        alegere2: "Neplata soldelor către mercenari",
        alegere3: "Atacul Romei asupra Cartaginei",
        alegere4: "Refuzul Cartaginei de a ceda Corsica",
        raspuns: 2
    },
    {
        question: "Ce s-a întâmplat cu Cartagina în anul 146 î.Hr.?",
        alegere1: "A fost distrusă complet și ștearsă de pe hartă",
        alegere2: "A fost cucerită, dar păstrată ca oraș liber",
        alegere3: "A devenit aliată a Romei",
        alegere4: "A fost anexată pașnic",
        raspuns: 1
    }
];

//Constante

const raspuns_corect = 10;
const nr_intrebari = 10;

startGame = () => {
    nrIntrebari = 0;
    scor = 0;
    listaIntrebari = [...intrebari]
    console.log(listaIntrebari)
    nouaIntrebare();
}

nouaIntrebare = () => {
    if(listaIntrebari===0 || nrIntrebari >= nr_intrebari){
        localStorage.setItem('mostRecentScore', scor);
        //Mergi la rezultate
        return window.location.assign("/end.html");
    }
    nrIntrebari++;
    progressText.innerText = `Întrebarea ${nrIntrebari}/${nr_intrebari}`;
    //Progress nou
    console.log
    progressBarFull.style.width = `${(nrIntrebari/nr_intrebari)*100-10}%`;
    
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
        
        if(clasaAplicata == 'corect'){
            addScor(raspuns_corect);
        }
        
        alegereSelectata.parentElement.classList.add(clasaAplicata);

        setTimeout( () => {
            alegereSelectata.parentElement.classList.remove(clasaAplicata);
            console.log(clasaAplicata);
            nouaIntrebare();
        }, 1000);

        
    });
})

addScor = num => {
    scor += num;
    scorText.innerText = scor;
}

startGame();
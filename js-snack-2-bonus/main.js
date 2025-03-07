
/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// array che contiene i miei oggetti(squadre di calcio)

const club = [

    {
        nome : "juventus",
        puntiFatti : 0,
        falliSubiti : 0,

    },

    
    {
        nome : "Milan",
        puntiFatti : 0,
        falliSubiti : 0,

    },
    
    {
        nome : "Inter",
        puntiFatti : 0,
        falliSubiti : 0,

    },
    
    {
        nome : "Barcellona",
        puntiFatti : 0,
        falliSubiti : 0,

    },
    
    {
        nome : "Roma",
        puntiFatti : 0,
        falliSubiti : 0,

    },
]

// funzione per numeri randomici;

/*
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.*/

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// variabile per salvare i risultati dei punti e i falli;

// ciclo per prelevare i punti e i falli

for (let i = 0; i < club.length; i++){

    club[i]["puntiFatti"] = randomNumber();
    club[i]["falliSubiti"] = randomNumber();
   
}
console.log(club);

// creo il nuovo array per metterci i nuovi elementi(nomi e falli subiti); 

let secondClub = [];
let resultInner = document.getElementById("result"); 

// console.log(secondClub);

for (let i = 0; i < club.length; i++){
    // console.log(club[key]);
    const result = {
        nome: club[i].nome,
        falliSubiti: club[i].falliSubiti
    }
    secondClub.push(result);

    /*secondClub.push({
        nome: club[key].nome,
        falliSubiti: club[key].falliSubiti
    });*/

   // secondClub.push(club[key].nome);
   // secondClub.push(club[key].falliSubiti);
   resultInner.innerHTML += `<li>Squadra: ${result.nome}</li> <li> Falli subiti: ${result.falliSubiti} </li> <br> `;
}
   
console.log(secondClub);






/*
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


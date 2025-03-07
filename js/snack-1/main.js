/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

//array che contiene le mie bici;

const bicycle = [

    //oggetto bici con nome e peso;

    {
        name : "bianchi",
        weidth : "20"
    },

    
    {
        name : "verdi",
        weidth : "23"
    },
    
    {
        name : "rossi",
        weidth : "10"
    },
    
    {
        name : "gialli",
        weidth : "3"
    },

    {
        name : "viola",
        weidth : "5"
    },


]

//console.log(bicycle);
//console.log(bicycle[0].name, bicycle[1].name, bicycle[2].name, bicycle[3].name, bicycle[4].name);

for (let key in bicycle){

    const bicycleValue = bicycle[key];
    console.log(bicycleValue);

}



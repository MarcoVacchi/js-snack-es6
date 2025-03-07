/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

//array che contiene le mie bici;

const bicycle = [

    //oggetto bici con nome e peso;

    {
        name : "bianchi",
        weidth : 20
    },

    
    {
        name : "verdi",
        weidth : 23
    },
    
    {
        name : "rossi",
        weidth : 10
    },
    
    {
        name : "gialli",
        weidth : 3
    },

    {
        name : "viola",
        weidth : 5
    },


]

//console.log(bicycle);
//console.log(bicycle[0].name, bicycle[1].name, bicycle[2].name, bicycle[3].name, bicycle[4].name);

//creo una variabile per prendere la bici più leggera e usarla come paragone;

let lighterBike = bicycle[0]["weidth"];
let lighterName = bicycle[0]["name"];
let result = document.getElementById("result");

//console.log(lighterBike)

//console.log(lighterBike)


for (let i = 0; i < bicycle.length; i++){

    const bicycleValue = bicycle[i].weidth;
    const bicycleValueName = bicycle[i].name;
   //console.log(bicycleValue);
   // console.log(lighterBike)

    if (bicycleValue < lighterBike) {
        lighterBike = bicycleValue;
        lighterName = bicycleValueName;
    }
   // console.log(lighterBike);
}
console.log(`La bici col peso più leggero è ${lighterName} con un peso di ${lighterBike}`);
result.innerHTML = `La bici col peso più leggero è ${lighterName} con un peso di ${lighterBike}`;


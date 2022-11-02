// JAVASCRIPT //
console.log("YDD");

/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Definisco variabile difficoltà
let selezioneDifficolta = document.getElementById('selezioneDifficolta');

//Definisco variabile per la difficoltà (for)
let numDifficolta;

// Definisco variabile area di gioco
let griglia = document.getElementById('areaGioco');


// Definisco variabile per il quadrato
let quadrato;

//Definisco variabile reset in caso di valore nullo sulla select della difficoltà
let selezioneDifficoltaVuota = document.getElementById('selezioneDifficoltaVuota');



function gioco()
{
    //Controllo quale opzione viene scelta
    if(selezioneDifficolta.value == 1)
    {
        numDifficolta = 100;
        griglia.innerHTML = "";
    }
    else if(selezioneDifficolta.value == 2)
    {
        numDifficolta = 81;
        griglia.innerHTML = "";
    }
    else if(selezioneDifficolta.value == 3)
    {
        numDifficolta = 49;
        griglia.innerHTML = "";
    }
    else
    {
        // alert("Selezionare una difficoltà.");
        griglia.innerHTML = "Selezionare una difficoltà.";
        numDifficolta = 0;
    }

    selezioneDifficoltaVuota.addEventListener('click', function()
    {
        refresh();
    })

    //creazione 100 div - con evento click
    for(let i=0; i<numDifficolta; i++)
    {
        quadrato = creaQuad();
        // console.log(quadrato);

        //Inserisco il numero nel quadrato
        quadrato.innerText = i+1;
        quadrato.classList.add('d-flex');
        quadrato.classList.add('justify-content-center');
        quadrato.classList.add('align-items-center');

        //Attivo i quadrati
        quadrato.addEventListener('click', function()
        {
            console.log(i+1);
            this.classList.toggle('active');
        })

        griglia.append(quadrato);
    }

    
}

//Funzione genera un div
function creaQuad()
{
    // Creo un elemento "Div"
    let div = document.createElement('div');
    // Aggiungo la classe "gridBox"
    div.classList.add('gridBox');
    if(numDifficolta == 100)
    {
        div.classList.add('gridBoxWidthEasy');
    }
    else if(numDifficolta == 81)
    {
        div.classList.add('gridBoxWidthNormal');
    }
    if(numDifficolta == 49)
    {
        div.classList.add('gridBoxWidthHard');
    }


    return div;
}















function refresh()
{
    location.reload();
}
// ----- FINE :) -----
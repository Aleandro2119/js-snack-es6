// ? SNACK 2

/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


// ! Creo array squadre (PUNTO 1)

const squad = [
    { nome: 'As Roma', punti_fatti: '0', falli_subiti: '0' },
    { nome: 'Milan', punti_fatti: '0', falli_subiti: '0' },
    { nome: 'Inter', punti_fatti: '0', falli_subiti: '0' },
    { nome: 'Juventus', punti_fatti: '0', falli_subiti: '0' },
    { nome: 'Fiorentina', punti_fatti: '0', falli_subiti: '0' },

]

console.log(squad);

// ! Funzione per numeri random

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ! Genero numeri che andranno inseriti nella voce punti_fatti e falli_subiti (PUNTO 2)

let falli_subiti;
let punti_fatti;

for (let i = 0; i < squad.length; i++) {
    let currentNum = squad[i];
    falli_subiti = getRandomNumber(1, 150);
    punti_fatti = getRandomNumber(1, 114);

    currentNum.falli_subiti = falli_subiti;
    currentNum.punti_fatti = punti_fatti;
}

console.log(squad);


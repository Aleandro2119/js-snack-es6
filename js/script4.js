// ? SNACK 4

/* Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */

// ! Creo elenco studenti (PUNTO 1)

const students = [
    { nome: 'Aleandro', id: 234, somma_voti: 70 },
    { nome: 'Matteo', id: 596, somma_voti: 100 },
    { nome: 'Marco', id: 128, somma_voti: 40 },
    { nome: 'Simone', id: 300, somma_voti: 60 },
    { nome: 'Andrea', id: 145, somma_voti: 57 },
    { nome: 'Davide', id: 876, somma_voti: 120 },
]

console.log(students);

// ! Modifico il loro nome in maiuscolo (PUNTO 2)

const uppercase = students.map(student => student.nome.charAt(0).toUpperCase() + student.nome.substring(1).toLowerCase());

console.log(uppercase);


// ! Creo una lista con gli studenti che hanno un totale di voti superiore a 70 (PUNTO 3) // Con un ciclo map

const vote = students.map((voto => {

    if (voto.somma_voti > 70) {
        return voto;
    }

}));

console.log(vote);


// ! Creo una lista con gli studenti che hanno un totale di voti superiore a 70 e un id superiore a 120 (PUNTO 4)

const voteId = students.map((votoId => {

    if (votoId.id > 120 && votoId.somma_voti > 70) {
        return votoId;
    }

}));

console.log(voteId);
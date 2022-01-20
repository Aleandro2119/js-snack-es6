
// ? SNACK 1

/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */


// ! Creo un array di oggetti (PUNTO 1)

const bike = [
    { nome: 'Bianchi', peso: '260g' },
    { nome: 'Scott', peso: '280g' },
    { nome: 'Trek', peso: '220g' },
    { nome: 'Merida', peso: '250g' },
    { nome: 'Specialized', peso: '240g' },
]


console.log(bike);


// ! Stampo in console la bici col peso minore (PUNTO 2)


const { peso } = bike[2];
console.log(`La bici con il minor peso è ${bike[2].nome} grazie al peso di`, peso);


const minWeight = bike[2];
console.log(`La bici con il minor peso è ${bike[2].nome} grazie al peso di`, minWeight.peso);
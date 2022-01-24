// ? SNACK 3

/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe. */

// ! Creo un array

const userName = ['Aleandro', 'Davide', 'Simone', 'Leonardo', 'Gianmarco', 'Andrea'];

// ! Funzione con fliter (PUNTO 1)

const newElement = (arr, a, b) => {
    const newArrayName = arr.filter((item, index) => {
        if (index >= a && index <= b) {
            return true;

        } else {
            return false;
        }
    });

    return newArrayName;
};

console.log(newElement(userName, 1, 3));

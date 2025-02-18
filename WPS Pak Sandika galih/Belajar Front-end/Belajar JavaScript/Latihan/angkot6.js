let jmlhAngkot = 10;
let angkotBeroprasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot  <= jmlhAngkot; noAngkot++) { 
    // * Jika bagian if dikerjakan maka bagian else if dan else tidak dikerjakan
    if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
        console.log('Angkot no.' + noAngkot + " Sedang beroprasi");
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot no.' + noAngkot + " Sedang lembur");
    } else {
        console.log('Angkot no.' + noAngkot + " Sedang tidak beroprasi");
    }
}

// if (noAngkot <= angkotBeroprasi ) {
//     if (noAngkot === 5) {
//         console.log('Angkot no.' + noAngkot + " Sedang lembur");
//     } else {
//         console.log('Angkot no.' + noAngkot + " Sedang beroprasi");
//     }
// }
//! diatas adalah cara agar noAngkot 5 tidak dijalankan di if pertama
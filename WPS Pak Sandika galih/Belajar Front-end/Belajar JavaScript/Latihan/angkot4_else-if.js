let jmlhAngkot = 100;
let angkotBeroprasi = 5;
let noAngkot = 1;

for (noAngkot; noAngkot  <= jmlhAngkot; noAngkot++) { 
    // * Jika bagian if dikerjakan maka bagian else if dan else tidak dikerjakan
    if (noAngkot <= angkotBeroprasi) {
        console.log('Angkot no.' + noAngkot + " Sedang beroprasi");
    } else if (noAngkot % 3 == 0) {
        console.log('Angkot no.' + noAngkot + " Sedang baru saja keluar dari bengkel");
    } else {
        console.log('Angkot no.' + noAngkot + " Sedang tidak beroprasi");
    }
}
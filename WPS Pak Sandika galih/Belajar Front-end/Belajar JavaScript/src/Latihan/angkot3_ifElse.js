// Membuat variabel untuk mempermudah pengisian nilai 
let jmlhAngkot = 100;
let angkotBeroprasi = 5;
let noAngkot = 1;

for(noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroprasi) {
        console.log("Angkot No. " + noAngkot + " beroprasi dengan baik");
    } else {
        console.log("Angkot No. " + noAngkot + " tidak beroprasi");
    }
}
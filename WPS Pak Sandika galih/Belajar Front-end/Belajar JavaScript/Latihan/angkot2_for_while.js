/*

for (let noAngkot = 1; noAngkot <= 10; noAngkot++) {
    if (noAngkot <= 6 ) {
        console.log("Angkot No. " + noAngkot + " Beroprasi dengan baik");
    } else {
        console.log("Angkot No. " + noAngkot + " Tidak beroprasi dengan baik");
    }
}

*/

let jmlhAngkot = 10;
let angkotBeroprasi = 8;
let noAngkot = 1;

while(noAngkot <= angkotBeroprasi) {
    console.log("Angkot No. " + noAngkot + " Beroprasi dengan baik");
noAngkot++;
}

for(noAngkot = angkotBeroprasi + 1; noAngkot <=jmlhAngkot; noAngkot++) {
    console.log("Angkot No. " + noAngkot + " Tidak beroprasi dengan baik");
}
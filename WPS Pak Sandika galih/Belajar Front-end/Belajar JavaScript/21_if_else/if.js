/*

if(Kondisi) {
    aksi --> jika kondisi nya true. klo false langsung keluar dari blok if nya
}

*/

var angka = 1;

for (angka; angka <= 20; angka++) {
    if (angka % 2 == 0) {
        console.log(angka + ' Bilangan ini adalah bilangan genap');
    } else{
        console.log(angka + ' bilangan ini adalah ganjil');
    }
}
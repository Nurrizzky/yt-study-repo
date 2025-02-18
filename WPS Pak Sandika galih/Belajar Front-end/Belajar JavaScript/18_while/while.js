// while (kondisi) {
//   aksi
// }
//selama kondisi bernilai = true, maka lakukan aksi di dalam nya
// while(false) {
//   console.log('hello world');
// }
// yang diatas ini disebut infinite loop / looping forever
// untuk mengatasi infinite loop bisa dilakukan 2 cara yaitu dengan user

// while(false) {
//     console.log("Hello World")
// }

// var x = true;
// while(x) {
//     console.log('hello world');
//     x = confirm("mau coba lagi ?");
// }
// * Kondisi terimnasi = mengecek keadaan nilai awal
/*  
 nilai awal
while(kondisi teriminasi) {
    aksi
    increment / decrement (terhadap nilai awal)
}
*/

var nilaiAwal = 1;
while(nilaiAwal <= 10) {
    // selama nilai awal nya lebih kecl dari 5 while akan terus berjalan sampai sama dengan 5
    console.log("hello world " + nilaiAwal + "x");
    nilaiAwal++; // *setiap while berjalan nilai awal akan ditambah 1
    // * nilaiAwal = nilaiAwal + 1
}




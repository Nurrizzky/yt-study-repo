let i = "hello Wolrd";
// diatas ini adalah global scope / window scope

/* 
Dibawah ini disebut function scope.
Artinya varibale yang dibuat di dalam blockcode function ini hanya dapat digunakan pada fungsi itu sendiri.
Tapi di dalam function kita bisa akses varibel global
*/

function functionScope() { 
   let i = 1;
   console.log(i);
   // jika seperti yang diatas yang akan tampil adalah 1. karena mengambil local variabel.
   console.log(window.i);
   // jika menggunakan window yan akan tampil adalah hello Wolrd. dalam hal 
   // jika i tidak sebagai varibel baru atau : i = 1; maka yang akan tampil pada console di luar function adalah 1
   // karena javascript mencari inisialisasi variabel i di function jika tidak ada maka mencari di window scope

   // jika di window scope tidak ada variabel i maka: i = 1; akan dibuat secara otomatis oleh javascript di window scope
}

functionScope();
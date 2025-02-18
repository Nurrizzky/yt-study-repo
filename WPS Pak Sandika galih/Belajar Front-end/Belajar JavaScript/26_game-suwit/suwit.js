let tanya = true;

while( tanya ) {

   // Menangkap pilihan player
   let value = prompt("Pilih: gajah, semut, orang");


   // menangkap pilihan komputer
   // membangkitkan bilangan random
   let comp = Math.random();
   if (comp < 0.34) {
      comp = "gajah";
   } else if (comp >= 0.34 && comp < 0.67) {
      comp = "orang";
   } else {
      comp = "semut";
   }
   // menentukan rules
   let hasil = '';
   if ( value == comp ) {
      hasil = 'seri';
   } else if( value == "gajah" ) {
      // kondisi disimpan di dalam kurung
      hasil = ( comp == 'orang' ) ? "Menang" : "Kalah";
   } else if( value == "orang" ) {
      hasil = ( comp == 'gajah' ) ? "KALAH" : "MENANG";
   } else if( value == "semut" ) {
      hasil = ( comp == "orang" ) ? "KALAH" : "MENANG";
   } else {
      hasil = "Memasukan pilihan yang salah";
   }

   // tampilkan hasilnya
   alert("Kamu memilih: " + value + "\n dan komputer: " + comp + "\n Hasilnya : " + hasil ); 

   tanya = confirm("lagi ?");
}

alert("terimakasih sudah bermain");
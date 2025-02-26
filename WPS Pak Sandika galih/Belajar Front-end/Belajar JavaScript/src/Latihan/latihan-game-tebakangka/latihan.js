// Math.florr() untuk membulatkan sebuah bilangan
var random = Math.floor(Math.random() * 11);

var kesempatan = true;
var no = 1;

while( kesempatan ) {
   let val = parseInt(prompt("Pilih angka dari 1 - 10" + "\nIni kesempatan ke " + no));

   if ( val > random ) {
      alert("angka yang anda masukan terlalu besar" + random);
   } else if ( val == random ) {
      alert("SELAMAT angka yang anda masukan Benar SAMA");
      alert("terimakasih telah bermain tebak angka" + "\n angka yang benar adalah " + random);
      break;
   } else if( val < random ) {
      alert("angka yang anda masukan terlalu kecil" + random)
   } else {
      alert("yang anda masukan di luar jangkauan");
   }

   if ( no == 3  ) {
      kesempatan = alert("kesempatan anda sudah habis");
   } else {
      kesempatan = confirm("Coba kesempatan ke " + no++);
   }

}


console.log(random);

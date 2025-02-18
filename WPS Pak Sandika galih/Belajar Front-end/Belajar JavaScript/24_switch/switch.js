// let angka = parseInt(prompt("masukan angka : "));

// if (angka === 1) {
//    alert(`angka yang anda masukan ${angka} adalah benar`);
// } else if (angka === 2) {
//    alert(`angka yang anda masukan ${angka} adalah benar`);
// } else {
//    alert(`angka yang anda masukan ${angka} adalah angka yang salah`);
// }

// switch( angka ) {
//    // case dibacanya jika ekpresi (angka) nya 1 maka jalankan case 1
//    // case nya harus nilai, tidak bisa perbandingan
//    case 1:
//       alert(`angka yang anda masukan ${angka} adalah benar`);
//       break;
//    case 2: 
//       alert(`angka yang anda masukan ${angka} adalah benar`);
//       break;
//    case 3: 
//       alert(`angka yang anda masukan ${angka} adalah benar`);
//       break;
//       // default jika angkanya bukan selain 1,2,3
//    default:
//       alert(`angka yang anda masukan ${angka} adalah SALAHHHH!!!! INI ADALAH KONDISI DEFAULT`);
//       break;
// }

let item = prompt("masukan nama makanan / minuman : \n (cth: nasi, daging, burger, susu, pizza, jus)");

switch ( item ) {
   // cari case yang sama dengan ekpresi lalu jalankan isi dari case.
   // break agar setelah code dijalankan langsung keluar dari switch
   // karena nasi sampai jus adalah makanan yang sehat, maka dengan kita tidak menggunakan break maka akan terus jalan ke case jus yang memiliki alert untuk makanan sehat
   // dengan begitu kita tidak perlu tulis alert yang sama untuk case yang berbeda.
   case "nasi":
   case "daging":
   case "susu":
   case "jus":
      alert("makanan ini sehat 👍");
      break;

   case "pizza":
      alert("makanan ini tidak sehat");
      break;
   case "burger":
      alert("makanan ini tidak sehat 👎");
      break;
   default:
      alert("anda memasukan makanan yang tidak ada di list")
      break;
}
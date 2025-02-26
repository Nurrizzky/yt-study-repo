function bagi(nilai1, nilai2) {
   return "hasilnya adalah : " + nilai1 / nilai2;
}

function kali(nilai1, nilai2) {
   return "hasilnya Adalah : " + nilai1 * nilai2;
}

function kurang(nilai1, nilai2) {
   return "hasilnya adalah : " + nilai1 - nilai2;
}

function tambah(nilai1, nilai2) {
   return "hasilnya adalah: " + nilai1 + nilai2;
}


function calculate(nilai1, nilai2, arguments) {
   switch ( arguments ) {
      case 'bagi' :
         return bagi(nilai1, nilai2);
      case 'kali' :
         return kali(nilai1, nilai2);
      case 'kurang':
         return kurang(nilai1, nilai2);
      case 'tambah':
         return tambah(nilai1, nilai2);
   }
}

console.log(calculate(5, 5, 'kali'));
console.log(calculate(5, 5, 'bagi'));
console.log(calculate(5, 5, 'kali'));
console.log(calculate(5, 5, 'tambah'));
console.log(calculate(5, 5, 'kurang'));
console.log(calculate(5, 5, 'tambah'));
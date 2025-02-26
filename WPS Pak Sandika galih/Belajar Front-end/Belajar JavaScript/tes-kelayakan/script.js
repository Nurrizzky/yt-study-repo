// variabel & tipe data
let nama = "Rizky";
let umur = 18;
let isStudent = true;
console.log("nama saya : " + nama + ' ' +  "umur saya : "  +  umur + "tahun. saya seorang pelajar ?" +' ' + isStudent);

// operator
let angka1 = 5;
let angka2 = 2;
let penjumlahan = angka1 + angka2;
let pengurangan = angka1 - angka2;
let perkalian = angka1 * angka2;
let pembagian = angka1 / angka2;
console.log(`penjumlahan : ${penjumlahan}. pengurangan : ${pengurangan}. perkalian : ${perkalian}. pembagian : ${pembagian}`);

// looping
for (let nomor = 1; nomor <= 10; nomor++) {
   console.log(nomor);
}
let number = 10;
while(number >= 1) {
   console.log(number);
   number--;
}

// kondisi(if,else,switch)
let nilai = 80;
let grade = "";
if (nilai >= 90 && nilai <= 100) {
   grade = "A";
}else if(nilai >= 80 && nilai <= 89){
   grade ="B";
}else if(nilai >= 70 && nilai <= 79) {
   grade ="C";
}else if(nilai >= 60 && nilai <= 69) {
   grade ="D";
}else if(nilai >= 0 && nilai <= 59) {
   grade ="E";
}

switch (grade) {
   case "A":
      console.log("mendapatkan grade A");
      break;
   case "B":
      console.log("mendapatkan grade B");
      break;
   case "C":
      console.log("mendapatkan grade C");
      break;
   case "D":
      console.log("mendapatkan grade D");
      break;
   case "E":
      console.log("mendapatkan grade E");
      break;
   default:
      console.log("tidak mendapat grade");
      break;
}

// Function

function hitungLuasLingkaran(jariJari) { 
   return 3.14 * jariJari**2;
}
console.log(hitungLuasLingkaran(7));



// Array
let buah = ['apel', 'pir', 'pisang', 'anggur', 'jeruk'];
buah.push('alpukat');
for (let index = 0; index < buah.length; index++) {
   console.log(buah[index]);
}


// object
function mahasiswa(nama, umur, isStudent, hobi) {
   let object = {};
   object.nama = nama;
   object.umur = umur;
   object.isStudent = isStudent;
   object.hobi = hobi;
   return object;
}

console.log(mahasiswa('udin', 16, true, "renang"));


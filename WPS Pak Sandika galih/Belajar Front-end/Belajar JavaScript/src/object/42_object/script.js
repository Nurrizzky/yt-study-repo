// Membuat Object



// Literal
let siswa = {
   // key : value
   nama: "Rizky",
   umur: 16,
   status: "pelajar",
   gender: "pria", 
}
// cara pemanggilannya:
// siswa.nama



// Function Declaration
function membuatObjectDeclaration(nama, umur, status, golonganDarah) {
   let data = {};
   // Memasukan argumen ke variabel data yang bertipe object.
   data.nama = nama;
   data.umur = umur;
   data.status = status;
   data.golonganDarah = golonganDarah;

   return data;
}
// cara pemanggilannya :
// membuatObjectDeclaration("rizky", 16, "pelajar", "AB");
let dataLuar = membuatObjectDeclaration("rizky", 16, "pelajar", "AB");



// Constructor 
function SiswaDeclaration(nama, umur, rombel) {
   this.nama = nama;
   this.umur = umur;
   this.rombel = rombel;
}

let Declaration = new SiswaDeclaration("rizky", 16, "PPLG");
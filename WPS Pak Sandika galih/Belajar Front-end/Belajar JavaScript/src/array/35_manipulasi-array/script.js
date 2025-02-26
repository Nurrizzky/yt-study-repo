//* manipulasi array
//! CARA INI MASIH MANUALLL

//* Menambah array 
let arr1 = [];
arr1[0] = 'Hello World!';
arr1[1] = 1;
arr1[2] = true; 
console.log(arr1, '\n');
// jika dengan cara ini kita harus tahu index index nya, karena jika salah, index yang kosong akan 'undefined'

//* Menghapus Array
let arr2 = ["nur", "rizky"];
arr2[1] = undefined;
console.log(arr2, '\n');


//* Menampilkan isi Array
let arr3 = ['Muhammad', 'Nur', 'Rizky', 'jago ALL FRAMEWORK', ['aku','suka','apel']];
for (let i = 0; i < arr3.length; i++) {
   console.log('value i - ' + i + ' ' + arr3[i]);
   // i = akan memiliki value int sesuai dengan loop nya
}

// * Array Method = length, join --> menggabungkan semua isi array dan menjadikannya string, 

// join
let join = ['Muhammad', 'Nur', 'Rizky', 'jago ALL FRAMEWORK'];
// console.log(join.join(' '));
// menggabungkan semua index dan parameter dalam join adalah separator / pemisah per index.

// pop -> menghapus element terakhir di array & push -> menambahkan array ke array HUH? oh menambah element ke array => untuk bagian akhir array
join.push('doddy', 'AUUU');
join.pop()

// unshift & shift --> kedua method ini sama seperti pop dan push tatapi ini untuk bagian awal array
join.unshift('doddy'); // menambahkan element ke index 0
join.shift(); // menghapus element index ke 0
console.log(join);


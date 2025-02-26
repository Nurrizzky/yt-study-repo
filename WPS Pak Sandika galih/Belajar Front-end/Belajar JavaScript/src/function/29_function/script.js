function tambah(a, b) { 
   return a + b;
}

function kali(a, b) {
   return a * b;
}

let a = 3;
let b = 5;
// argumen a dan b berbeda dengan parameter a dan b
var result = tambah(a, b);
console.log(result);
// (3, 5) akan dikiri ke parameter fungsi tambah sesuai dengan urutannya 3 -> a 5 -> b

let result =  tambah(a*2, b*2);
// kita juga bisa melakukan operasi matematika di argumen

let kali = kali(tambah(1, 2), tambah(5, 3));
// bisa juga memasukan function di dalam sebuah argumen
// ini dibacanya : kerjakan dahulu function tambah lalu kerjakan function kali
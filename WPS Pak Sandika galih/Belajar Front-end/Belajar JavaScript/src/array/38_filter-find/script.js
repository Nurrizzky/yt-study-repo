// Filter & Find

let filter = [1,4,2,5,7,8,3,6,31,];
let filter2 = filter.filter(function(element){
   return element > 5;
   // disini kita bisa mengkondisikan mau seperti apa
   // cari element sesuai dengan kondisi diatas.
   // mengembalikan array lagi.
});

console.log(filter2);

// find untuk menemukan satu nilai saja.
let find = [1,4,2,5,8,4,9,6,4];
let find2 = find.find(function(element){
   return element > 5;
});

console.log(find2);
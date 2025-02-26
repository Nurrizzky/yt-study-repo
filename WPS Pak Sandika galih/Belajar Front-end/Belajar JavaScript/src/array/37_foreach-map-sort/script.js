let array = [1,2,3,4,5,6,7,8,9,10];
let nama = ['fikri', 'rizky', 'udin'];

// kita akan menjalankan sebuah function untuk tiap tiap e(elementnya).
// forEach = untuk setiap.
// dibacanya untuk setiap element yang ada pada array lakukan fungsi ini
array.forEach(function(e){
   console.log(e);
});

// untuk mendapatkan indexnya juga
nama.forEach(function(element, index){
   console.log(element + ' ' + index);
})


// map
// jika menggunakan map yang akan dikembalikan masih array
// forEach tidak mengembalikan array


let map = [1,2,4,3,2,2,4,4,2,];
let mapNew = map.map(function(element) {
   return element;
});

console.log(mapNew.join(' - '));


// sort
let sort = [1,4,2,3,5,2,6,7,8,];
sort.sort();
console.log(sort.join(' - '));

let sortNew = [1,2,3,10,8,7,9,20, 30];
sortNew.sort(function (a, b) { 
   return a-b;
});
console.log(sortNew.join(' - '));

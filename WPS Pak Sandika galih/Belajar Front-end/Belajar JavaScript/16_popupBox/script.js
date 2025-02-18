// ada 3 buah popup box 
// 1. alert 2. confirm 3. prompt

// alert('Hello World!');
// alert("ke 2");
// alert(`nama saya muhammad nur rizky`);

// prompt('masukan nama anda: ');
// apapun yang diisi pada prompt akan disimpan ke variabel nama
// var nama = prompt('masukan nama anda: ');
// alert akan menampilkan nama yang diisi pada prompt
// alert('halo ' + nama);
// var konfir = confirm('kamu yakin ?');
// Confirm mengembalikan nilai boolean, true dan false

// if (konfir === true) {
//     alert("nilai true");
// } else {
//     alert("nilai false");
// }

alert('selamat datang....');
var lagi = true;

while( lagi ) {
    var nama = prompt("masukan nama anda:");
    alert("halo " + nama);
    // kalo confirm nya di cancel akan menghasilkan false 
    // maka nilai variabel lagi menjadi false
    lagi = confirm('coba lagi?');
}

alert('terima kasih');


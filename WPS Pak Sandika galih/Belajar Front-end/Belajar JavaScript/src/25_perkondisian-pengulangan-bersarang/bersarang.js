let s = '';
let t = '*'
for( let i = 0; i < 9; i++ ) {
   // i = 0 -> b < = 0 true maka b akan menghasilkan 1 
   for( let b = 0; b <= i; b++) {
      s+= t;
   }
   // setelah cetak bintang cetak \n
   s+= '\n';
}
for (let o = 9; o >= 0; o--) {
   for (let y = 0; y <= o; y++) {
      s+=t;
   }
   s+= '\n';
}

console.log(s);
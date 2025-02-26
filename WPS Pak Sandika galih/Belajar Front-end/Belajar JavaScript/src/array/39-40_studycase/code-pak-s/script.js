let penumpang = ['sandika', undefined, 'rizky'];

let tambahPenumpang = function(namaPenumpang, penumpang){
   // jika angkot kosong
   if ( penumpang.length === 0 ) {
      // tambahkan penumpang
      penumpang.push(namaPenumpang);
      return penumpang;
   }else{
      // telusuri seluruh kursi dari awal
      for ( let i = 0; i < penumpang.length; i++ ) {
         // jika ada kursi kosong
         if ( penumpang[i] === undefined ) {
            // tambah penumpang di kursi undefined
            penumpang[i] = namaPenumpang;
            return namaPenumpang;
         }
         else if( penumpang[i] === namaPenumpang ) {
            // jika ada nama yang sama
            return namaPenumpang + " sudah naik angkot";
         }
         else if( i == penumpang.length -1 ) {
            // jika angkot sudah penuh
            penumpang.push(namaPenumpang);
            return penumpang;
         }
      }
   }
}
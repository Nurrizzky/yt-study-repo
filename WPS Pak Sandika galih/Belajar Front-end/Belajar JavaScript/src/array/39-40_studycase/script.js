let penumpang = [];

function tambahPenumpang(namaPenumpang, arrayPenumpang) {
   if (arrayPenumpang.length == 0) {
      arrayPenumpang.push(namaPenumpang);
      return arrayPenumpang;
   } else {
      for(let index = 0; index < arrayPenumpang.length; index++) {
         if( arrayPenumpang[index] === namaPenumpang ) {
            return `${namaPenumpang} sudah naik ke dalam angkot!`;
         }else if( arrayPenumpang[index] === undefined ) {
            arrayPenumpang[index] = namaPenumpang;
            return arrayPenumpang;
         }else if( index == arrayPenumpang.length - 1 ) {
            arrayPenumpang.push(namaPenumpang);
            return arrayPenumpang;
         }
      }
   }
}

function kurangiPenumpang(namaPenumpang, arrayPenumpang) { 
   if ( arrayPenumpang.length == 0 ) {
      console.log("Belum ada penumpang yang masuk ke angkot");
   }else {
      for (let index = 0; index < arrayPenumpang.length; index++) {
         if ( arrayPenumpang[index] === namaPenumpang ) {
            arrayPenumpang[index] = undefined;
            return arrayPenumpang;
         }
         return `${namaPenumpang} tidak menaiki angkot ini`;
      }
   }
}
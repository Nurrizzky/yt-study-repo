function Angkot(sopir, trayek, penumpang, kas) { 
   this.sopir = sopir;
   this.trayek = trayek;
   this.penumpang = penumpang;
   this.kas = kas;

   this.penumpangNaik = function(namaPenumpang) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
   }

   this.penumpangTurun = function(namaPenumpang, bayar){
      if ( this.penumpang.length === 0 ) {
         return "belum ada penumpang yang naik";
      } else {
         for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === namaPenumpang) {
               this.penumpang[i] = undefined;
               this.kas += bayar;
               return this.penumpang;
            }else {
               return namaPenumpang + " tidak naik angkot";
            }
         }
      }
   }

}

let angkotCisarua = new Angkot("udin", ['cisarua', 'sukasari'], [], 0);
let angkotCicurug = new Angkot("eman", ['cicurug', 'sukasari'], [], 0);

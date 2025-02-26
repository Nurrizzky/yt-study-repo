// var i = 10;
// console.log(this.i);
// i adalah properti atau method dari object window


/* function declaration
function halo() {
   console.log(this);
   console.log("halo");
}

this.halo();
this mengembalikan object global
*/

// object literal
let object = {nama: "rizky"};
object.halo = function() {
   console.log(this);
   // this berada di scope variabel object bertipe object
   // console.log("halo");
}
object.halo();
// this mengembalikan object yang bersangkutan


// construktor
function Cons() {
   console.log(this);
   console.log("Construktor");
}

let obj = new Cons();
let obj2 = new Cons();
// maka 'this' adalah obj
// this mengembalikan object yang baru dibuat.

let bintang = '*';
let string = '';
let no = 1;
let result = "";

for(no; no <= 10; no++) {
   for(let j = 10; j > no; j--){
      string+= ' ';
   }
   for(let i = 1; i <= no; i++) {
      string+= bintang + " ";
   }

   string+= "\n";
}


console.log(string);
let no = 1;

function kubus(kubusA, kubusB) {
   let volumeKubusA = kubusA ** 3;
   let volumeKubusB = kubusB ** 3;
   let jmlhVolume = volumeKubusA + volumeKubusB;
   return `${no++}. Jumlah volume dari kedua kubus tersebut adalah : ${jmlhVolume}`;
}

// kubus(8, 3);
// kubus(8, 3);
// kubus(8, 3);
// Yang diatas ini sebenarnya sudah ada di memory tapi belum ditampilkan
console.log(kubus(8, 3));
console.log(kubus(10, 12));
console.log(kubus(90, 67));

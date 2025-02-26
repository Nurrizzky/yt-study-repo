function faktoral(n) {
   // if disini disebut sebagai basecase
   if (n == 0) return 1;   
   return n * faktoral(n-1);
}

faktoral(10);
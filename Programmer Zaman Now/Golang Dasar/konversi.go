package main

import "fmt"

func main() {
	var nilai32 int32 = 32768
	var nilai64 int64 = int64(nilai32)
	var nilai16 int16 = int16(nilai32)

	fmt.Println(nilai32)
	fmt.Println(nilai64)
	fmt.Println(nilai16)
}

// KONVERSI TIPE Data
// > digolang kadang kita butuh melakukan konversi tipe data dari satu tipe ke tipe lainnya
// > misalnya kita ingin mengonversi tipe data int32 ke int63, dan lain lain
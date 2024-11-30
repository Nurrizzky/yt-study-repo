package main

import "fmt"

func main() {
	fmt.Println("Eko")
	fmt.Println("Eko Kurniawan")
	fmt.Println("Eko Kurniawan Khannedy")

	fmt.Println(len("Eko"))
	fmt.Println("Eko Kurniawan"[0]) // == hasilnya 69 == dihitung dari byte
	fmt.Println("Eko Kurniawan Khannedy"[1]) // hasilnya 107 == dihitung dari byte

	// Function Untuk String :
	// > len("string") == menghitung jumlah karakter di string
	// > "string"[number] == mengambil karekter pada posisi yang telah ditentukan 
	// > spasi tetap di hitung

}

// TIPE DATA
// String
// Tipe data kumpulan karakter
// > jumlah karakter di dalam string 0 sampai tak terhingga
// di golang string direpresentasikan dengan kata kunci string
// di golang string selalu diawali karakter " dan diakhiri "
package main

import "fmt"

func main() {
	// const firstName string = "Nur Rizky"
	// const lastName = "S.kom"

	const (
		firstName string = "Nur Rizky"
		lastName = "S.kom"
	)

	fmt.Println(firstName)
	fmt.Println(lastName)

	// ERROR
	// firstName = "tes const"
	// lastName = "end const"
}

// CONSTAN
// > adalah varibale yang tidak bisa di ubah lagi setelah pertama diberi nilai
// > cara pembuatannya mirip variabel yang membedakan kata kunci bukan var tapi const
// > saat membuat constan kita wajib langsung menginstalasi datanya
// > tidak masalah walau tidak digunakan salah satu perbedaan dengan variabel
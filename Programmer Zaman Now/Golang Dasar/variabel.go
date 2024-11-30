package main

import "fmt"

func main() {
	// var name string
	// var name string= "Nur Rizky" string== tidak wajib lagi karna golang sudah tau tipe datanya
	// var name = "Nur Rizky"
	// fmt.Println(name)
	// name = "Muhammad Nur Rizky"
	// fmt.Println(name)

	// Kata kunci var
	name := "Nur rizky"
	fmt.Println(name)
	name = "Rizky"
	fmt.Println(name)

	// > kata kunci var di golang tidak wajib
	// > asalkan kita langsung menginisialisasi nilai nya
	// > agar tidak perlu menggunakan var >
	// >> kita perlu kata kunci := saat menginisialisasi data pada variabel

	// Dekalarasi Multiple Variabel
	// > di golang kita bisa membuat variabel sekaligus banyak
	// > dan lebih mudah di baca

	var (
		firstName = "tes multiple"
		middleName = "halo tes"
		lastName = "end tes"
	)

	fmt.Println(firstName)
	fmt.Println(middleName)
	fmt.Println(lastName)
	
}

// VARIABEL 
// > tempat untuk menyimpan data
// > digunakan agar kita bisa dapat mengakses data yang sama dimanapun kita mau
// > di golang variabel hanya dapat menyimpan tipe data yang sama jika berbeda harus membuat lagi variabel
// > membuat variabel menggunakan kata kunci var diikuti nama variabel
// >> dan tipe datanya

// Tipe data Variabel
// > saat membuat variabel maka kita wajib menyebutkan tipe data variabel tersebut
// > namun jika langsung menginisialisasi data pada variabel >
// >> maka kita tidak wajib menyebutkan tipe data variabelnya
// >> karna golang bisa tau tipe datanya
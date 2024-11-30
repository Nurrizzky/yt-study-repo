package main

// Mengambil FMT = Format
import "fmt"

func main() {
	fmt.Println("Hello Word!")
}

// Penulisan sangat sensitive A a adalah hal yang berbeda

// Kita bisa menjalankan code golang dengan kompilasi terlebih dahulu : go build
// > dan untuk menjalankannya dengan cara mengetik kembali nama filnya di CMD

// kita juga bisa menjalankannya tanpa kompilasi : go run (nama-filenya).go
// > cocoknya hanya pada saat development 
// > jika di deploy maka wajib di compile

// membuat Go tidak boleh membuat func yang sama dalam modul yang sama
// > Untuk belajar tidak apa apa tetapi tidak bisa di buid melainkan : go run (nama-filenya).go
// Pseudocode
// Program start
// Inisisasi stock dalam bentuk array
// fungsi tambahStock()
// 	input nama buah
// 	input qty buah
// 	input harga per buah
// 	buat array dari semua input
// 	push ke dalam stock inisiasi
// fungsi cekStok()
// 	inisiasi sting kosong untuk menampilkan array
// 	for loop 2dimensi array (logika sama dengan for loop persegi, batasan diganti 	dengan length array tiap dimensinya)
// 	output string kosong yg telah diisi
// fungsi beli()
// 	input index dari user, simpan dengan variabel
// 	Start infinite loop
// 		input user untuk quantity
// 		Jika qty tidak cukup, 
// 			Confirm BREAK
// 		Jika cukup, maka jalankan program
// 			input user cash yg dipunya
// 			lakukan perhitungan (cash - array[harga]*array[qty])
// 			keluarkan output kembalian
// 			BREAK
// 	End infinite loop
// Start infinite loop
// 	prompt pilihan menu (1,2,3)
// 	Jika menu == 1
// 		jalankan fungsi tambahStock
// 	jika menu == 2
// 		jalankan fungsi beli
// 	jika menu == 3
// 		jalankan fungsi cekStok
// 	else
// 		output input salah, kembali ke menu
// 	Confirm BREAK
// End infinite loop
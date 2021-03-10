let n = 4
let hasil = ''
let bil = 1

for(let baris = 0; baris < 4; baris++){
    for(let kolom = 0; kolom <=baris; kolom++){
        hasil += `${bil}`
        bil += 2
    }
    hasil += "\n"
}
console.log(hasil)
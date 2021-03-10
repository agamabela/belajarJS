let product = [
    ["anggur", 15, 10000],
    ["pisang", 9, 5000]
]
// = artinya assign value, atau ganti value
// product = product.push(["lemon", 10, 3000])
// add new item to array product
product.push(["lemon", 10, 3000])
// console.log(product)
// CRUD OPERATION
// CREATE, READ, UPDATE, & DELETE
// create => membuat -> cara membuat array?
// # 1 => literal / langsung
let users = ["oni", "jennie", "rose"]
// # 2 => pakai key "new"
let hobbies = new Array() // menghasilkan array kosong []
let kamar = new Array(3) // menghasilkan array dengan panjang 3, tapi valuenya kosong
console.log("hobbies  : ", hobbies)
console.log("kamar : ", kamar)
// READ => membaca -> baca isi array
// isi array bisa diakses berdasarkan index
// index dimulai dari 0
console.log(users[1])
console.log(users[2])
// UPDATE
// update data array =>
// 1. menambah isi / item array
// 2. meng-edit/update isi yang sudah ada
// #1 menambah isi array => 
// # a. Array.push("item")
users.push("olaf")
console.log('users : ', users)
// .push() => item baru di letakkan di belakang / paling belakan
// # b. .unshift() => data / item baru akan dimasukan paling depan
users.unshift("elsa")
console.log("users : ", users)
// # c. menambah data/item di tengah2 ?
users.splice(2, 0, "lisa")
console.log("users : ", users)
// #2 meng-edit isi array
users[1] = "tanjiro"
console.log("users : ", users)
// DELETE 
// delete isi array ?
let buah = ["lemon", "anggur", "bananna", "leci"]
// #1. delete 1 item di array
// buah.pop() // pop di pakai untuk menghapus item paling belakang
// buah.shift() // menghapus item yang didepan
// menghapus item yang ada di index tertentu
// buah.splice(2, 2) // saya ingin menghapus isi array buah dari index ke-2 sebanyak 2 buah
// console.log("buah : ", buah)
// menghapus semua item => membuat array buah menjadi kosong kembali ?
// buah.splice(0, buah.length)
// buah = []
buah.length = 0
console.log("buah : ", buah)
// method => iterate value inside an array
// .map(), .filter(), .forEach()
let numb = [1,2,3,4,5]
let siswa = [
    ["Bela", "Kelas Tua", "TIF"],
    ["Belalaa", "Kelas Teri", "Bandung - Majalengka"],
    ["Deyanana", "Kelas Coro", "Cicaheum"],
    ["Bungga", "Tanpa Kelas", "Huhah"]
    
]
    let listData = ""
    siswa.forEach((value, index) => {
        listData += value[0] + "\n"

    })
console.log(listData)

let dataJumlah = numb.forEach((value, index) => {
    return value += 2
})
console.log(dataJumlah)

//Map

let dataKali = numb.map((item, i)=>{
    if(item%2 == 0){
        return "genap"
    } else{
        return "ganjil"
    }
})
console.log(dataKali)
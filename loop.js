//loop statement: script js yang digunakan untuk membuat perulangan
/*
while

syntax:
while (condition){
    //program
}


*/

let count = 0
while (count<=10) {
    console.log(count)
    count++
}

/* do while

syntax:
do{
    //programnya
}while(condition)
*/

let value = 0
do{
    console.log(`value`, value)
    value++
} while(value <= 10)

/*for loop
syntax:
for(statement1; statement2, statement3){
    //block program yang akan dijalankan
}
statement1 = nilai awal yang digunakan untuk menjalankan looping
statement2 = berisi kondisi yang dibuat untuk mengecek program dijalankan atau tidak
statement3 = berisi increment atau decrement untuk memanipulasi nilai dari statement1

*/

for(let i = 0; i<=10; i++){
    console.log('for',i)
}


//contoh break
for(let i = 0; i<=10; i++){
    if(i > 4 && i%2 == 0){
    break
    }
    console.log('for',i)
}

//contoh continue

for(let i = 0; i<=10; i++){
    if(i > 4 && i%2==0){
        continue
    }
    console.log('for',i)

}

//cara membuat segitiga rata kiri

let str = ''
for(let i = 0; i<5; i++){
    str = str+'a'
    console.log(str)
}
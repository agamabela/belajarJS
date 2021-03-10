    var produk = ['Apel', 'Jeruk']
    produk[2] = 'Mangga'
    console.table(produk)
    console.log(produk[0])


    //Push: digunakan untuk menambah item di akhir array

    produk.push('Buah Naga')
    console.table(produk)
    produk.pop()//digunakan untuk menghapus item terakhir
    console.table(produk)


    //Join digunakan untuk menggabungkan data array, datanya menjadi string
    console.log(produk.join())



    produk.push('Rambutan', 'Belimbing', 'Srikaya')
    console.table(produk)

    var arr = ['Manusia', ['makan', ['minum']]]//array 3 dimensi
    console.table(arr[1][0])//memanggil array makan
    console.table(arr[1][1][1])//memanggil minum
    var arry = ['Manusia', ['makan',['nasi',['tempe', ['ayam'],['tahu']]],['minum'],['teh',['kopi']]]]
    arry.shift('Durian')
    console.table(arry)

    console.table(produk.splice(1,1))
    console.table(produk)

    let x = [1,2,12,15,0,8,5]
    x.sort(function(a,b){return b-a}) //descending angka
    console.table(x)

    x.sort(function(a,b){return a-b})//ascending

    console.table(x)
    //menggabungkan 2 array

    console.table(produk.concat(x))//cara pertama
    console.table([...produk, ...x])
    
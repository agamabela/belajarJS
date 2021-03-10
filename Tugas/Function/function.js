                    let barang = [
                        ["sepatu", 20, 120000],
                        ["Sendal", 12, 23000],
                        ["Baju", 15, 30000],
                        ["Meja", 14, 125000]
                        
                    ]
                // fungsi versi 1
                    function printProduk(){
                        let list = ""
                        for(let i = 0; i<barang.length; i++){
                        list += `${i+1}. ` + barang[i].join(' ') + '\n'  
                    }
                    return list

                    }
                    console.log(printProduk())

                    // let siswa = [
                    //     ["Bela", "Kelas Tua", "TIF"],
                    //     ["Belalaa", "Kelas Teri", "Bandung - Majalengka"],
                    //     ["Deyanana", "Kelas Coro", "Cicaheum"],
                    //     ["Bungga", "Tanpa Kelas", "Huhah"]
                        
                    // ]

                    // let barang = [
                    //     ["sepatu", 20, 120000],
                    //     ["Sendal", 12, 23000],
                    //     ["Baju", 15, 30000],
                    //     ["Meja", 14, 125000]
                        
                    // ]
                //fungsi versi 2

                function print(param){
                    let list2 = ""
                    for(let i = 0; i<param.length; i++){
                        list2 += `${i+1}. ${param[i].join(' ')} \n`
                    }
                    return list2
                }
            console.log(print(siswa))


            //forEach
           

           // l
          
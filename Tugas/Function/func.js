let numb = [2,3,4,5,6,7,8]

let ganjil = numb.filter((value, index)=>{return value %2 ==1 })
console.log(ganjil)

//duplikasi map

function duplicateMap(arr, cb) {
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        newArr.push(cb(arr[i]))
    }
    return newArr
}
console.log(duplicateMap(numb,(value) =>value *= 10))
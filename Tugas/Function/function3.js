let numb = [
    [1,2,3],
    [2,3,6],
    [3,6,3],
]
let dataKali = numb.map((item, i)=>{
    return item.map(val => val *= 2)
})
console.log (dataKali)
let num = [2,3,10,7,18]

function kali(param){
    let arr = []
    for(let i = 0; i<param.length; i++){
    arr.push(param[i]*=2)
}
return arr

}
console.log(kali(num))
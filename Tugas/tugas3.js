
let sgt = ""
for(let i = 1; i<= 5; i++){
    for(j=4; j>= i; j--){
        sgt += " "
    }
    for(k = 1; k<=i; k++){
        sgt += "*"
    }
    for(l=1; l<=i-1; l++){
        sgt +="*"

    }
    sgt += "\n"

    
}

console.log(sgt)
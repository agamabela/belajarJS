function reverse(kata){
    let huruf = kata.split(' ');
    let hasil = [];
    for(let i = 0; i < huruf.length; i ++){
      hasil.push(huruf[i].split('').reverse().join(''));
    }  
    return hasil.join(' ');
 }
 
 console.log(reverse('bela agama'));

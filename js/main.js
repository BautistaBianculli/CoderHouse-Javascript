
let notas = [8,8,9,3,10];
console.log(PromediarNotas(notas))
 
function PromediarNotas(array) {
    let suma = 0;
    if (array.length === 0){
        return 0;
    }
    for(let i = 0; i < array.length; i++) {
    suma += array[i];
    
    }
    return suma / array.length;
}

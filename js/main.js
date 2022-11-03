
let notas = []

const AgregarNota = () =>{
    notas.push(parseInt( document.querySelector("#nota").value))
}

 
function PromediarNotas() {
    let prom = document.querySelector(".promedio")
    let suma = 0;
    if (notas.length === 0){
        return 0;
    }
    notas.forEach(notas => {
        suma += notas
    });
    // for(let i = 0; i < notas.length; i++) {
    // suma += notas[i];
    
    // }
    prom.value = `Promedio : ${ suma / notas.length}`
   
}

function BorrarArray(){
    while(notas.length > 0){
        notas.shift();
        console.log(notas.length)
    }
    let prom = document.querySelector(".promedio")
    prom.value = "No Calculado"
}

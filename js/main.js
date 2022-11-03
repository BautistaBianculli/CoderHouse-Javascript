
let notas = []

const AgregarNota = () =>{
    if (document.querySelector("#nota").value >= 0){
    notas.push(parseInt( document.querySelector("#nota").value))
    const verArray = document.querySelector("#Notas")
    verArray.value = `Numeros: ${notas.toString()}`
}
else alert("Ingrese una nota valida")
}

 
function PromediarNotas() {
    let prom = document.querySelector("#promedio")
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
    let prom = document.querySelector("#promedio")
    prom.value = "No Calculado"
    prom = document.querySelector("#Notas")
    prom.value = "No tiene numeros agregados"
}

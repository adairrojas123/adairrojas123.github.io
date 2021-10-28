function btnCalcu(operacion){
    document.getElementById("sum").hidden = true;
    document.getElementById("resta").hidden = true;
    document.getElementById("multi").hidden = true;
    document.getElementById("div").hidden = true;
    document.getElementById("prom").hidden = true;
    document.getElementById("devia").hidden = true;

    document.getElementById(operacion).hidden = false;
    
}

function suma_obtener(){
    let numUno = Number(document.getElementById("sum_numUno").value);
    let numDos = Number(document.getElementById("sum_numDos").value);
    document.getElementById("sum_result").innerText = `El Resultado es: = ${numUno+numDos}`;
}

function resta_obtener(){
    let numDos = Number(document.getElementById("resta_numDos").value);
    let numUno = Number(document.getElementById("resta_numUno").value);
    document.getElementById("resta_result").innerText = `El Resultado es: = ${numUno-numDos}`;
}

function multiplicacion_obtener(){
    let numDos = Number(document.getElementById("multi_numDos").value);
    let numUno = Number(document.getElementById("multi_numUno").value);
    document.getElementById("multi_result").innerText = `El Resultado es: = ${numUno*numDos}`;
}

function division_obtener(){
    let numDos = Number(document.getElementById("div_numDos").value);
    let numUno = Number(document.getElementById("div_numUno").value);
    document.getElementById("div_result").innerText = `El Resultado es: = ${numUno*numDos}`;

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creamos una funcion para genera la cantidad que requeriera para el calculo del promedio

function promedio_obtener(){
    let cantidad = Number(document.getElementById("prom_numUno").value);
    for(let i = 0; i < cantidad; i++){
        let caja = document.createElement("input");
        let espacioUno = document.createElement("br");
        let espacioDos = document.createElement("br");

        caja.type = "number";
        caja.id = `prom-${i}`;
        document.getElementById("prom").appendChild(caja);
        document.getElementById("prom").appendChild(espacioUno);
        document.getElementById("prom").appendChild(espacioDos);
    }

    let boton = document.createElement("button");
    boton.setAttribute("oneclick","promedioFunc();");
    boton.innerText = "Calcular operacion";
    document.getElementById("prom").appendChild(boton);
}

function promedioFunc(){
    let numUno = Number(document.getElementById("prom_numUno").value);
    let contador = 0;
    for(let i = 0; i < numUno; i++ ){
        contador += Number(document.getElementById(`prom-${i}`).value);
    }
    document.getElementById("prom_result").innerText = `El Resultado es: = ${contador/numUno}`;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hacemos lo mismo, pero ahora con la desviacion

function desviacion_obtener(){
    let cantidadDev = Number(document.getElementById("devia_numUno").value);
    for(let i = 0; i < cantidadDev; i++){
        let caja = document.createElement("input");
        let espacioUno = document.createElement("br");
        let espacioDos = document.createElement("br");

        caja.type = "number";
        caja.id = `devia-${i}`;
        document.getElementById("devia").appendChild(caja);
        document.getElementById("devia").appendChild(espacioUno);
        document.getElementById("devia").appendChild(espacioDos);
    }

    let boton = document.createElement("button");
    boton.setAttribute("oneclick","desviacionFuc();");
    boton.innerText = "Calcular operacion";
    document.getElementById("devia").appendChild(boton);
}
///////////////////////////////////////////////////////////////////////////////////////////////////
function desviacionFuc(){
    let numUno = Number(document.getElementById("devia_numUno").value);
    let matriz = []
    let contador = 0;
    
    for(let i = 0; i < numUno; i++){
        contador += Number(document.getElementById(`devia-${i}`).value);
        matriz.push(Number(document.getElementById(`devia-${i}`).value));
    }

    let media = contador/numUno;

    let suma = 0;

    matriz.forEach(function(elemento){
        suma += Math.pow(elemento-media, 2);
    });

    let vari = suma/numUno;

    document.getElementById("devia_result").innerText = `El Resultado es: = ${Math.sqrt(vari)}`;

}
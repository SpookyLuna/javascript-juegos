//PromptSync
const prompt = require ('prompt-sync')();
//Deficiones
const jugador1 = "Jugador 1";
const jugador2 = "Jugador 2";
const posiciones_validas = ["A", "B", "C"];
//Equivalencias posiciones a matriz
const posiciones_columnas = {
    A: 0,
    B: 1,
    C: 2
}

let encurso = false;

//Matriz
const matriz = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

//Tablero visible
const tablero = `
    A   B   C

1   ${matriz[0][0]}  | ${matriz[0][1]}  |  ${matriz[0][2]}
   ────|────|────
2   ${matriz[1][0]}  | ${matriz[1][1]}  |  ${matriz[1][2]}
   ────|────|────
3   ${matriz[2][0]}  | ${matriz[2][1]}  |  ${matriz[2][2]}
`

async function inicio(){
    console.log("¡Bienvenido al tres en raya!"); //Actualizar a ASCII
    await prompt("Pulsa enter para iniciar...");
        encurso = true;
    
    //Escoge aleatoriamente si comienza el jugador 1 o 2
    let jugador_incial;
    if (Math.random() < 0.5){
        jugador_incial = jugador1;
    }
    else
        jugador_incial = jugador2;

    console.log(`¡El ${jugador_incial} comienza!`);    
    
    while(encurso){
        console.log(tablero);
        //Turno2
        let turno1 = prompt ("Introduce una celda [Ej: A1]: ");
        if(turno1.length == 2 && turno1[0].includes(posiciones_validas) && Number(turno1[1]) <= 3){
            //Guardo fila y columna
            let columna = posiciones_columnas[turno1[0]];
            let fila = Number(turno1[1])-1; //Resta uno ya que la matriz comienza en 0
            if(matriz[columna][fila] === " "){
                if(jugador_incial == jugador1){
                    matriz[columna][fila] = "X";
                    console.clear()
                    console.log(tablero);
                }
                else
                    matriz[columna][fila] = "O";
                    console.clear()
                    console.log(tablero);
            }
            else{
                console.log("Movimiento inválido!");
            }
        }
        else{
            console.log("Movimiento inválido!");
        }
        //Turno2
        let turno2 = prompt ("Introduce una celda [Ej: A1]: ");
        if(turno2.length == 2 && turno2[0].includes(posiciones_validas) && Number(turno2[1]) <= 3){
            //Guardo fila y columna
            let columna = posiciones_columnas[turno2[0]];
            let fila = Number(turno2[1]);
            if(matriz[columna][fila] === " "){
                if(jugador_incial == jugador1){
                    matriz[columna][fila] = "X";
                    console.clear()
                    console.log(tablero);
                }
                else
                    matriz[columna][fila] = "O";
                    console.clear()
                    console.log(tablero);
            }
            else{
                console.log("Movimiento inválido!");
            }
        }
        else{
            console.log("Movimiento inválido!");
        }
    }
}

inicio()
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
    let matriz = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];

    function mostrartablero(){
        console.log(`
        A    B   C

    1    ${matriz[0][0]} | ${matriz[0][1]} | ${matriz[0][2]}
       ────|───|────
    2    ${matriz[1][0]} | ${matriz[1][1]} | ${matriz[1][2]}
       ────|───|────
    3    ${matriz[2][0]} | ${matriz[2][1]} | ${matriz[2][2]}
    `);
    }

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
        mostrartablero();    
        
        while(encurso){
            //Turno1
            let turno1 = prompt ("Introduce una celda [Ej: A1]: ");
            if(turno1.length == 2 && posiciones_validas.includes(turno1[0].toUpperCase()) && Number(turno1[1]) <= 3){
                //Guardo fila y columna
                let columna = posiciones_columnas[turno1[0].toUpperCase()];
                let fila = Number(turno1[1])-1; //Resta uno ya que la matriz comienza en 0
                console.log(matriz[fila][columna])
                if(matriz[fila][columna] === " "){
                    if(jugador_incial == jugador1){
                        console.log(columna, fila)
                        matriz[fila][columna] = "X";
                    }
                    else{
                        matriz[fila][columna] = "O";
                        console.log(columna, fila)
                    }
                console.clear();
                mostrartablero();
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
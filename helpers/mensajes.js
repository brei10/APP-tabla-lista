


    require('colors')


        const mostrarMenu = ( ) => {
            console.clear()
            console.log("=========================".green)
            console.log("selecciona una opcion".green)
            console.log("=========================\n".green)

            console.log(`${'1.'.green} Crear Tarea`)
            console.log(`${'2.'.green} Listar Tareas`)
            console.log(`${'3.'.green} listar Tareas completadas`)
            console.log(`${'4.'.green} listar Tareas pendientes`)
            console.log(`${'5.'.green} Completar Tareas (s)`)
            console.log(`${'6.'.green} Borrar Tarea`)
            console.log(`${'0.'.green} Salir\n`)

            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
    
            readLine.question('selecciona una opcion del menu : ',(answer) => {
                    console.log(answer);
                    readLine.close();
                   
            })

            
        }

        module.exports = {
            mostrarMenu,
        }
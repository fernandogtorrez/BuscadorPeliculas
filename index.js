const {busqueda} = require('./pelis')

function parseo(argumentos) {
    const obj = {}
    argumentos.forEach((element,i) => {
        if(element.startsWith('--')){
            const sinGuion = element.slice(2)
            obj[sinGuion] = argumentos[i+1]
        }
    });
    return obj
}

function main() {
    let argumentoParseado = parseo(process.argv)
    let resultado = busqueda(argumentoParseado)
    console.table(resultado);
}

main()
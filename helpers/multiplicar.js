const fs = require('fs');
const colors = require('colors')
const crearArchivo = async (base,listar,hasta) => {

    try {
     
        let salida = '';
        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;

        }
        if (listar) {
            console.log("==================================".green)
            console.log(`\t Tabla del ${base}`.underline)
            console.log("==================================".green)
    
            console.log(salida)
        }
       

        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`;
    } catch (error) {
        throw error;
    }


}

module.exports = crearArchivo;
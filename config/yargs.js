const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe : 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'lista las tablas de multiplicar'
      
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'sirve para saber hasta que numero multiplicar'
      
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw  'La base tine que ser un entero';
        }
        return true
    })
    .argv;
module.exports = argv;
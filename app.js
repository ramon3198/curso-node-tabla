const multiplicar = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear();

 multiplicar(argv.base, argv.l, argv.h)
.then(nombre =>console.log(nombre.gray))
.catch(err=>console.log(err)) 
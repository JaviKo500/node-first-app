const { createFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');
console.clear()
// console.log(process.argv );
console.log(argv);
const {base, list, until} = argv;
// const [,, arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
createFile( base, list, until )
    .then( fileName => console.log( fileName, 'created' ))
    .catch( error => console.log);

const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        // default: 5,
                        demandOption: true,
                        describe: 'is required number'              
                    },
                    'l': {
                        alias: 'list',
                        type: 'boolean',
                        default: false,
                        describe: 'show table in log'
                    },
                    'u': {
                        alias: 'until',
                        type: 'number',
                        default: 10,
                        describe: ' 1 x n'
                    }
                })
                .check( (argv, options ) => {
                    if ( isNaN( argv.b ) ) {
                        throw 'the base is number';
                    }
                    return true;
                })
                .argv;
module.exports = argv ;
const { writeFileSync } =  require('fs');;
const colors = require('colors');
const createFile = async ( base = 5, list = false, until = 10) => {

    const exit =  calculateMultiplication( base, until );
    try {
        const fileName = `./exit/message-${base}.txt`;
        if  ( list ) console.log( exit.console  ); 
        await writeFileSync( fileName, exit.exit );
        return fileName;
    } catch (error) {
        throw error;
    }
};

const calculateMultiplication = (base, until) => {
    
    let exit, console = '';
    for (let index = 1; index < (until + 1 ); index++) {
        exit +=  ` ${base} ${ 'X' } ${ index } = ${ base * index } \n`;
        console +=  ` ${base} ${ 'X'.green } ${ index } = ${ base * index } \n`;
    }
    return {exit, console};
}

module.exports = { createFile };
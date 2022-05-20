import fs from 'fs/promises'

// process.on('uncaughtException', (error) => {
//     console.log(`Something went wrong: ${error}`);
// })

// // CREATE
export const createFile = (fileName, item) => {
    if (!fileName || !item) throw 'The fileName is missing!'
    if (!item) throw 'The item is missing!'
    return  fs.appendFile(`./data/${fileName}.csv`, item)
}

// READ
export const readFile = async (fileName) => {
    if (!fileName) throw 'The fileName is missing!'
    return fs.readFile(`./data/${fileName}.csv`, 'utf-8')
}

// // UPDATE
export const updateFile = (fileName) => {
    if (!fileName) throw 'The fileName is missing!'
}


// // DESTROY
export const destroyFile = (fileName) => {
    if (!fileName) throw 'The fileName is missing!'
}
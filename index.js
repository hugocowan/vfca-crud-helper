import { createFile, readFile, updateFile, destroyFile } from './helpers.js'


export const createItems = async (fileName, item) => {
    await createFile(fileName, `${item}\r\n`)
    return await readFile(fileName)
}

export const readItems = (fileName, index) => {}

export const updateItems = (fileName, targetItem, newItem) => {}

export const deleteItems = (fileName, targetItem) => {}

console.log(await createItems(process.argv[2], process.argv[3]))
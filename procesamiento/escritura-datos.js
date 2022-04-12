import {promises as fs} from 'fs'
const path = './archivos/datos-usuario.txt';
export default async datos => await fs.appendFile(path, datos);
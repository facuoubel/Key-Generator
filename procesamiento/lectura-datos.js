import {promises as fs} from 'fs';
const path = './archivos/datos-usuario.txt';
export default async() => {
    try {
        const datos = await fs.readFile(path, 'utf-8');
        const arregloCuentas = datos.split(/\r?\n/).map(linea => {
            const cuenta = linea.split(" ");
            return {
                nombre: cuenta[0],
                clave: cuenta[1]
            }
        })
        arregloCuentas.pop()
        return arregloCuentas;
    } catch(err) {
        return console.error(`error de lectura: ${err}`)
    }
}

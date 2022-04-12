import crypto from 'crypto';

export default clave => {
    return new Promise (resolve => {
        crypto.randomBytes(64, (err, buff) => {
            const sal = buff.toString('base64');
            crypto.pbkdf2(clave, sal, 100000, 64, 'sha512', (err, key) => {
                resolve(key.toString('hex'));
            })
        })
    });
}
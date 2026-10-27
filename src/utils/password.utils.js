import bcrypt from 'bcrypt'

/**
 * Genera el hash de una contraseña para guardarla de forma segura.
 * @param {string} password - Contraseña en texto plano.
 * @returns {Promise<string>} Hash de la contraseña.
 */
export const createHash = async password => {
    return await bcrypt.hash(password, 10)
}

/**
 * Compara una contraseña en texto plano contra un hash guardado.
 * Se usa en el login (clase 3) — se deja lista desde ahora.
 * @param {string} password - Contraseña ingresada por el usuario.
 * @param {string} hashedPassword - Hash guardado en la base de datos.
 * @returns {Promise<boolean>} true si coinciden, false si no.
 */
export const isValidPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}

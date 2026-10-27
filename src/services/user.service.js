import { UserModel } from "../models/user.model.js"

/**
 * Busca un usuario por email.
 * Por ahora llama directo a UserModel — cuando en clase 8 se arme el DAO,
 * este service pasa a llamar al DAO en vez del modelo directamente.
 * @param {string} email - Email ya normalizado (trim + lowercase).
 * @returns {Promise<import("mongoose").Document | null>}
 */
export const getUserByEmail = async email => {
    return await UserModel.findOne({ email })
}

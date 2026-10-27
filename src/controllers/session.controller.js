import {UserModel} from "../models/user.model.js"
import { getUserByEmail } from "../services/user.service.js"
import { createHash } from "../utils/password.utils.js"

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const register = async ( req, res) => {
    
    const { first_name, last_name, email, password } = req.body

    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({
            status: 'error',
            message: 'Todos los campos son obligatorios'
        })
    }

    const normalizedEmail = email.toLowerCase().trim()
    const hashedPassword = await createHash( password );

    // Antes se consultaba el modelo directo desde el controller:
    // const userExists = await UserModel.findOne({ email: normalizedEmail })
    const userExists = await getUserByEmail(normalizedEmail)

    if (userExists) {
        return res.status(409).json({
            status: 'error',
            message: 'Ya existe un usuario registrado con ese email'
        })
    }

    const newUser = await UserModel.create({
            first_name:first_name,
            last_name: last_name,
            email: normalizedEmail,
            password: hashedPassword,
            role: 'user'
    })

    res.status(201).json({"data":newUser})
}
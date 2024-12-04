import { UnauthenticatedError, Unauthorized } from "../errors/customErrors.js"
import { verifyJWT } from "../utils/tokenUtils.js"

export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies
    if (!token) throw new UnauthenticatedError('authentication invalid')

    try {
        const { userId, role } = verifyJWT(token)
        req.user = { userId, role }
        next()
    } catch (error) {
        throw new UnauthenticatedError('authentication invalid')
    }
}

export const authorizedPermissions = (...roles) => {
    return (req, res, next) => {
        // if (!roles.includes(req.user.role)) {
        //     throw new Unauthorized('Unauthorized to access to this route')
        // }
        next();
    }
}
import { BadRequestError, UnauthenticatedError, Unauthorized } from "../errors/customErrors.js"
import { verifyJWT } from "../utils/tokenUtils.js"

export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies
    if (!token) throw new UnauthenticatedError('authentication invalid')

    try {
        const { userId, role } = verifyJWT(token)
        const testUser = userId === "67519d865b464c931c3b2ceb"
        req.user = { userId, role, testUser }
        next()
    } catch (error) {
        throw new UnauthenticatedError('authentication invalid')
    }
}

export const authorizedPermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new Unauthorized('Unauthorized to access to this route')
        }
        next();
    }
}

export const checkForTestUser = (req, res, next) => {
    if (req.user.testUser) throw new BadRequestError('Demo User. Read Only!')
    next()
}
import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { validateRegisterInput } from "../middleware/validationMiddleware.js";

const router = Router()

router.post('/register', validateRegisterInput, register)
router.post('/login', login)

export default router;
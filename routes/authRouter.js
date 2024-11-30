import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { validateRegisterInput, validateLoginInput } from "../middleware/validationMiddleware.js";

const router = Router()

router.post('/register', validateRegisterInput, register)
router.post('/login', validateLoginInput, login)

export default router;
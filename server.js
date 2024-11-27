import * as dotenv from 'dotenv';
dotenv.config();

import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';

// routers
import jobRouter from './routes/jobRouter.js';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/api/v1/test', [
    body('name').notEmpty().withMessage('name is required').isLength({ min: 50 }).withMessage('name must be at least 50'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((error) => error.msg)
            return res.status(400).json({ errors: errorMessages })
        }
        next()
    }
], (req, res) => {
    const { name } = req.body
    res.json({ message: `Hello ${name}` })
})

app.use('/api/v1/jobs', jobRouter)

app.use('*', (req, res) => {
    res.status(404).json({ msg: "not found" })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`server running on port: ${port}`);
    })
} catch (error) {
    console.log(error);
    process.exit(1)
}


import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import mongoose from 'mongoose';
import Job from '../models/JobModel.js';
import User from '../models/UserModel.js';

const withValidationErrors = (validateValues) => {
    return [validateValues, (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((error) => error.msg)
            if (errorMessages[0].startsWith('no job')) {
                throw new NotFoundError(errorMessages)
            }
            throw new BadRequestError(errorMessages)
        }
        next()
    }]
}

export const validateJobInput = withValidationErrors([
    body('company').notEmpty().withMessage('company is required'),
    body('position').notEmpty().withMessage('position is required'),
    body('jobLocation').notEmpty().withMessage('job location is required'),
    body('jobStatus').isIn(JOB_STATUS).withMessage('Invalid status value'),
    body('jobType').isIn(JOB_TYPE).withMessage('Invalid type value'),
])


export const validateIdParams = withValidationErrors([
    param('id').custom(async (value) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value)
        if (!isValidId) throw new BadRequestError('invalid MongoDB id')
        const job = await Job.findById(value)
        if (!job) throw new NotFoundError(`no job with id ${value}`)
    })
])

export const validateRegisterInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format').custom(
        async (email) => {
            const user = await User.findOne({ email })
        }),
    body('password').notEmpty().withMessage('password is required').isLength({ min: 8 }).withMessage('password must be at least 8 character'),
    body('location').notEmpty().withMessage('location is required'),
])

export const validateLoginInput = withValidationErrors([
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required') 
])  
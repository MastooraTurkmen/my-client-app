import { Router } from 'express'
const router = Router()
import { getAllJobs, getSingleJob, updateJob, createJob, deleteJob } from '../controllers/jobController.js'
import { validateJobInput, validateIdParams } from '../middleware/validationMiddleware.js'

router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router.route('/:id').get(validateIdParams, getSingleJob).patch(validateJobInput, updateJob).delete(validateIdParams, deleteJob)

export default router;
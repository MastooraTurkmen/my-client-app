import { Router } from 'express'
const router = Router()
import { getAllJobs, getSingleJob, updateJob, createJob, deleteJob } from '../controllers/jobController.js'
import { validateJobInput } from '../middleware/validationMiddleware.js'

router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router.route('/:id').get(getSingleJob).patch(validateJobInput, updateJob).delete(deleteJob)

export default router;
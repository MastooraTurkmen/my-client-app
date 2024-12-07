import { Router } from 'express'
const router = Router()
import { getAllJobs, getSingleJob, updateJob, createJob, deleteJob, showStats } from '../controllers/jobController.js'
import { validateJobInput, validateIdParams } from '../middleware/validationMiddleware.js'
import { checkForTestUser } from '../middleware/authMiddleware.js'

router.route('/').get(getAllJobs).post(checkForTestUser, validateJobInput, createJob)
router.route('/stats').get(showStats)
router.route('/:id').get(validateIdParams, getSingleJob).patch(validateJobInput, updateJob).delete(checkForTestUser, validateIdParams, deleteJob)

export default router;
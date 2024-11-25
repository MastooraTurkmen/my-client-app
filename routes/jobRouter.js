import { Router } from 'express'
const router = Router()
import { getAllJobs, getSingleJob, updateJob, createJob, deleteJob } from '../controllers/jobController.js'

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getSingleJob).patch(updateJob).delete(deleteJob)

export default router;
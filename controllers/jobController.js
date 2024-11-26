import Job from '../models/JobModel.js';
import 'express-async-errors'

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find(req.body)
    res.status(200).json({ jobs })
}

export const createJob = async (req, res) => {
    try {
        const { company, position } = req.body
        const job = await Job.create({ company, position })
        res.status(201).json({ job })
    } catch (error) {
        res.status(500).json({ msg: 'server error' })
    }
}

export const getSingleJob = async (req, res) => {
    const { id } = req.params
    const job = await Job.findById(id)
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` })
    }
    res.status(200).json({ job })
}

export const updateJob = async (req, res) => {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true
    })
    if (!updatedJob) {
        return res.status(404).json({ msg: `no job with id ${id}` })
    }
    res.status(200).json({ msg: 'job modified', job: updatedJob })
}

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id)

    if (!removedJob) {
        return res.status(404).json({ msg: `no job with id ${id}` })
    }

    res.status(200).json({ msg: 'job deleted', job: removedJob })
}
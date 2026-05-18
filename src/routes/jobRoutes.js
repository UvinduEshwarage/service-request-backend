const express = require('express');

const {
    getJobs,
  getJobById,
  createJob,
  updateJobStatus,
  deleteJob
} = require("../controllers/jobController");

const router = express.Router();

router.get("/", getJobs);

router.get("/:id", getJobById);

router.post("/", createJob);

router.put("/:id", updateJobStatus);

router.delete("/:id", deleteJob);

module.exports = router;
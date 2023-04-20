const express = require("express")
const { addApplicant, ApplicantList, SingleApplicant, ApplicantNextProcess, } = require("../controllers/applicantControlls")
const Applicant = require("../models/applicant")
const applicantRoutes = express.Router()



applicantRoutes.post("/applicant/add", addApplicant)

//Getting all the applicants list

applicantRoutes.put("/appicant/update/comments", ApplicantNextProcess)
applicantRoutes.get("/allApplicants", ApplicantList)
applicantRoutes.get("/singleApplicant/:email", SingleApplicant)

module.exports = applicantRoutes
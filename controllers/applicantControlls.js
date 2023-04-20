const asyncHandler = require("express-async-handler")
const Applicant = require("../models/applicant")
/*************add applicant  **************/
const addApplicant = asyncHandler(async (req, res) => {
    const { name, email, mobile, role, status, qualification, passout, collegeName, resumeLink } = req.body

    if (!name, !email, !mobile, !role, !status, !collegeName, !qualification, !passout, !resumeLink) {
        throw new Error("All feilds are required")
    }

    try {
        const applicantExits = await Applicant.findOne({ email })
        if (applicantExits) {
            throw new Error("Applicant already Exits/please Enter new applicant")
        }
        const newApplicant = await Applicant.create(req.body)
        if (newApplicant) {
            res.json(newApplicant)
        } else {
            throw new Error("Unable to Create applicant! please try after some time")
        }
    }
    catch (err) {
        console.log(err.message)
        res.send(err.message)
    }

})


//Get the all Applicant details
const ApplicantList = asyncHandler(async (req, res) => {
    try {
        const allApplicants = await Applicant.find()
        if (allApplicants.length > 0) {
            res.status(200).json(allApplicants)
        } else {
            res.status(404).send(allApplicants)
        }
    }
    catch (err) {
        console.log(err.message)
    }
})

//Get the one Applicant details
const SingleApplicant = asyncHandler(async (req, res) => {
    const oneApplicant = await Applicant.findOne({ email: req.params.email })
    if (!oneApplicant) {
        res.status(404).send("Applicant not Exits")
    } else {
        res.json(oneApplicant)
    }
}
)

//update the applicant like next round,comments,status
const ApplicantNextProcess = asyncHandler(async (req, res) => {
    const { email, comment, commentBy, cRound, nextRound, status } = req.body
    if (email !== "" && comment !== "" && commentBy !== "" && cRound !== "" && nextRound !== "" && status !== "") {
        const updatedApplicant = await Applicant.findOneAndUpdate({ email: email }, {
            nextRound: nextRound,
            status: status,
            $push: {
                "comments": {
                    comment: comment,
                    commentBy: commentBy,
                    cRound: cRound
                }
            }
        }, { new: true })
        if (updatedApplicant) {
            res.send(updatedApplicant)
        } else {
            res.status(404).send("Unable to update the applicant")
        }
    } else {
        res.status(404).send("All feilds are required")
    }
})


module.exports = { addApplicant, ApplicantList, SingleApplicant, ApplicantNextProcess }
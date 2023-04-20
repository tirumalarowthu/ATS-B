const mongoose = require("mongoose")
const applicantSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required"]
    },
    email: {
        type: String,
        require: [true, "email is required"]
    },
    mobile: {
        type: Number,
        require: [true, "mobile number is required"]
    },  
    collegeName: {
        type: String,
        require: [true, "college name is required"]
    },
    qualification: {
        type: String,
        require: [true, "qualification is required"]
    },
    passout: {
        type: Number,
        require: [true, 'passout is required']
    },
    nextRound: {
        type: String,
        default: 'HR Round'
    },
    role: {
        type: String,
        require: [true, "role is required"]
    },
    status: {
        type: String,
        default: "Assignment"
    },
    experience: {
        type: Number,
        default:0
    },
    previousCompany: {
        type: String,
        default: "Not Applicable"
    },
    resumeLink: {
        type: String,
        require: [true, "Resume link is required"]
    },
    comments: [{
        commentBy: String,
        comment: String,
        cRound:String
    }]
},{ timestamps: true })

const Applicant = mongoose.model("Applicant", applicantSchema)
module.exports = Applicant




























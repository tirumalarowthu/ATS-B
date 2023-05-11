const nodemailer = require("nodemailer")
const express = require("express")
const sendMails = express.Router()
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "tirumalarowthuv@gmail.com",
        pass: "dthqdtvsagsiuivp"
    }
})


sendMails.post("/add/send/:text", async (req, res) => {
    const { text } = req.params
    const mailOptions = {
        from: "tirumalarowthuv@gmail.com",
        to: ['Technicalmanagerp2f@gmail.com', 'Hiringmanagerp2f@gmail.com', 'hrpfsemi5@gmail.com', 'akshata8178@gmail.com'],
        subject: `New applicant ${text} added(Applicant-Tracking-System).`,
        text: `Hello there! I hope this email finds you well. I have some exciting news to share: ${text} our new applicant, has been successfully added.`
    }
    transporter.sendMail(mailOptions, async (err, info) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send("Email sent successfully" + info.response)
        }
    })
})
sendMails.post("/change/:email/:text", async (req, res) => {
    const { text,email } = req.params
    const mailOptions = {
        from :"tirumalarowthuv@gmail.com",
        to:email,
        subject:`Applicant ${text} status changed.`,
        text:`Hi,You have to an interview with ${text}`

    }
    transporter.sendMail(mailOptions,async(err,info)=>{
        if(err){
            res.send(err.message)
        }else{
            res.send("Email sent successfully "+info.response)
        }
    })
})
module.exports = sendMails
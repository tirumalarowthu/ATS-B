const nodemailer=require("nodemailer")
const express=require("express")
const sendMails=express.Router()
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"tirumalarowthuv@gmail.com",
        pass:"dthqdtvsagsiuivp"
    }
})


sendMails.post("/add/send/:text",async(req,res)=>{
    const {text}=req.params
    const mailOptions={
        from:"tirumalarowthuv@gmail.com",
        to: ['Technicalmanagerp2f@gmail.com', 'Hiringmanagerp2f@gmail.com', 'hrpfsemi5@gmail.com','akshata8178@gmail.com'],
        subject:"New Applicant Added(Applicant-Tracking-System).",
        text: `Hi, I hope this email find you well.I want to say good news that New Applicant ${text} Added Successfully....`
    }
    transporter.sendMail(mailOptions,async(err,info)=>{
            if(err){
                res.send(err.message)
            }else{
                res.send("Email sent successfully"+info.response)
            }
    })
})
module.exports=sendMails
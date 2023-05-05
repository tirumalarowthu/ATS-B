const accountSid = 'ACd2d6a6e25a936f6ce0397a29755fc1e8';
const authToken = 'c08aa3709b73ea42a03742798110e07f';
const client = require('twilio')(accountSid, authToken);
const express=require("express")
const msg=express.Router()
msg.get("/msg/:message", async (req, res) => {
    const {message } = req.params
    await client.messages.create({
        to: "+917288825006",
        from: '+13204131470',
        body: `${message}`
    })
        .then(msg => res.send(`Message sent to +91 7288825006 and the message is : ${message}`))
        .catch(err => res.send(err.message));
})
module.exports = msg  
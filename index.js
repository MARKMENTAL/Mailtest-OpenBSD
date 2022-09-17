import Mailer from 'nodemailer'
import express, { response } from 'express'
const app = express()
const port = 5091

let frommail = 'noreply@mentalnet.xyz';



let transporter = Mailer.createTransport({
	sendmail: true,
	newline: 'unix',
	path: '/usr/sbin/sendmail',
})

app.get('/', (req, res) => {
	let email = req.query.email
	let company = req.query.company
	// if company is not input then give no response and dont send the email
	if (email.includes("@") == false || typeof company == "undefined" || company == ""){
		email = "Not a Valid Email"
	}
	console.log(email)
	console.log(company)
	
	// we only send emails to ones that don't get caught by the if statement above
	if (email != "Not a Valid Email" ){
	transporter.sendMail({
		to: email,
		from: "No-Reply"  + "<" +frommail + ">", // Make sure you don't forget the < > brackets
		subject: 'OpenBSD & Nodemailer!',
		text: 'Please open this email with HTML support.', // Optional, but recommended for old clients
		html: `<h1 style="color:gold;background:black;">Nodemailer Running on OpenBSD!</h1> <img src="cid:unique@mentalnet.xyz"/>  <p> I installed postfix and nodejs on <a href="https://www.openbsd.org/"> OpenBSD 7</a> to do this.</p><br>` 
		+ `<h3><i>This message was intended for the ` + company +` company.</i></h3>`, // html email, modern clients see this
		attachments: [{
     		   	filename: 'image.png',
        		path: 'openbsd.png',
        		cid: 'unique@mentalnet.xyz' //same cid value as in the html img src
    		}]
	})

	res.send('you reached server <br> Email sent to: ' + email + "<br> From the company: " + company)
	}
	// no response if email is invalid
})
app.listen(port, () =>{
	console.log(`Nodemailer app waiting for GET on port ${port}`)
})

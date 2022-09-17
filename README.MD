# About

A nodejs email server app made with express, nodemailer and postfix. Made on OpenBSD but should run on all unix-like and linux systems

# Dependencies
	- Node JS 16 at least
	- Express JS
	- Postfix
	- Nodemailer
	- Unix-like/Linux OS with sendmail installed

# Run Instructions
	Step 1: 'npm i' inside of the project folder to install node modules
	Step 2: 'node index.js' to start the server.

# Sending GETs to send emails
	Open a browser and send some get requests with email and company parameters filled 'http://yourserverip:yourport/?email=email@here.com&company=CompanyHere'
	After doing this your emails will send and the parameters sent will show in the nodejs console log

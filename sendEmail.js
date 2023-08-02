const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Set to true if using a secure connection (like SSL/TLS)
  auth: {
    user: "juliet.ratke@ethereal.email",
    pass: "cvnK7CCKHZbujXbDcb",
  },
});

// HTML content for the email
const htmlContent = `<h1>Hello!</h1>
<p>This is an HTML email sent from Node.js using Nodemailer.</p>`;

// Email options
const mailOptions = {
  from: "vichuvishwa004@gmail.com", // Sender address
  to: "juliet.ratke@ethereal.email", // Recipient address
  subject: "Node.js HTML Email", // Subject line
  html: htmlContent, // HTML content of the email
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});

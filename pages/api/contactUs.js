import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"]
  })
);
var nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "sanaakayum.com",
  port: 465,
  secure: true,
  auth: {
    user: "hello@sanaakayum.com",
    pass: "$W0rdf1sh"
  }
});
export default async function handler(req, res) {
  await cors(req, res);
  const enquiry = req.body;

  var mailOptions = {
    from: "hello@sanaakayum.com",
    to: "hello@sanaakayum.com",
    subject: enquiry.subject + " from " + enquiry.email,
    html: enquiry.textarea
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.statusCode = 200;
      res.end();
    }
  });
}

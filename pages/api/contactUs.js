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
  name: "sanaakayum.com",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "hello@sanaakayum.com",
    clientId:
      "388749780390-0kr63ilrrtk1sf9cd323422npndb6ol5.apps.googleusercontent.com",
    clientSecret: "B2fBpLV1NtUb5Mn4TUJVBzU2",
    refreshToken:
      "1//04ZsONVHRYFlkCgYIARAAGAQSNwF-L9IrHc8atdCmvXGqA8EaUWpzBoF4UBXKkq6wiVvt6Zhbo8OhJRaLjpU7po0HYwix919solg"
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

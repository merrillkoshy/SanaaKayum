import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
var nodemailer = require("nodemailer");

// Initialize the cors middleware
const cors = initMiddleware(
  
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"]
  })
);
let transporter = nodemailer.createTransport({
  host: "securesgp95.sgcpanel.com",
  port: 465,
  secure: true,
  auth: {
    user: "hello@sanaakayum.com",
    pass: "$W0rdf1sh"
  }
});


export default async function handler(req, res) {
    

    const name=req.headers.name
    const email=req.headers.email
    const address=req.headers.address
    const phone=req.headers.phone
    const tr_ref=req.body.tran_ref
    const product=req.body.product
    const reason=req.body.reason
const mailBody='<html xmlns:v="urn:schemas-microsoft-com:vml" style="width: 100%;"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;"> <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet"> <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,700" rel="stylesheet"> <title>REFUND REQUEST from '+name+ '- Orders | sanaakayum</title> <style type="text/css">@media only screen and (max-width: 640px){.main-header{font-size: 20px !important;}.main-section-header{font-size: 28px !important;}.show{display: block !important;}.hide{display: none !important;}.align-center{text-align: center !important;}.no-bg{background: none !important;}.main-image img{width: 440px !important; height: auto !important;}.divider img{width: 440px !important;}.container590{width: 440px !important;}.container580{width: 400px !important;}.main-button{width: 220px !important;}.section-img img{width: 320px !important; height: auto !important;}.team-img img{width: 100% !important; height: auto !important;}}@media only screen and (max-width: 479px){.main-header{font-size: 18px !important;}.main-section-header{font-size: 26px !important;}.divider img{width: 280px !important;}.container590{width: 280px !important;}.container590{width: 280px !important;}.container580{width: 260px !important;}.section-img img{width: 280px !important; height: auto !important;}}</style> </head> <body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="width: 100%;background-color: #000000;margin: 0;padding: 0;-webkit-font-smoothing: antialiased;mso-margin-top-alt: 0px;mso-margin-bottom-alt: 0px;mso-padding-alt: 0px 0px 0px 0px;"> <table style="font-size: 14px; border: 0; display: none;"> <tbody> <tr> <td> <div style="overflow:hidden;display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:Arial;maxheight:0px;max-width:0px;opacity:0;"> REFUND Requested from '+name+' </div></td></tr></tbody> </table> <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="000000" style="font-size: 14px; border: 0;"> <tbody> <tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;"> <tbody> <tr> <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td></tr><tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;"> <tbody> <tr> <td align="center" height="70" style="height:70px;"> <a href="" style="display: block; border-style: none !important; border: 0 !important;"><img width="300" border="0" style="display: block; width: 100px;" src="https://sanaakayum.com/assets/img/logo/logo-gold.png" alt=""></a> </td></tr></tbody> </table> </td></tr><tr> <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td></tr></tbody> </table> </td></tr></tbody> </table> <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" style="font-size: 14px; border: 0;"> <tbody> <tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;"> <tbody> <tr> <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td></tr><tr> <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td></tr><tr> <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td></tr><tr> <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td></tr><tr> <td align="center" style="color: #343434; font-size: 22px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 2px; line-height: 35px;" class="main-header"> <div style="line-height: 35px"> REFUND REQUEST from <span style="color: #F44336;">'+name+'</span> </div></td></tr><tr> <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td></tr><tr> <td align="center"> <table border="0" width="40" align="center" cellpadding="0" cellspacing="0" bgcolor="eeeeee" style="font-size: 14px; border: 0;"> <tbody> <tr> <td height="2" style="font-size: 2px; line-height: 2px;">&nbsp;</td></tr></tbody> </table> </td></tr><tr> <td height="15" style="font-size: 15px; line-height: 15px;">&nbsp;</td></tr><tr> <td align="left" style="color: #343434;font-size: 22px;font-family: Quicksand, Calibri, sans-serif;font-weight:700;letter-spacing: 2px;line-height: 35px;" class="main-header"> <div style="line-height: 35px">Customer Contact </div></td></tr><tr> <td style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;">Email </td><td align="left" style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;">'+email+'</td></tr><tr> <td style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;">Address </td><td align="left" style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;">'+address+'</td></tr><tr> <td style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;">Phone </td><td align="left" style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;">'+phone+'</td></tr><tr> <td align="center"> <table border="0" width="400" align="center" cellpadding="0" cellspacing="0" class="container590"> <tbody> <tr> <td align="center" style="color: #888888; font-size: 16px; font-family: " work="" sans",="" calibri,="" sans-serif;="" line-height:="" 24px;"=""> <div style="line-height: 24px"> PRODUCT CODE :'+product+'</div></td></tr></tbody> </table> </td></tr><tr> <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td></tr><tr> <td align="center"> <table border="0" width="400" align="center" cellpadding="0" cellspacing="0" class="container590"> <tbody> <tr> <td align="center" style="color: #888888; font-size: 16px; font-family: " work="" sans",="" calibri,="" sans-serif;="" line-height:="" 24px;"=""> <div style="line-height: 24px"> TRANSACTION REFERENCE: '+tr_ref+'</div></td></tr></tbody> </table> </td></tr><tr> <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td></tr><tr> <td align="center"> <table border="0" width="400" align="center" cellpadding="0" cellspacing="0" class="container590"> <tbody> <tr> <td align="center" style="color: #888888; font-size: 16px; font-family: " work="" sans",="" calibri,="" sans-serif;="" line-height:="" 24px;"=""> <div style="line-height: 24px">REASON :'+reason+'</div></td></tr></tbody> </table> </td></tr><tr> <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td></tr><tr> <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td></tr></tbody> </table> </td></tr><tr class="hide"> <td height="15" style="font-size: 15px; line-height: 15px;">&nbsp;</td></tr><tr> <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td></tr></tbody> </table> <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="000000" style="font-size: 14px; border: 0;"> <tbody> <tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;"> <tbody> <tr> <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td></tr><tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;"> <tbody> <tr> <td align="center" height="70" style="height:70px;"> </td></tr></tbody> </table> </td></tr><tr> <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td></tr></tbody> </table> </td></tr></tbody> </table> </body></html>'
  // Run cors
  await cors(req, res);
  var mailOptions = {
    from: "hello@sanaakayum.com",
    to: "hello@sanaakayum.com",
    subject: "Refund request " ,
    // req.body
    html: mailBody
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.redirect(200,"/")
}

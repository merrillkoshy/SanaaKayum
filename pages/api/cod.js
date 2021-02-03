import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import clientMgr from "../../constants/contentManager";
var nodemailer = require("nodemailer");

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"]
  })
);
let transporter = nodemailer.createTransport({
  name: "sanaakayum.com",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "hello@sanaakayum.com",
    clientId: process.env.NEXT_PUBLIC_GCID,
    clientSecret: process.env.NEXT_PUBLIC_GSEC,
    refreshToken: process.env.NEXT_PUBLIC_RTK
  }
});

export default async function handler(req, res) {
  const orderData = req.body;
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const dubaiDate = new Date(date.getTime() - offset);

  const transactionResponse = {
    order_time: dubaiDate,
    ...orderData,
    ...{ purchaseItems: orderData.cartData }
  };
  clientMgr
    .then(environment => environment.getEntry(req.headers.token))
    .then(entry => {
      if (entry.fields["orderData"] === undefined)
        entry.fields["orderData"] = { "en-US": [orderData] };
      else entry.fields["orderData"]["en-US"].push(orderData);
      if (entry.fields["transactionsData"] === undefined)
        entry.fields["transactionsData"] = { "en-US": [transactionResponse] };
      else entry.fields["transactionsData"]["en-US"].push(transactionResponse);
      entry.fields.cartData["en-US"] = null;

      return entry.update();
    })
    .then(entry => entry.publish());

  // Run cors
  await cors(req, res);
  const email = orderData.customer_details.email;
  const address =
    orderData.customer_details.street1 +
    "\n" +
    orderData.customer_details.city +
    "\n" +
    orderData.customer_details.state +
    "\n" +
    orderData.customer_details.country;
  const phone = orderData.customer_details?.phone
    ? orderData.customer_details.phone
    : "";

  const productsBlock =
    orderData.cartData &&
    orderData.cartData.map(order => {
      const gtin = order.size.filter(sz => {
        if (sz.name == order.selectedProductSize) return sz;
      })[0];

      return `<div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;" > <div style="width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" > <table id="u_content_image_4" class="u_content_image" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" > <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left" > <table width="100%" cellpadding="0" cellspacing="0" border="0" > <tbody> <tr> <td style="padding-right: 0px;padding-left: 0px;" align="center" > <img align="center" border="0" src=https:${
        order.images[0].fields.file.url
      }?fm=jpg alt="Image" title="${
        order.article
      }" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;width: 100%;max-width: 280px;" width="280" class="v-src-width v-src-max-width"/> </td></tr></tbody> </table> </td></tr></tbody> </table> <table id="u_content_text_9" class="u_content_text" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" > <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left" > <div class="v-text-align" style="color: #ddbb74; line-height: 140%; text-align: left; word-wrap: break-word;" > <p style="font-size: 14px; line-height: 140%;" > <strong>${
        order.article
      } || ${
        order.serialNumber
      } </strong> </p></div></td></tr></tbody> </table> <table id="u_content_text_10" class="u_content_text" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" > <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px;font-family:'Open Sans',sans-serif;" align="left" > <div class="v-text-align" style="color: #1b2a2f; line-height: 140%; text-align: left; word-wrap: break-word;" > <p style="font-size: 14px; line-height: 140%;" > <span style="font-size: 24px; line-height: 33.6px;" ><strong >${
        order.description
      }</strong ></span > </p></div></td></tr></tbody> </table> <table id="u_content_text_11" class="u_content_text" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" > <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left" > <div class="v-text-align" style="color: #858586; line-height: 120%; text-align: left; word-wrap: break-word;" > <p style="font-size: 14px; line-height: 120%;" > <span style="line-height: 21.6px; font-size: 18px;" >&nbsp; &nbsp; &nbsp; &nbsp;<strong ><span style="font-size: 28px; line-height: 33.6px; color: #ddbb74;" >AED ${
        order.price
      }</span ></strong ></span > </p></div></td></tr></tbody> </table> <table id="u_content_button_2" class="u_content_button" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" > <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left" > <div class="v-text-align" align="left"> <a class="v-size-width" style="box-sizing: border-box;display: inline-block;font-family:'Open Sans',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #1b2a2f; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;" > <span class="v-padding" style="display:block;padding:15px 25px;line-height:120%;" ><span style="font-size: 14px; line-height: 16.8px;" >QTY : ${
        order.quantity
      }</span ></span > ${
        order.selectedProductSize
          ? `<span class="v-padding" style="display:block;padding:15px 25px;line-height:120%;" ><span style="font-size: 14px; line-height: 16.8px;"> SIZE : ${order.selectedProductSize}</span ></span >`
          : ""
      }${
        gtin?.gtin !== undefined
          ? `<span class="v-padding" style="display:block;padding:15px 25px;line-height:120%;" ><span style="font-size: 14px; line-height: 16.8px;"> GTIN : ${gtin?.gtin}</span ></span >`
          : ""
      }</a> </div></td></tr></tbody> </table> </div></div></div>`;
    });

  const mailBody = `<html xmlns:v="urn:schemas-microsoft-com:vml" style="width: 100%;"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;"/> <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet"/> <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,700" rel="stylesheet"/> <title>${orderData.cart_description} - Orders | sanaakayum</title> <style type="text/css"> @media only screen and (max-width: 640px){.main-header{font-size: 20px !important;}.main-section-header{font-size: 28px !important;}.show{display: block !important;}.hide{display: none !important;}.align-center{text-align: center !important;}.no-bg{background: none !important;}.main-image img{width: 440px !important; height: auto !important;}.divider img{width: 440px !important;}.container590{width: 440px !important;}.container580{width: 400px !important;}.main-button{width: 220px !important;}.section-img img{width: 320px !important; height: auto !important;}.team-img img{width: 100% !important; height: auto !important;}}@media only screen and (max-width: 479px){.main-header{font-size: 18px !important;}.main-section-header{font-size: 26px !important;}.divider img{width: 280px !important;}.container590{width: 280px !important;}.container590{width: 280px !important;}.container580{width: 260px !important;}.section-img img{width: 280px !important; height: auto !important;}}</style> </head> <body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="width: 100%;background-color: #000000;margin: 0;padding: 0;-webkit-font-smoothing: antialiased;mso-margin-top-alt: 0px;mso-margin-bottom-alt: 0px;mso-padding-alt: 0px 0px 0px 0px;" > <table style="font-size: 14px; border: 0; display: none;"> <tbody> <tr> <td> <div style="overflow:hidden;display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:Arial;maxheight:0px;max-width:0px;opacity:0;" > NEW [COD] ORDER from  </div></td><td> <div style="overflow:hidden;display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:Arial;maxheight:0px;max-width:0px;opacity:0;" >${orderData.customer_details.customer_name} </div></td></tr></tbody> </table> <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="000000" style="font-size: 14px; border: 0;" > <tbody> <tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;" > <tbody> <tr> <td height="25" style="font-size: 25px; line-height: 25px;"> &nbsp; </td></tr><tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;" > <tbody> <tr> <td align="center" height="70" style="height:70px;"> <a href="" style="display: block; border-style: none !important; border: 0 !important;" ><img width="300" border="0" style="display: block; width: 100px;" src="https://sanaakayum.com/assets/img/logo/logo-gold.png" alt=""/></a> </td></tr></tbody> </table> </td></tr><tr> <td height="25" style="font-size: 25px; line-height: 25px;"> &nbsp; </td></tr></tbody> </table> </td></tr></tbody> </table> <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" style="font-size: 14px; border: 0;" > <tbody> <tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;" > <tbody> <tr> <td height="10" style="font-size: 10px; line-height: 10px;"> &nbsp; </td></tr><tr> <td height="10" style="font-size: 10px; line-height: 10px;"> &nbsp; </td></tr><tr> <td height="10" style="font-size: 10px; line-height: 10px;"> &nbsp; </td></tr><tr> <td height="10" style="font-size: 10px; line-height: 10px;"> &nbsp; </td></tr><tr> <td align="center" style="color: #343434; font-size: 22px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 2px; line-height: 35px;" class="main-header" > <div style="line-height: 35px"> NEW <span style="color: #F44336;">[COD]</span> ORDER from <span style="color: #F44336;" >${orderData.customer_details.customer_name}</span > </div></td></tr><tr> <td height="10" style="font-size: 10px; line-height: 10px;"> &nbsp; </td></tr><tr> <td align="center"> <table border="0" width="40" align="center" cellpadding="0" cellspacing="0" bgcolor="eeeeee" style="font-size: 14px; border: 0;" > <tbody> <tr> <td height="2" style="font-size: 2px; line-height: 2px;" > &nbsp; </td></tr></tbody> </table> </td></tr><tr> <td height="15" style="font-size: 15px; line-height: 15px;"> &nbsp; </td></tr><tr> <td align="left" style="color: #343434;font-size: 22px;font-family: Quicksand, Calibri, sans-serif;font-weight:700;letter-spacing: 2px;line-height: 35px;" class="main-header" > <div style="line-height: 35px">Customer Contact</div></td></tr><tr> <td style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;" > Email </td><td align="left" style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;" > ${email}</td></tr><tr> <td style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;" > Address </td><td align="left" style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;" > ${address} </td></tr><tr> <td style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;" > Phone </td><td align="left" style="line-height: 35px;font-size: 17px;font-family: Quicksand, Calibri, sans-serif;font-weight:300;letter-spacing: 2px;line-height: 35px;" > ${phone} </td></tr><div class="u-row-container" style="padding: 0px;background-color: transparent" > <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="u-row" > <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;" > <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;" > <div style="width: 100% !important;"> <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" > <table id="u_content_divider_2" class="u_content_divider" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" > <tbody> <tr> <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Open Sans',sans-serif;" align="left" > <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%" > <tbody> <tr style="vertical-align: top"> <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%" > <span>&nbsp;</span> </td></tr></tbody> </table> </td></tr></tbody> </table> </div></div></div></div></div></div><tr style="vertical-align: top"> <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top" > <div class="u-row-container" style="padding: 0px;background-color: #f5f5f5" > <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="u-row" > <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;" > ${productsBlock}</div></div></div></td></tr><tr> <td height="20" style="font-size: 20px; line-height: 20px;"> &nbsp; </td></tr><tr> <td height="20" style="font-size: 20px; line-height: 20px;"> &nbsp; </td></tr></tbody> </table> </td></tr><tr class="hide"> <td height="15" style="font-size: 15px; line-height: 15px;"> &nbsp; </td></tr><tr> <td height="20" style="font-size: 20px; line-height: 20px;"> &nbsp; </td></tr></tbody> </table> <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="000000" style="font-size: 14px; border: 0;" > <tbody> <tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;" > <tbody> <tr> <td height="25" style="font-size: 25px; line-height: 25px;"> &nbsp; </td></tr><tr> <td align="center"> <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590" style="font-size: 14px; border: 0;" > <tbody> <tr> <td align="center" height="70" style="height:70px;" ></td></tr></tbody> </table> </td></tr><tr> <td height="25" style="font-size: 25px; line-height: 25px;"> &nbsp; </td></tr></tbody> </table> </td></tr></tbody> </table> </body></html>`;
  var mailOptions = {
    from: "order@sanaakayum.com",
    to: "hello@sanaakayum.com",
    subject: orderData.cart_description + "- Orders | sanaakayum",
    html: mailBody
  };
  await transporter.verify();
  await transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.setHeader("Token", req.headers.token);
      res.statusCode = 200;
      orderData.orderStatus = "placed";
      res.json(orderData).end();
    }
  });
}

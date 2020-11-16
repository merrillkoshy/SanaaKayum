import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import clientMgr from "../../constants/contentManager";
import {useRouter} from "next/router"
const axios = require("axios").default;

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
    
  })
)

export default async function handler(req, res) {
  
  const orderData=req.body
  clientMgr
  .then(environment => environment.getEntry(req.headers.token))
  .then(entry => {
    if (entry.fields["orderData"] === undefined)
    entry.fields["orderData"] = { "en-US": [orderData] };
    else entry.fields["orderData"]["en-US"].push(orderData);
    return entry.update();
  })
  .then(entry => entry.publish())
  
  // Run cors
  await cors(req, res)

  if (req.method === 'POST') {  
    //   res.writeHead(200, {'Content-Type': 'application/json',
    //   Authorization: process.env.NEXT_PUBLIC_SVK,
    //   Location: process.env.NEXT_PUBLIC_ENDPOINT,
    // })
    
    // console.log(req)
    // res.writeHead(200, {
    //   Location: process.env.NEXT_PUBLIC_ENDPOINT,
    //   'Content-Type': 'application/json',
    //   Authorization: process.env.NEXT_PUBLIC_SVK
    // })
    
    // res.end(JSON.stringify(orderData));  
    
    
    const headers={
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      "Authorization": process.env.NEXT_PUBLIC_SVK,
      'Access-Control-Allow-Origin': "*",
      'Content-Type': "application/json"
    }
   
    axios
      .post(
        process.env.NEXT_PUBLIC_ENDPOINT,
        orderData,
        {
          headers: headers
        }
      )
      .then((response) => {
        
        
        res.send(response.data.redirect_url)
        
        
        
    })
    .catch((error) => {
      console.log(error)
    })

    
  

    
  } else {
    // Handle any other HTTP method

     // var orderData = {
      //   cart_amount: 0,
      //   cart_currency: "",
      //   cart_description: "",
      //   cart_id: "",
      //   customer_details: "",
      //   tran_ref: "",
      //   tran_type: "",
      //   // date: ""
      // };
      // orderData.redirect_url = response.redirect_url;
      // orderData.cart_amount = response.cart_amount;
      // orderData.cart_currency = response.cart_currency;
      // orderData.cart_description = response.cart_description;
      // orderData.cartItems = cartItems;
      // orderData.cart_id = response.cart_id;
      // orderData.customer_details = response.customer_details;
      // orderData.tran_ref = response.tran_ref;
      // orderData.tran_type = response.tran_type;
      // orderData.date = response.headers.date;
  }
}
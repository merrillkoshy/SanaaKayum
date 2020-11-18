import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import clientMgr from "../../constants/contentManager";

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
        
        res.send(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

    
  } else {
    // Handle any other HTTP method

     
  }
}
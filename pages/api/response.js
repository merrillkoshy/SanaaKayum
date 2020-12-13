import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'



const axios = require("axios").default;

// Initialize the cors middleware
const cors = initMiddleware(
  
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)


export default async function handler(req, res) {
  // Run cors
  
     await cors(req, res)
    // Redirect back after setting cookie
    res.statusCode = 302;
      res.writeHead(302, 
      { 
      "Content-Type":"application/json",
      "Location": "/paymentInterface",
      "data": JSON.stringify(req.body)
    });
    res.write(JSON.stringify(req.body))
    
    return res.end();

}

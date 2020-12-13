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
     
     const body= `secret=${req.body.google.secret}&response=${req.body.google.response}`;

     const formDataObj=req.body.formDataObj
     const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded"
      };
      
    axios.post("https://www.google.com/recaptcha/api/siteverify",body,headers).then(response=>{
        if(response.data.success===true){
           
            const headersMail = {
                "Access-Control-Allow-Headers":
                  "Content-Type, Authorization",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
              };
            axios
            .post(process.env.NEXT_PUBLIC_DOMAIN+"/api/contactUs", formDataObj, headersMail)
            .then(resp => {
                res.statusCode = 200;
              res.end()
            }).catch(e=>console.error(e))
          }else{
            console.log(response.data)
            
          }
    })
    
    return res.end();

}

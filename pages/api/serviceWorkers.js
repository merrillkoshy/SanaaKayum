import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
const express = require('express')
const next = require('next')
//INCOMPLETE FUNCTION   ---------       WORK ON IT LATER

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })



// const axios = require("axios").default;

// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST', 'OPTIONS'],
//   })
// )


// export default async function handler(req, res) {
//   // Run cors
  
//      await cors(req, res)
    
//      app.prepare().then(() => {
//         const server = express()
      
//         server.get('/service-worker.js', (req, res) => {
//           app.serveStatic(req, res, './.next/service-worker.js')
//         })
      
//         const serviceWorkers = [
//           {
//             filename: 'service-worker.js',
//             path: './.next/service-worker.js',
//           },
//           {
//             filename: 'firebase-messaging-sw.js',
//             path: './public/firebase-messaging-sw.js',
//           },
//         ]
      
//         serviceWorkers.forEach(({ filename, path }) => {
//           server.get(`/${filename}`, (req, res) => {
//             app.serveStatic(req, res, path)
//           })
//         })
      
//       })

//     res.statusCode = 302;
//       res.writeHead(302, 
//       { 
//       "Content-Type":"application/json",
//       "Location": "/paymentInterface",
//       "data": JSON.stringify(req.body)
//     });
//     res.write(JSON.stringify(req.body))
    
//     return res.end();

// }





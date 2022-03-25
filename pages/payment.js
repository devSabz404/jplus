import axios from "axios";
import querystring from 'query-string'
export default function Payment(){
//const crede = btoa('90GpKbhQY3bSQiUohb37jXR2klK1In7h:HQxwWQs67u1obbLB')

var session_url ='https://api.safaricom.co.ke/oauth/v1/generate';
var username ='ghzv5zWScwRFoeT7l4riWQcH1tAmS20k';
var password ='zjCkNT2A7l5MLrhA';

  



const token = `${username}:${password}`;
const encodedToken = btoa(token)

async function getOAuthToken(req,res){



  let url =session_url;

  //form a buffer of the consumer key and secret
 

  let auth = `Basic ${encodedToken}`

  try{

      let {data} = await axios.get(url,{
          "headers":{
              "Authorization":auth
          }
      });

      req.token = data['access_token'];

      return console.log(req.token)
      

  }catch(err){

      return res.send({
          success:false,
          message:err['response']['statusText']
      });

  }
  
};
getOAuthToken()

// axios.request({

//   method: "get",
//   baseURL:session_url,
//   auth: {
//     username:username,
//     password:password
//   },  withCredentials: false,
//    headers: {

//   'Access-Control-Allow-Origin' : '*',
//   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',},
//   data: {
//     "grant_type": "client_credentials",
//     "scope": "public"    
//   }
// }).then(function(res) {
//   console.log(res);  
// });



// var config = {
//   method: 'get',
//  // *cors, same-origin
//   url: session_url,
//   withCredentials: false,
//   headers: {
//     'Authorization': 'Basic '+ encodedToken ,
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }
 
// };
// let tkn = null
// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response));
//   tkn=response.data.access_token;
//   return tkn;
// })
// .catch(function (error) {
//   console.log(error);
// });

//console.log(tkn)

// axios.get({
//   baseURL:session_url,
//   withCredentials: false,
//   headers: {
//     'Authorization': `Basic ${encodedToken}`,
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     },
//     data: {
//       "grant_type": "client_credentials",
//       "scope": "public"    
//     }
// })
// .then((response) => {
//   console.log(response.data);
//   console.log(response.status);
//   console.log(response.statusText);
//   console.log(response.headers);
//   console.log(response.config);
// });





// axios.get(session_url,{headers: {
//   'Authorization': `Basic ${encodedToken}`,
//   'Access-Control-Allow-Origin' : '*',
//   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//   }} )   
// .then(response => {
//   console.log(response.data);
//   USER_TOKEN = response.data.access_token;
//   console.log('userresponse ' + response.data.access_token); 
// })   
// .catch((error) => {
//   console.log('error ' + error);   
// });

// //
// var unirest = require("unirest");
// var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate");
 
// req.query({
//  "grant_type": "client_credentials"
// });
 
// req.headers({
//  "Authorization": "Basic SWZPREdqdkdYM0FjWkFTcTdSa1RWZ2FTSklNY001RGQ6WUp4ZVcxMTZaV0dGNFIzaA=="
// });
 
// req.end(res => {
//  if (res.error) throw new Error(res.error);
//  console.log(res.body);
// });




    










    return(
        <>
        <h1>Hello</h1>
        </>
    )

}
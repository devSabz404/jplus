import base64 from 'base-64'

export default function Test(){


let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate";
let username = '90GpKbhQY3bSQiUohb37jXR2klK1In7h';
let password = 'HQxwWQs67u1obbLB';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

fetch(url, {method:'GET',
        headers: headers,
        data: JSON.stringify({
          grant_type: 'client_credentials'
        })
      })
.then(response => response.json())
.then(json => console.log(json));
//.done();


return(
  <div>
    <h1>Hello</h1>
  </div>
)
}










// let headers = new Headers();
// headers.append("Content-Type", "application/json");
// headers.append("Authorization", "Bearer qV6oINJCw4shkvaHj6CXHbVWdPxJ");
// ​
// fetch("https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate", {
//   method: 'POST',
//   headers,
//   body: JSON.stringify({
//     "ShortCode": 600981,
//     "CommandID": "CustomerPayBillOnline",
//     "amount": "1",
//     "MSISDN": "254705912645",
//     "BillRefNumber": "WTF69",
//   })
// })
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


  
// {

//   "OriginatorCoversationID": "43066-90899053-1",

//   "ResponseCode": "0",
// "ResponseDescription": "Accept the service request successfully."

// }
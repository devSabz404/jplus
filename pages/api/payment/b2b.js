// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import unirest from "unirest";
export default function handler(req, res) {
  const { tel } = req.body;
  const nom = tel;

  const consumer_key = "uyONyJjzHsajSA6GmcfUfZ9PN0CBLwX2";
  const consumer_secret = "9jEl4JAzkoIsolOr";
  let buffer = new Buffer.from(consumer_key + ":" + consumer_secret);

  const auth = `Basic ${buffer.toString("base64")}`;
  //console.log(auth);

  var unirest = require("unirest");
  var req = unirest("GET", "https://api.safaricom.co.ke/oauth/v1/generate");

  req.query({
    grant_type: "client_credentials",
  });

  req.headers({
    Authorization: auth,
  });

  req.end((res) => {
    if (res.error) throw new Error(res.error);
    console.log(res.body);
    const token = res.body.access_token;
    lipa(token);
  });

  res.status(200).json({ name: "work" });
}


function lipa(tokens,amount,paybill) {
 

  let req = unirest(
    "POST",
    "https://api.safaricom.co.ke/mpesa/b2b/v1/paymentrequest"
  );
req.headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${tokens}`,
  });
  req.send(JSON.stringify({
    
    Initiator:"FREDRICK API",
    SecurityCredential:'dDTkMaUlUkZhX1JPdtmmKuQrDZsYZTnAfFjf7fzFC+ZnnCN9lesI0zLO9GtrN1XcZZwhgIVN1SbWEcVw5OSlDtF4bU9e0XLmxtykc3zguPEL/xP4YJGjLP2iZhYlSvGZTfPkOACnQ5/8lbQFlwNDZGF75uZc/+vSlMVdb3csP6f9XVJunhafAD1SzqMinRWuzm0EcKXQfTH9TDOI/nFhjV3lt+JMseGtZjmDLNyy9ynsBvRGXVrFaziNH6iYMV1OAgV/eN+G/5GZ1E3QCaT77F/G/YJqqdnao1t5g1asv4i0AJxYBhK3E1cglVVT46Gj7D3jayMkqYBwrXwWY6H+Ow==',
    CommandID:'DisburseFundsToBusiness',
    SenderIdentifierType:"4",
	  RecieverIdentifierType:"4",
    Amount:1,
    PartyA:7290377,
    PartyB:545400,
    AccountReference:"BILL PAYMENT",
    Remarks:"vehicleRegistration",
    QueueTimeOutURL:"https://jendieplus/api/payment/callback",
    ResultURL:"https://jendieplus/api/payment/b2bCallback",
    
  }))
  req.end((res) => {
    console.log(res.body);
   
  });
}



function pay(tokens,amount,paybill){

  let unirest = require('unirest');
let req = unirest('POST', 'https://api.safaricom.co.ke/mpesa/b2c/v1/paymentrequest')
.headers({
	'Content-Type': 'application/json',
	'Authorization': `Bearer ${tokens}`
})
.send(JSON.stringify({
    "InitiatorName": "FREDRICK API",
    "SecurityCredential": 'dDTkMaUlUkZhX1JPdtmmKuQrDZsYZTnAfFjf7fzFC+ZnnCN9lesI0zLO9GtrN1XcZZwhgIVN1SbWEcVw5OSlDtF4bU9e0XLmxtykc3zguPEL/xP4YJGjLP2iZhYlSvGZTfPkOACnQ5/8lbQFlwNDZGF75uZc/+vSlMVdb3csP6f9XVJunhafAD1SzqMinRWuzm0EcKXQfTH9TDOI/nFhjV3lt+JMseGtZjmDLNyy9ynsBvRGXVrFaziNH6iYMV1OAgV/eN+G/5GZ1E3QCaT77F/G/YJqqdnao1t5g1asv4i0AJxYBhK3E1cglVVT46Gj7D3jayMkqYBwrXwWY6H+Ow==',
    "CommandID": "BusinessPayment",
    "SenderIdentifierType" : '4',
    "RecieverIdentifierType": '4',
    "Amount": amount,
    "PartyA": 7290377,
    "PartyB": paybill,
    "AccountReference":'BILL PAYMENT',
    "Remarks": "Test remarks",
    "QueueTimeOutURL": "https://699b-62-8-76-213.ngrok.io/api/payment/callback",
    "ResultURL": "https://699b-62-8-76-213.ngrok.io/api/payment/b2bCallback",
  
  }))
  req.end((res) => {
    console.log(res.body);
    
  });

}
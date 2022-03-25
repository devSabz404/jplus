import unirest from 'unirest'
export default function handler(req, res) {

    const consumer_key="ghzv5zWScwRFoeT7l4riWQcH1tAmS20k"
    const consumer_secret="zjCkNT2A7l5MLrhA"
    let buffer = new Buffer.from(consumer_key+":"+consumer_secret);

    const auth = `Basic ${buffer.toString('base64')}`;
    console.log(auth)
    
var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials");
 
req.query({
 "grant_type": "client_credentials"
});
 
req.headers({
 "Authorization":auth,
});
 
req.end(res => {

 console.log(res.body)
//const token =res.body.access_token
//console.log(token)
//lipa(token)


});

function lipa(tokens){
    const timestamp = Date.now();
    const bs_short_code = 7290377
    const passkey ="bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919"
    const amount =""
    const password = new Buffer.from(`${bs_short_code}${passkey}${timestamp}`).toString('base64');

    let req = unirest('POST', 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest');
    req.headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokens}`
    })
    req.send(JSON.stringify({
        "BusinessShortCode":7290377,
        "Password": password,
        "Timestamp": timestamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": 1,
        "PartyA": 254700154709,
        "PartyB": 7290377,
        "PhoneNumber": 254708374149,
        "CallBackURL": "https://5e64-197-232-51-15.ngrok.io/api/payment/callback",
        "AccountReference": "CompanyXLTD",
        "TransactionDesc": "Payment of X" 
      }))
    req.end(res => {
        
        console.log(res.body);
    });
    }
    
    //https://5e64-197-232-51-15.ngrok.io/api/payment/callback

    //https://mydomain.com/path
   




    res.status(200).json({ name:'working'}) 
}
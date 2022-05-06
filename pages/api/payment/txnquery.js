// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import unirest from "unirest";
export default function handler(req, res) {
  const { requestId } = req.body;
  const you = res;
  const nom = requestId;

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
    const tokens = res.body.access_token;
    lipa(tokens, nom, you)
      .then((body) => {
        console.log("success", body);
        you.status(200).json(body);
      })
      .catch((error) => console.log("error", error));
  });

  //res.status(200).json({ name: "work" });
}
let date = new Date(2019, 4, 10, 15, 30, 20); //10 May 2019, 3:30:20 PM
let dateStr = date.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
}); // 10/05/19

let arr = dateStr.split("/"); // [ '10', '05', '19' ]
let d = arr[0]; //e.g. 10
let m = arr[1]; //e.g. 5
let y = date.getFullYear(); //e.g. 19

let timeStr = date.toLocaleTimeString("en-GB", {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}); //
let arr2 = timeStr.split(":"); // 15:30:20
let H = arr2[0]; //e.g. 15
let i = arr2[1]; //e.g. 30
let s = arr2[2]; //e.g. 20

const ymdHms = y + m + d + H + i + s;

function lipa(tokens, reqId,nex) {
  return new Promise((resolve, reject) => {
    let timestamp = ymdHms;
    const bs_short_code = 7290377;
    const passkey =
      "9b6b37ab48221b4ac73fe723635ad430093fb4456ce2ddb62d729632caae1169";
    //const amount =""
    const password = new Buffer.from(
      `${bs_short_code}${passkey}${timestamp}`
    ).toString("base64");

    let req = unirest(
      "POST",
      " https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query"
    );
    req.headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokens}`,
    });
    req.send(
      JSON.stringify({
        BusinessShortCode: 7290377,
        Password: password,
        Timestamp: ymdHms,
        CheckoutRequestID:reqId,
      })
    );
    req.end((res) => {
      if (res.err) {
        return reject(res.error);
      }
      return resolve(res.body);
    });
  });
}

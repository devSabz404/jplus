// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  XMLHttpRequest from 'xhr2';
export default function handler(req, res) {



function CallWebAPI() {
  var request_ = new XMLHttpRequest();        
  //var encodedParams = encodeURIComponent(params);
  request_.open("GET","https://sandbox.safaricom.co.ke/oauth/v1/generate", true);
  request_.setRequestHeader("Authorization","Basic OTBHcEtiaFFZM2JTUWlVb2hiMzdqWFIya2xLMUluN2g6SFF4d1dRczY3dTFvYmJMQg==");
  request_.send();
  request_.onreadystatechange = function () {
      if (request_.readyState == 4 && request_.status == 200) {
          var response = request_.responseText;
          var obj = JSON.parse(response); 
          console.log(obj)
         

      }
  }
} 
CallWebAPI()
res.status(200).json({ name:'work'}) 



 
}

 


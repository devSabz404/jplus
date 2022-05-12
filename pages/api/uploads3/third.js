
import AWS from 'aws-sdk'
import  { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'

export default async function handler(req, res) {

  const user = getCookie('clientID', { req, res });
  console.log(user)
  


  const s3Client = new AWS.S3({
  
    region:"us-east-1",
    
    
    credentials:{
        accessKeyId:"AKIAXAME7IUIIN7FUXVV",
        secretAccessKey:"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"
    }
})



  const img = req.query.file
  console.log(img);
  const url = `https://jendieplus.s3.amazonaws.com/${user}-${img}`
  

  setCookies('s3-url3',url, { req, res, maxAge: 60 * 20*1 });
  console.log('yes',getCookie('s3-url3', { req, res }));

  


  const post = await s3Client.createPresignedPost({
    
    Bucket: 'jendieplus',
    Fields: {
      key: `${user}-${req.query.file}`,
    },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 1048576], // up to 1 MB
    ],
  });

 
   

 


  res.status(200).json(post);
}


import pdf from'html-pdf';
import nodemailer  from "nodemailer";
import  { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'
import excuteQuery from '../../lib/db';
import fs from "fs"


export default async function handler(req, res) {


  const {clientIdentity,fullname,productDetail,underwriterEmail,company,physicaladdress,phonenumber,emailaddress,logbook,amount,writerName}= req.body
console.log(underwriterEmail)
   const registration = logbook.Registration
   const make = logbook.Make
   const model = logbook.Model
   const color = logbook.Color
   const engine = logbook.EngineNumber
   const chasis = logbook.Chasis
   const seats = logbook.Passengers
   const cc = logbook.CCRating
   const year = logbook.Manufactured
  //const  value

  const companyName = company
  const address = physicaladdress
  const phone = phonenumber
  const email = emailaddress

  const cover = productDetail[0].coverage
  const under = productDetail[0].underwriter
  

  const insranceClass = cover

  const urls = await excuteQuery({
    query:"SELECT * FROM `itbl_userfile` WHERE `clientId`=?",
    values:[clientIdentity]
  });
  let userUrls = JSON.parse(JSON.stringify(urls));

  
  const writerEmail = await excuteQuery({
    query:"SELECT * FROM `itbl_underwriters` WHERE `Name`=?",
    values:[under]
  });
  let underEmail = JSON.parse(JSON.stringify(writerEmail));

  



  
const html = `


<html>
    <head>
        <title>Risk Note</title>
       
    </head>
    <style>
    .container{
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
      }
      
      .header{
        display: flex;
       
        justify-content: space-between;
        border-bottom: 2px solid black;
        padding: auto;
        
      }
      .address{
        display: flex;
        flex-flow: row wrap;
      }
      .policy{
        display: flex;
        flex-direction: column;
        padding: auto;
        
      
      }
      .heading{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: auto;
      }
      .key{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid black;
      
      }
      .tableh {
        border:1px solid black;
        border-collapse: collapse;
        
      }
      .logbook{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:10px;
        border-bottom: 2px solid black;
        
      }
      .liability{
        border-bottom: 2px solid black;
      }
      .finalnote{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
    <body>
    <div class="container">
        <div class="header">
            <div class="logo">
                <img src="../../public/logo/logo.png" alt="logo" width="100px" height="100px"/>
            </div>

            <div class="address">
                <p>
                ${companyName}<br>
                ${address}<br>
                Phone: ${phone}<br>
                Email: ${email}<br>
                </p>
            </div>
            


        </div>
        <hr>
        <div class="policy">
            <div class="heading">
                <h3>RISK NOTE #1836177104 NEW BUSINESS</h3>
            </div>
            <div class="key">
                <table style="width:70%">
                   
                    <tr>
                        <td>Policy Number</td>
                        <td>001</td>
                    
                      </tr>
                      <tr>
                        <td>Class of Insurance</td>
                        <td>${insranceClass}</td>
                        
                      </tr>
                      <tr>
                        <td>Underwriting Company</td>
                        <td>${writerName}</td>
                      
                      </tr>
                      <tr>
                        <td>Name of insured</td>
                        <td>${fullname}</td>
                      
                      </tr>

                      <tr>
                        <td>Scheme</td>
                        <td>${companyName}</td>
                      
                      </tr>

                      <tr>
                        <td>PIN No</td>
                        <td>${logbook.KraPin}</td>
                      
                      </tr>
                      
                      <tr>
                        <td>ID No</td>
                        <td>${logbook.IdNumber}</td>
                      
                      </tr>
                      
                      <tr>
                        <td>Period of Insurance</td>
                        <td>${logbook.DatePolicy}</td>
                      
                      </tr>
                      
                      <tr>
                        <td>Note: Terms and Conditions as per policy</td>
                      
                      
                      </tr>


                </table>
            

            </div>
            <div class="logbook">
                <table style="width:80%; border-collapse: collapse;">
                    <tr>
                        <th class="tableh">SI no</th>
                        <th class="tableh">Reg.no</th>
                        <th class="tableh">Make/Model</th>
                        <th class="tableh">Color</th>
                        <th class="tableh">Engine No</th>
                        <th class="tableh">Chasis No</th>
                        <th class="tableh">Seats</th>
                        <th class="tableh">CC</th>
                        <th class="tableh">Mfg. Yr</th>
                        <th class="tableh">Value</th>
                    </tr>

                    <tr>
                        <td class="tableh">1</td>
                        <td class="tableh">${registration}</td>
                        <td class="tableh">${make}/${model}</td>
                        <td class="tableh">${color}</td>
                        <td class="tableh">${engine}</td>
                        <td class="tableh">${chasis}</td>
                        <td class="tableh">${seats}</td>
                        <td class="tableh">${cc}</td>
                        <td class="tableh">${year}</td>
                        <td class="tableh">${''}</td>
                    </tr>
                </table>

            </div>

            <div class="key">
              <table style="width:70%">
                 
                    <tr>
                      <td>Premium</td>
                      <td>KES 100.00</td>
                  
                    </tr>
                    <tr>
                      <td>PCF (0.25%)</td>
                      <td>KES 11.25</td>
                      
                    </tr>
                    <tr>
                      <td>I.T.L (0.2%)</td>
                      <td>KES 9.00</td>
                    
                    </tr>
                    <tr>
                      <td>Stamp duty</td>
                      <td>KES 40.00</td>
                    
                    </tr>

                    <tr>
                      <td><h4>Total</h4></td>
                      <td>KES ${amount}</td>
                    
                    </tr>

                    


              </table>
          

          </div>
          <div class="liability">
            <table>
              <tr>
                <th><h3>Limits of Liability:</h3></th>
              </tr>
              <tr>
                <td>
                ${`Section II-1 (a) Liability to third parties-Death or Bodily Injury:
                A. In respect of persons being carried in or upon or entering or getting onto or alighting from the Vehicle
                (I) Death or Bodily Injury to any one person……………………………………………. 3,000,000<br>
                (II) Series of claims arising out of one event……………………………………………… 20,000,000
                B. In respect of other persons:<br>
                (I) Death or Bodily Injury to any one person………………………………………………. 3,000,000
                (II) Series of claims arising out of one event…………………………………………………. unlimited<br>
                
                Section II-1 (b) (liability to third parties-property damage) :
                In respect of any one claim or a series of claims arising out of one event……………………… 5,000,000
              `}
                </td>
              </tr>
           
            </table>
          

          </div>
          <h3>Insurance is cash and carry</h3>
          <div class="finalnote">
        
            <table style="width:70%">
                 
              <tr>
                <td><h4>Payment option:</h4> </td>
                <td>PayBill 7290377</td>
            
              </tr>
              <tr>
                <td><h4>Iplus Insurance Agency Limited</h4></td>
                
                
              </tr>
              <tr>
                <td><h4>Date: </h4></td>
                <td>${new Date().toJSON().slice(0,10)}</td>
              
              </tr>
              <tr>
                <td><h4>Prepared by Kennedy Nyaga</h4></td>
               
              
              </tr>

              <tr>
                <td><h4>Signature:</h4></td>
                <td><img src="sign.png" alt="Signature"/></td>
              
              </tr>

              


        </table>

            
            <h4></h4>
            
          

            <div class="prepared">
            
              
            </div>

          </div>

        </div>

    </div>

    </body>
</html>




`










const options = {
  format: 'A4'
}

pdf.create(html, options).toFile('./risknote.pdf', (err, res) => {
  if (err) {
    console.log(err);
  }
});
const logbookUrl = userUrls[0].logbook;
const idUrl = userUrls[0].id_passport;
const kraUrl = userUrls[0].kra;
const theEmail = underEmail[0].EMAIL_ADDRESS

console.log(theEmail)

function getRid(){
 
setTimeout(()=>{
  const pathToFile = "risknote.pdf"
  fs.unlink(pathToFile, function(err) {
    if (err) {
      throw err
    } else {
      console.log("Successfully deleted the file.")
    }
  })
  
},2000)
  
}




// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
   
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host:"mail.jendieplus.co.ke",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user:"underwriting@jendieplus.co.ke", // generated ethereal user
        pass: "8^znOPgtC&41", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Jendieplus" <underwriting@jendieplus.co.ke>', // sender address
      to:" 'underwriting@jendieplus.co.ke','knyaga@iplus.co.ke','info@iplus.co.ke' ", // list of receivers
      subject: "Risk Note ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<p>Download : <a href=${kraUrl}>KRAPIN</a></p><br>
             <p>Download:  <a href=${idUrl}>ID</a></p><br>
             <p>Download:  <a href=${logbookUrl}>Logbook</a></p><br>`, // html body
      attachments: [
       
      
      {   // file on disk as an attachment
        filename:'risknote.pdf',
        path: 'risknote.pdf'// stream this file
    },
      
      
      
    ],
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
    
  

  main()
  .then(()=>getRid())
  .catch(console.error)


 



res.status(200).json({ name:'work'}) 
}

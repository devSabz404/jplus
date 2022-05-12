import { IncomingForm } from 'formidable'
import excuteQuery from '../../lib/db'
import fs from 'fs'
import axios from 'axios';
import AWS from 'aws-sdk'
import PDFMerger from 'pdf-merger-js'


var mv = require('mv');


export const config = {
    api: {
       bodyParser: false,
    }
};
 


const handler = async (req, res) => {
   
    
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
       
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
           // console.log(fields, files)

            
            const kra_pin = fields.krapin
            const datepolicy = fields.datepolicy
            const previousreg =  fields.previousreg
            const previouscountry = fields.previouscountry
            const loadcapacity = fields.loadcapacity
            const axels = fields.axels
            const taxclass = fields.taxclass
            const tareweight = fields.tareweight
            const passengers = fields.passengers
            const previousowners = fields.previousowners
            const duty = fields.duty
            const grossweight = fields.grossweight
            const registrationDate = fields.registrationDate
            const color = fields.color
            const enginenumber = fields.enginenumber
            const rating = fields.ccrating
            const man_year = fields.manufactured
            const fuel = fields.fuel
            const body = fields.body
            const type = fields.type
            const model= fields.model
            const make = fields.make
            const chasis = fields.chasis
            const vehicle_reg = fields.registration
            const clientId = fields.clientId
            const Idnumb = fields.IdNumber
            const client_name =fields.client_name
            const email = fields.email
            const phone_number = fields.phone
            const vehicleclass =fields.vehicleclass
            const covertext =fields.covertext
            const referal_code =fields.referall
            const coverperiod =fields.coverperiod
            const product_id =fields.productId
            const underwriterz = fields.underwriter
            const basicpremium=fields.basicpremium
            const grosspremium=fields.grosspremium
            const sum_insured=fields.suminsured

            // const underwriter = excuteQuery({
            //     query:'SELECT * FROM `itbl_underwriters` WHERE Name = ?',
            //     values:[underwriterz]
            // })
           
        

            // var oldPathP = files.pass.filepath;
            // var oldPathL = files.logbook.filepath;
            // var oldPathK = files.kra.filepath;
            // var newPathId = `./public/uploads/${clientId}-${files.pass.originalFilename}`;
            // var newPathLogbook = `./public/uploads/${clientId}-${files.logbook.originalFilename}`;
            // var newPathKra = `./public/uploads/${clientId}-${files.kra.originalFilename}`;
            // mv(oldPathP, newPathId, function(err) {
            // });
            // mv(oldPathL, newPathLogbook, function(err) {
            // });
            // mv(oldPathK, newPathKra, function(err) {
            // });

            const s3Client = new AWS.S3({
  
                region:"us-east-1",
                
                
                credentials:{
                    accessKeyId:"AKIAXAME7IUIIN7FUXVV",
                    secretAccessKey:"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"
                }
            })
              // const post = await s3Client.createPresignedPost({
              //   Bucket: 'jendieplus',
              //   Fields: {
              //     key: req.query.file[0],
              //   },
              //   Expires: 60, // seconds
              //   Conditions: [
              //     ['content-length-range', 0, 1048576], // up to 1 MB
              //   ],
              // });

              var params = {
                Bucket: "jendieplus", 
                Key: "largeobject"
               };
               s3Client.createMultipartUpload(params, function(err, data) {
                 if (err) console.log(err, err.stack); // an error occurred
                 else     console.log(data);           // successful response
                 /*
                 data = {
                  Bucket: "examplebucket", 
                  Key: "largeobject", 
                  UploadId: "ibZBv_75gd9r8lH_gqXatLdxMVpAlj6ZQjEs.OwyF3953YdwbcQnMA2BLGn8Lx12fQNICtMw5KyteFeHw.Sjng--"
                 }
                 */
               });
       

             
          
             
                
           
         
            

            // (async () => {
            //     const results = await excuteQuery({
            //         query:'INSERT INTO `itbl_userfile` (clientId,logbook,id_passport,kra,krapin,registration,chasis,model,tyoe,body,fuel,manufacturedYear,ccrating,engineNumber,color,registrationDate,grossWeight,duty,nOfPreviousOwners,passengers,tareWeight,taxClass,axels,loadCapacity,previousRegCountry,previousReg,datePolicy,make) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            //         values:[clientId,newPathLogbook,newPathId,newPathKra,kra_pin,vehicle_reg,chasis,model,type,body,fuel,man_year,rating,enginenumber,color,registrationDate,grossweight,duty,previousowners,passengers,tareweight,taxclass,axels,loadcapacity,previouscountry,previousreg,datepolicy,make]
            //     })
            //     if(!results) {return res.status(400).json({msg: "Something is wrong"})}
            //     //console.log('wee',results)
            //     res.status(200).json({ message: "Success!" });
            
            // })().catch(err => {
            //     console.error(err);
            // });

           

           

    

          
        })
      
    })

    res.status(200).json({ name:'work'}) 

   
 
    
}

export default handler
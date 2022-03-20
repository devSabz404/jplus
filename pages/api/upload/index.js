import { IncomingForm } from 'formidable'
import excuteQuery from '../../../lib/db'
import fs from 'fs'


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
            console.log(fields, files)

            
            const krapin = fields.krapin
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
            const ccrating = fields.ccrating
            const manufactured = fields.manufactured
            const fuel = fields.fuel
            const body = fields.body
            const type = fields.type
            const model= fields.model
            const make = fields.make
            const chasis = fields.chasis
            const registration = fields.registration
            const clientId = fields.clientId
            // console.log(files.pass.filepath)

            // const KraPin = fields.krapin;
            // const Datepolicy = fields.datepolicy;

           

            var oldPathP = files.pass.filepath;
            var oldPathL = files.logbook.filepath;
            var oldPathK = files.kra.filepath;
            var newPathP = `./public/uploads/${files.pass.originalFilename}`;
            var newPathL = `./public/uploads/${files.logbook.originalFilename}`;
            var newPathK = `./public/uploads/${files.kra.originalFilename}`;
            mv(oldPathP, newPathP, function(err) {
            });
            mv(oldPathL, newPathL, function(err) {
            });
            mv(oldPathK, newPathK, function(err) {
            });

            (async () => {
                const results = await excuteQuery({
                    query:'INSERT INTO `itbl_userfile` (clientId,logbook,id_passport,kra,krapin,registration,chasis,model,tyoe,body,fuel,manufacturedYear,ccrating,engineNumber,color,registrationDate,grossWeight,duty,nOfPreviousOwners,passengers,tareWeight,taxClass,axels,loadCapacity,previousRegCountry,previousReg,datePolicy,make) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                    values:[clientId,newPathL,newPathP,newPathK,krapin,registration,chasis,model,type,body,fuel,manufactured,ccrating,enginenumber,color,registrationDate,grossweight,duty,previousowners,passengers,tareweight,taxclass,axels,loadcapacity,previouscountry,previousreg,datepolicy,make]
                })
                if(!results) {return res.status(400).json({msg: "Something is wrong"})}
                console.log(results)
                res.status(200).json({ message: "Success!" });
            
            })().catch(err => {
                console.error(err);
            });

           

           

    

          
        })
      
    })

    const results = await excuteQuery({
        query:'INSERT INTO `tbl_userfile` (clientId,logbook,id_passport,kra) VALUES (?,?,?,?)',
        values:[krapin,newPathL,]
    })
    if(!results) {return res.status(400).json({msg: "Something is wrong"})}
    console.log(results)
    res.status(200).json({ message: "Success!" });
 
    
}

export default handler
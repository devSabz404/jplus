import excuteQuery from "../../lib/db";

export default async function handler(req, res) {

    let{myName,myEmail,phoneNumber,yom,registration,referall,vclass,cover,coverPeriod,sumInsured,passengers,tonnage} =req.body;
   // let getQuote = null
    // if(!tonnage || !passengers){

    //      getQuote =  await excuteQuery({
    //         // query:"SELECT * FROM itbl_product   ",
        
    //             query:"SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =?  ",
    //             values:[referall,cover,vclass]
    //         })
        
    // }else if(tonnage){
    //      getQuote =  await excuteQuery({
    //         // query:"SELECT * FROM itbl_product   ",
        
    //             query:"SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =? AND `maxtonnage`=? ",
    //             values:[referall,cover,vclass,tonnage]
    //         })
        let getQuote=null;
        if(!passengers && !tonnage){

            getQuote =  await excuteQuery({
                   
                    
                            query:"SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =?  ",
                            values:[referall,cover,vclass]
                        })


        }else if(passengers){

            getQuote =  await excuteQuery({
                // query:"SELECT * FROM itbl_product   ",
            
                    query:"SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =? AND `passengers`=? ",
                    values:[referall,cover,vclass,passengers]
                })

        }else{

          getQuote =  await excuteQuery({
            // query:"SELECT * FROM itbl_product   ",
        
                query:"SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =? AND `maxtonnage`=? ",
                values:[referall,cover,vclass,tonnage]
            })


        }

        
        
    
    
    res.status(200).json({  otherdata:getQuote })
  }
  
import excuteQuery from "../../lib/db";

export default async function handler(req, res) {

    let{myName,myEmail,phoneNumber,registration,referall,vclass,cover,coverPeriod,sumInsured,passengers,tonnage} =req.body;

    const getQuote =  await excuteQuery({
    // query:"SELECT * FROM itbl_product   ",

        query:"SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =? OR `passengers`=? OR maxtonnage=? ",
        values:[referall,cover,vclass,passengers,tonnage]
    })



    // let basicPremium = null;
    // coverPeriod = '1 Week'
    // for(let i = 0 ;i<getQuote.length;i++){
    //     // if(getQuote[i].coverage ==='Third Party Only'){
    //     //     if(coverPeriod === '1 Week'){
    //     //         basicPremium = 1000

    //     //     console.log('week', getQuote[i].weeklyrates)}}

    
             
                    

     
     

    // if(getQuote[i].coverage ==='Third Party Only'){
    //     if(coverPeriod === '1 week'){
    //         basicPremium = getQuote[i].weeklyrates;
    //     }else if(coverPeriod === '2 weeks'){

    //         basicPremium = getQuote[i].fortnightrates;

    //     }else if(coverPeriod === '1 month'){
    //         basicPremium = getQuote[i].monthlyrates;
    //     }else if(coverPeriod === '1 year'){

    //         basicPremium = getQuote[i].annualrates;

    //     }else {
    //         basicPremium = getQuote[i].annualrates;
    //     }

    // }else{
    //     basicPremium = parseInt(getQuote[i].comp_rate)*sumInsured*0.01;
    //     if(basicPremium< parseInt(getQuote[i].minimumpremium)){
    //         basicPremium = parseInt(getQuote[i].minimumpremium);
    //     }


    // }

    // }


    // const stampDuty = 40;
    // const policyHolderCompensationFund = (0.25/100)*basicPremium;
    // const trainingLevy =(0.2/100)*basicPremium;
    // let grossPremium = basicPremium+stampDuty+trainingLevy+policyHolderCompensationFund;
    // let grossPremiums =Math.round(parseInt(grossPremium))
   
    
        
    



    res.status(200).json({  otherdata:getQuote })
  }
  
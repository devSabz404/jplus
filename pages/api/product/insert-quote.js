import excuteQuery from '../../../lib/db'

const handler = async (req, res) => {
const {
    clientid,clientName,clientEmail,clientphone,registration,
    vClass,coverPeriod,productId,optionalBenefits,underwriter,grossPremiums,
    Insured,Referrall,quoteStatus,coverAge } = req.body
  try {
   

    const results = await excuteQuery({   

    query:'INSERT INTO itbl_quote (`unique`,`cname`,`phone`,`email`,`vehicle_reg`,`vehicle_class`,`product_id`,`coverage`,`cperiod`,`optional_benefits`,`underwriter_id`,`sum_insured`,`premium`,`agent`,`qstatus`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      
      

      values:[clientid,clientName,clientphone,clientEmail,registration,vClass,productId,coverAge,coverPeriod,optionalBenefits,underwriter,Insured,grossPremiums,Referrall,quoteStatus]
     
    })
    console.log('hey how',results)
    return res.json(results)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

export default handler
import excuteQuery from '../../../lib/db'

const handler = async (req, res) => {
 const  {product,productCode,category,
  vehicleClass,underwriter,coverage,
  description,clauses,waranty,
  benefits,
  excludedVehicles,maxTonnage,
  minTonnage,weeklyRates,monthlyRates,
  fortniteRate,passengers,annualRates,
  maxAge,minAge,maxInsured,
  minInsured,minPremium,optionalPremium,
  optionalRate,optionalName,
  owner,months2,
  months3,months4,
  months5,months6,months7,
  months8,months9,months10,months11} =req.body
  try {
   

    const results = await excuteQuery({
      
     
    })
    console.log(results)
    return res.json(results)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

export default handler
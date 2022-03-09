import excuteQuery from '../../../lib/db'

const handler = async (req, res) => {
 const  {productCode,
  vehicleClass,underwriter,coverage,
  description,clauses,waranty,
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

    query:'INSERT INTO itbl_product (product_code,vehicleclass,underwriter,coverage,clauses,conditionsandwaranties,optionalname,optionalpremium,optionalrate,mintonnage,maxtonnage,weeklyrates,fortnightrates,monthlyrates,months2,months3,months4,months5,months6,months7,months8,months9,months10,months11,annualrates,excludedvehicles,minimumpremium,passengers,maxage,minage,maxsum,minsum,owner) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)' ,
      
      

      values:[productCode,vehicleClass,underwriter
             ,coverage,clauses,waranty,optionalName
             ,optionalPremium,optionalRate,minTonnage,maxTonnage,
              weeklyRates,fortniteRate,monthlyRates,months2,months3,
              months4,months5,months6,months7,months8,months9,months10,
              months11,annualRates,excludedVehicles,minPremium,
              passengers,maxAge,minAge,maxInsured,minInsured,owner]
     
    })
    console.log('hey how',results)
    return res.json(results)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

export default handler
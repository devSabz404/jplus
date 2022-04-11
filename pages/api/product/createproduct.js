import excuteQuery from '../../../lib/db'

const handler = async (req, res) => {
 const  {
  vehicleClass,underwriter,coverage,clauses,waranty,
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
  const uniqueidentifier =underwriter+'|'+vehicleClass+'|'+coverage+'|'+owner;
  try {
   

    const results = await excuteQuery({   

    query:'INSERT INTO itbl_product (vehicleclass,underwriter,coverage,clauses,conditionsandwaranties,optionalD,optionalpremium,optionalrate,mintonnage,maxtonnage,weeklyrates,fortnightrates,monthlyrates,months2,months3,months4,months5,months6,months7,months8,months9,months10,months11,annualrates,excludedvehicles,minimumpremium,passengers,maxage,minage,maxsum,minsum,owner,uniqueidentifier) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)' ,
      
      

      values:[vehicleClass,underwriter
             ,coverage,clauses,waranty,optionalName
             ,optionalPremium,optionalRate,minTonnage,maxTonnage,
              weeklyRates,fortniteRate,monthlyRates,months2,months3,
              months4,months5,months6,months7,months8,months9,months10,
              months11,annualRates,excludedVehicles,minPremium,
              passengers,maxAge,minAge,maxInsured,minInsured,owner,uniqueidentifier]
     
    })
  
    res.status(200).send('Success')
 
      
    
    
    
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.send('Duplicate')
  }
    console.log(err)
    res.status(500).json({ message: err })
  }
}

export default handler
import excuteQuery from '../../lib/db'

const handler = async (req, res) => {
  const { product,productCode,category,vehicleClass,underwriter,coverage,description,clauses,waranty,benefits,
    excludedVehicles,maxTonnage,minTonnage,weeklyRates,monthlyRates,fortniteRate,passengers,annualRates,
    minExcluded,maxAge,minAge,maxInsured,minInsured,minPremium,optionalPremium,optionalName,optionalRate,owner } = req.body
  try {
    if (!product||!productCode||!category||!vehicleClass||!underwriter||!coverage||!description||!clauses||!waranty||!benefits
      ||!excludedVehicles||!maxTonnage||!minTonnage||!weeklyRates||!monthlyRates||!fortniteRate||!passengers||!annualRates||!||
      !minExcluded||!maxAge||!minAge||!maxInsured||!minInsured||!minPremium||!optionalPremium||!optionalName||!optionalRate||!owner ) {
      return res
        .status(400)
        .json({ message: '`title` and `content` are both required' })
    }

    const results = await excuteQuery({
      
      query: 'INSERT INTO `itbl_product` (product_code,category, vehicleclass,underwriter,coverage,description,clauses,conditionsandwaranties,optionalname,optionalpremium,optionalrate,policylimits,maxtonnage,weeklyrates,fortnightrates,monthlyrates,annualrates,excludedvehicles,minimumpremium,passengers,maxage,minage,maxsum,minsum,owner) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)' ,
      values:  [productCode,category,vehicleClass,underwriter,coverage,description,clauses,waranty,benefits,optionalName,optionalPremium,optionalRate,benefits,
        maxTonnage,weeklyRates,fortniteRate,monthlyRates,annualRates,excludedVehicles,minPremium,passengers,maxAge,minAge,maxInsured,minExcluded,owner]
     
    })
    console.log(results)
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
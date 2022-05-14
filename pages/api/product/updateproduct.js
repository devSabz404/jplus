import excuteQuery from '../../../lib/db'

const handler = async (req, res) => {
    const {freelimit,optprem,optionalrate,benefitName,id,description,clauses,conditions,benefits,maxtonn,mintonn,pass,rates,excluded,minPremium,maxage,minage,maxinsured,minInsured} = req.body

    let result = await excuteQuery({
      query:"SELECT `benefit_name` FROM `itbl_benefits` WHERE `benefit_id`=?",
      values:[benefitName]
    });
    const bennie = JSON.parse(JSON.stringify(result));

    const bennies=bennie[0].benefit_name

  try {
   

    const results = await excuteQuery({   

    query:`UPDATE itbl_product SET description=? ,clauses=?,conditionsandwaranties =?,optionalname=?,
    optionalpremium=?,optionalrate=?,freelimit=?,mintonnage=?,maxtonnage=?,annualrates=?,excludedvehicles=?,
    minimumpremium=?,passengers=?,maxage=?,minage=?,maxsum=?,minsum=?,benefit_id=? WHERE product_id=?` ,
      
      

      values:[description,clauses,conditions,bennies,optprem,optionalrate,freelimit,
             mintonn,maxtonn,rates,excluded,minPremium,pass,maxage,minage,maxinsured,minInsured,benefitName,id ]
           
     
    })
    console.log('hey how',results)
    return res.json(results)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

export default handler
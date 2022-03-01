import excuteQuery from '../../../lib/db'

const handler = async (req, res) => {
    const {id,description,clauses,conditions,benefits,maxtonn,mintonn,pass,rates,excluded,minPremium,maxage,minage,maxinsured,minInsured} = req.body

  try {
   

    const results = await excuteQuery({   

    query:'UPDATE itbl_product SET description=? ,clauses=?,conditionsandwaranties =?,optionalname=?,mintonnage=?,maxtonnage=?,annualrates=?,excludedvehicles=?,minimumpremium=?,passengers=?,maxage=?,minage=?,maxsum=?,minsum=? WHERE product_id=?' ,
      
      

      values:[description,clauses,conditions,benefits
             ,mintonn,maxtonn,rates,excluded,minPremium,pass,maxage,minage,maxinsured,minInsured,id]
           
     
    })
    console.log('hey how',results)
    return res.json(results)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

export default handler
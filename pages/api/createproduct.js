import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import excuteQuery from '../../lib/db'

// const filter = new Filter()

const handler = async (req, res) => {
  const { product, vehicleClass,underwriter,coverage,description,clauses,waranty,maxTonnage } = req.body
  try {
    if (!product || !vehicleClass||!underwriter||!coverage||!description||!clauses||!waranty||!maxTonnage) {
      return res
        .status(400)
        .json({ message: '`title` and `content` are both required' })
    }

    const results = await excuteQuery({
      
      query: 'INSERT INTO `itbl_product` (product_code, vehicleclass,underwriter,coverage,description,clauses,conditionsandwaranties,maxtonnage) VALUES (?,?,?,?,?,?,?,?)' ,
      values:  [product,vehicleClass,underwriter,coverage,description,clauses,waranty,maxTonnage]
     
    })
    console.log(results)
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
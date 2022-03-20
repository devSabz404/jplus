// export default function handler(req, res) {
//     const {info}= req.body
//     res.status(200).json({ name:info })
//   }
  

import excuteQuery from "../../../lib/db";

const handler = async (req, res) => {

    const {info} = req.body
  try {
    const results = await excuteQuery({
        query:'DELETE FROM itbl_product WHERE `product_id` = ?',
        values:[info]
        

    });
  
    
    return res.json({data:info});
  } catch (e) {
    res.status(500).json({ message: info });
  }
};



export default handler ;
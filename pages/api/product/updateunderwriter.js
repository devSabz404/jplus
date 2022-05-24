import excuteQuery from '../../../lib/db'

const handler = async (req, res) => {
    const  {ID,email,name,desc,memberid,path,paybill,paymode} = req.body

  try {
   

    const results = await excuteQuery({   

    query:`UPDATE itbl_underwriters SET Name=?,path=?,EMAIL_ADDRESS=?,description=?,paybill=?,
    paymode=?,imember_id=? WHERE ID=?` ,
      
      

      values:[name,path,email,desc,paybill,paymode,memberid,ID ]
           
     
    })
   
     res.status(200).json(results)
  } catch (e) {
 
    res.status(500).json({ message: e })
  }
}

export default handler
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "../../../lib/db"
export default function handler(req, res) {

    const {refer} = req.body
    try {

        const referee = await excuteQuery({
            query:'SELECT * FROM tbl_user WHERE `agent_admin` =?',
            values :[refer]
        })
       
        let user = JSON.parse(JSON.stringify(referee))
        console.log(user)
        res.status(200).json(user)
    
        
    } catch (error) {
        console.log(error)
        res.json({msg:error});
    }

 
    res.status(200).json({ name: activate })
  }
  

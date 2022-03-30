import excuteQuery from '../../../lib/db';
import bcrypt from "bcrypt";

const handler = async (req, res) => {
 const {firstname,lastname,email,password,confirm} = req.body
if(password !== confirm) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    
  try {
    

    const results = await excuteQuery({
      
      query: 'INSERT INTO `tbl_user` (firstname,lastname,emailaddress,password) VALUES (?,?,?,?)' ,
      values:  [firstname,lastname,email,hashPassword]
     
    })
    console.log(results)
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
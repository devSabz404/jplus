import excuteQuery from '../../../lib/db';
import bcrypt from "bcrypt";

const handler = async (req, res) => {
 const {firstnames,lastnames,email,passwords,passwordConfirm} = req.body
if(passwords !== passwordConfirm) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(passwords, salt);
  try {
    

    const results = await excuteQuery({
      
      query: 'INSERT INTO `tbl_user` (firstname,lastname,email_fk,password) VALUES (?,?,?,?,)' ,
      values:  [firstnames,lastnames,email,hashPassword]
     
    })
    console.log(results)
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
import excuteQuery from '../../../lib/db';
import bcrypt from "bcrypt";

const handler = async (req, res) => {
 const {firstnames,lastnames,email,companyName,physicaladdress,phonenumber,krapin,idNumber,iraLicense,referall,passwords,passwordConfirm} = req.body
if(passwords !== passwordConfirm) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(passwords, salt);
  try {
    

    const results = await excuteQuery({
      
      query: 'INSERT INTO `tbl_user` (firstname,lastname,email_fk,physicaladdress,companyname,phonenumber,krapin,idnumber,iralicense,password) VALUES (?,?,?,?,?,?,?,?,?,?)' ,
      values:  [firstnames,lastnames,email,physicaladdress,companyName,phonenumber,krapin,idNumber,iraLicense,referall,hashPassword]
     
    })
    console.log(results)
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
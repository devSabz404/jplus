import excuteQuery from '../../../lib/db';


const handler = async (req, res) => {
 const {firstnames,lastnames,email,companyName,physicaladdress,phonenumber,krapin,idNumber,iraLicense,referall} = req.body

  try {
    

    const results = await excuteQuery({
      
      query: 'INSERT INTO `tbl_user` (firstname,lastname,emailadress,physicaladdress,companyname,phonenumber,krapin,idnumber,iralicense,contactperson) VALUES (?,?,?,?,?,?,?,?,?,?)' ,
      values:  [firstnames,lastnames,email,physicaladdress,companyName,phonenumber,krapin,idNumber,iraLicense,referall]
     
    })
    console.log(results)
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
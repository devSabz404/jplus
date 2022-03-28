import excuteQuery from "../../../lib/db";

const handler = async (req, res) => {
  const {companyName,address,phone,withHyph,Kra,idnumber,referall,identity} = req.body;
  let role = null 

  try {
     
     const results = await excuteQuery({
      query:
        "UPDATE  `tbl_user` SET physicaladdress=?,companyname=?,phonenumber=?,contactperson=?,krapin=?,idnumber=?,role=?,agent=? WHERE user_id=?",
      values: [
        address,
        companyName,
        phone,
        referall,
        Kra,
        idnumber,
       
        role='agent',
       
        withHyph,
        identity,
       
      ],
    });
    console.log(results);
    return res.json(results);
   

    
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
};

export default handler;

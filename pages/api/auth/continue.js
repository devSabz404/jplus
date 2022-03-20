import excuteQuery from "../../../lib/db";

const handler = async (req, res) => {

    const {companyName,address,phone,referall,Ira,Kra,idnumber,id} =req.body;
    if(Ira){

        const agentCode = Ira.match(/[0-9]{5}/)

        const results = await excuteQuery({
            query:'UPDATE  `user` SET physicaladdress=?,companyname=?,phonenumber=?,krapin=?,idnumber=?,iralicense=?,agent_admin=? WHERE user_id=?',
            values:[address,companyName,phone,Kra,idnumber,Ira,agentCode,id]
        })
        if(!results) {return res.status(400).json({msg: "Something is wrong"})}
        console.log(results)
        res.status(200).json({ message: "Success!" });
    }else{

        const results = await excuteQuery({
            query:'UPDATE  `user` SET physicaladdress=?,companyname=?,phonenumber=?,krapin=?,idnumber=?,agent=?  WHERE user_id=?',
            values:[address,companyName,phone,Kra,idnumber,referall,id]
        })
        if(!results) {return res.status(400).json({msg: "Something is wrong"})}
        console.log(results)
        res.status(200).json({ message: "Success!" });

    }

   
}

export default handler
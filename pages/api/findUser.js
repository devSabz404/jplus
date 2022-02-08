import excuteQuery from "../../lib/db";
import bcrypt from 'bcrypt';


 const handler = async (req,res) =>{

    const {email,password} = req.body;

    try {

        const user = await excuteQuery({
            query:'SELECT `email_fk ` ,`password` FROM tbl_user WHERE `email_fk` =?',
            values :[email]
        })
        const match = bcrypt.compare(password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        console.log('user is ',user)
       
        res.status(200).json(user)

        
    } catch (error) {
        res.json({msg:error});
    }

}

export default handler
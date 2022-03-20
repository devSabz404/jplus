import excuteQuery from "../../../lib/db";

const handler = async (req, res) => {

    const {myname,myage,myhome} =req.body;

    const results = await excuteQuery({
        query:'INSERT INTO `testing` (name,age,country) VALUES (?,?,?)',
        values:[myname,myage,myhome]
    })
    if(!results) {return res.status(400).json({msg: "Something is wrong"})}
    console.log(results)
    res.status(200).json({ message: "Success!" });
}

export default handler
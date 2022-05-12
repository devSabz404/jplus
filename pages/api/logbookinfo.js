
import excuteQuery from '../../lib/db'
import  { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'



 


const handler = async (req, res) => {

    const  {clientIdentity}=req.body

      const krapinPath = getCookie('s3-url1', { req, res });
      const logbookPath = getCookie('s3-url2', { req, res });
      const idPath = getCookie('s3-url3', { req, res });

      const results = await excuteQuery({
        query:'INSERT INTO `itbl_userfile` (clientId,logbook,id_passport,kra) VALUES (?,?,?,?)',
        values:[clientIdentity,logbookPath,idPath,krapinPath]
    })
    if(!results) {return res.status(400).json({msg: "Something is wrong"})}
    console.log(results)
    res.status(200).json({ message: "Success!" });
   

           

           

    

          
        
    

   
 
    
}

export default handler
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "../../lib/db"
export default function handler(req, res) {

const info = {
        'name':'Sabz',
        'age':12,
}   

      

res.status(200).json(info) 



 
}

 


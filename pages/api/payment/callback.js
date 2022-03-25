// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    console.log(res.body)
    const logs = res.body

res.status(200).json({ name:logs}) 
}
    
     
    
    
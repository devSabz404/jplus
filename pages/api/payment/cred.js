import unirest from 'unirest'
export default function handler(req, res) {
const {tel} =req.body

    console.log(tel)
    res.status(200).json({ name:'working'}) 
}
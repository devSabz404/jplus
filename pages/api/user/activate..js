// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    const {id,activate} = req.body

    console.log(id)
    res.status(200).json({ name: activate })
  }
  
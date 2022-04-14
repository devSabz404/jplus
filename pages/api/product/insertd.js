import excuteQuery from "../../../lib/db";
export default async (req, res) => {
    try {
    
      const result = await excuteQuery({
          query: 'INSERT INTO inser(data) VALUES(?)',
          values: [req.body.underwriter],
      });
      console.log( "ttt",result );
      res.status(200).json({ name:'work'}) 
  } catch ( error ) {
      console.log( error );
  }
  
  
  };
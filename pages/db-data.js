import excuteQuery from "../lib/db"
export default function Blog(props) {
    const {product} =props;
    console.log(product);
    if (!product) return <p>Something went wrong....</p>
    return <div> 
                <h1>Welcome to product.....</h1>
                    {
                          // render posts here
                          product.map(
                          (item)=> <>
                                      <h2>{item.product_id}</h2>
                                      <p>{item.underwriter}</p>
                                      <br/>
                                    </>
                      )
  
                    }
            </div>
  }


export async function getStaticProps(context) {

    try {
        const results = await excuteQuery({
            query:'SELECT * FROM `itbl_product` ORDER BY `product_code` ASC'
        });
      
        let product = JSON.parse(JSON.stringify(results))
        return {
            props: {product} // will be passed to our blog page component as props
            };
      } catch (e) {
        res.status(500).json({ message: e.message });
        return {props: {product:false}} 
      }
    };



//     try {
//         const result = await sql_query(`
//           SELECT * FROM posts
//           ORDER BY title DESC
//           LIMIT 10
//       `);
      
//       
//         return {
//             props: {posts} // will be passed to our blog page component as props
//             };
//       } catch (e) {
//         return {props: {posts:false}} 
//       }
//   }

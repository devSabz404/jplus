import excuteQuery from "../lib/db";
import Layout from '../components/Layout';

export default function Blog(props) {
  const { product } = props;
  console.log(product);
  if (!product) return <p>Something went wrong....</p>;
  return (
    <>
  <Layout/>

  <main style={{marginTop:"-440px"}} className="col-md-0 ms-sm-auto col-lg-10 px-md-0">
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 className="h2">Dashboard</h1>
    <div className="btn-toolbar mb-2 mb-md-0">
      <div className="btn-group me-2">
        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
      </div>
      <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar"></span>
        This week
      </button>
    </div>
    </div>

    <div>
      <h1>Welcome to product.....</h1>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
          {product.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.cname}</td>
                <td>{val.phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>


  </main>  
     
    </>
   
  );
}

export async function getStaticProps(context) {
  try {
    const results = await excuteQuery({
      query: "SELECT * FROM `itbl_quote` ORDER BY `uniq_id` ASC",
    });

    let product = JSON.parse(JSON.stringify(results));
    console.log(product);
    return {
      props: { product }, // will be passed to our blog page component as props
    };
  } catch (e) {
    res.status(500).json({ message: e.message });
    return { props: { product: false } };
  }
}


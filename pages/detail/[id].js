import Layout from "../../components/Layout";
import excuteQuery from "../../lib/db";
import { useSelector} from 'react-redux';
import { selectCoverage,selectPeriod,selectEmail,selectName,selectRegistration,selectVehicle } from "../../features/counterSlice";
import { useState } from "react";



export const Content = ({product,benefits}) => {

    const coverPeriod = useSelector(selectPeriod);
    console.log(benefits)


    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };

  


    let basicPremium = null;

   
    if(product[0].coverage ==='Third Party Only'){
        if(coverPeriod === '1 week'){
            basicPremium = product[0].weeklyrates;
        }else if(coverPeriod === '2 weeks'){

            basicPremium = product[0].fortnightrates;

        }else if(coverPeriod === '1 month'){
            basicPremium =product[0].monthlyrates;
        }else if(coverPeriod === '1 year'){

            basicPremium =product[0].annualrates;

        }else {
            basicPremium =product[0].annualrates;
        }

    }else{
        basicPremium = parseInt(product[0].comp_rate)*sumInsured*0.01;
        if(basicPremium< parseInt(product[0].minimumpremium)){
            basicPremium = parseInt(product[0].minimumpremium);
        }


    }

    


    const stampDuty = 40;
    const policyHolderCompensationFund = (0.25/100)*basicPremium;
    const trainingLevy =(0.2/100)*basicPremium;
    let grossPremium = basicPremium+stampDuty+trainingLevy+policyHolderCompensationFund;
    let grossPremiums =Math.round(parseInt(grossPremium))
    console.log(grossPremiums)
   
    
        
    
    return (
    <>
    <Layout>
    
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
             
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Insurance Company Name
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
         Descrition of Insurance.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  optional benefits
                </h6>
                <div className="flex justify-center">
  <div>
      {benefits.map((item)=>
    <div key={item.benefit_id}className="form-check">
      
      <input onChange={handleOnChange} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
       type="checkbox" value={item.benefit_freevalue} id="flexCheckDefault"/>
      <label className="form-check-label inline-block text-gray-800" htmFor="flexCheckDefault">
        {item.benefit_name}
      </label>
    </div>
      )}
   
  </div>
</div>
               
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  The powerless in a world
                </h6>
                <p className="text-sm text-gray-900">
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest. Michael
                  Knight a young loner.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Tell them I hate them
                </h6>
                <p className="text-sm text-gray-900">
                  Chase ball of string eat plants, meow, and throw up because I
                  ate plants going to catch the red dot today going to catch the
                  red dot today. I could pee on this if I had the energy.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 " >
          <div className="box-border h-96 w-full p-4 border-4 rounded shadow-lg bg-regal-blue">
                    <h1>Total</h1>
          </div>
            
             <div className="box-border h-86 w-full p-4 border-4 rounded shadow-lg">
             <h1>Summary</h1>
             Benefits value: {benefitValue}
            </div>

            <button className="bg-red-500 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded h-10">
                 Buy Now
            </button>
            <button className="bg-green-500 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded h-10">
                 Share
            </button>
           
          </div>
        </div>
      </div>
      </Layout>
      </>
    );
  };

  export default Content


















export async function getStaticPaths() {
    let products = await excuteQuery({
        query:"SELECT * FROM itbl_product",
       
    })
  
    const paths = products.map((product) => ({
        params: { id: product.product_id.toString() },
      }))
      return { paths, fallback: false }
  
    
   }




export async function getStaticProps({params}) {

    const id =await params.id;
  
    
    let products = await excuteQuery({
        query:"SELECT * FROM itbl_product WHERE product_id = ?",
        values:[id]
    })
  
     const product = JSON.parse(JSON.stringify(products))

    let obenefits = await excuteQuery({
        query:"SELECT * FROM `itbl_benefits` where product_id =?",
        values :[id]
    })


    const benefits = JSON.parse(JSON.stringify(obenefits))
  
    return { props: { product,benefits }}
  }
  
import base64 from 'base-64'
import excuteQuery from "../lib/db";
import React from "react";
import Layout from "../frontie/Layout";
import { useSelector} from 'react-redux';
import Image from 'next/image'
import Inage from '../public/companies/britam.jpg'
import {
  selectSum,
  selectReferall,
  selectPeriod,
  selectEmail,
  selectName,
  selectNumber,
  selectRegistration,
  selectVehicle,
  selectCoverage,
  selectProduct,
  setUnique,

} from "../features/counterSlice";


import Link from "next/link"


export default function Test({covera,underwriters}){
  const sumInsured = useSelector(selectSum)

 
  let product = useSelector(selectProduct)
  let registration = useSelector(selectRegistration)
  let coverage = useSelector(selectCoverage)
  let coverperiod =useSelector(selectPeriod)
const prod = []
const writer = []
const obj=[]
const prem = []





for(let i=0;product.length>i;i++){
  let basicPremium = null;
  let grossPremium = null;
  let grossPremiums = null;

  if (product[i].coverage === "Third Party Only") {
    if (coverperiod === "1 week") {
      basicPremium = product[i].weeklyrates;
    } else if (coverperiod === "2 weeks") {
      basicPremium = product[i].fortnightrates;
    } else if (coverperiod === "1 month") {
      basicPremium = product[i].monthlyrates;
    } else if (coverperiod === "1 year") {
      basicPremium = product[i].annualrates;
    } else {
      basicPremium = product[i].annualrates;
    }
    basicPremium=parseInt(basicPremium)
    let stampDuty = 40;
    let policyHolderCompensationFund = (0.25 / 100) * basicPremium;
 
    let trainingLevy = (0.2 / 100) * basicPremium;
    
    grossPremium =basicPremium + stampDuty + trainingLevy + policyHolderCompensationFund;
    grossPremium = Math.round(parseInt(grossPremium))
    
    console.log(grossPremium)
    
  prod.push(product[i].underwriter)
  //const popy = product.map(obj=> ({ ...obj, premium: basicPremium}))
  prem.push({premium:grossPremium,name:product[i].underwriter})
  }
  else{

    
    basicPremium = parseInt(product[i].compr_rate) * sumInsured * 0.01;
  if (basicPremium < parseInt(product[i].minimumpremium)) {
    basicPremium = parseInt(product[i].minimumpremium);
  }
  let stampDuty = 40;
  let policyHolderCompensationFund = (0.25 / 100) * basicPremium;
  let trainingLevy = (0.2 / 100) * basicPremium;
  grossPremium =basicPremium + stampDuty + trainingLevy + policyHolderCompensationFund;
  grossPremium = Math.round(parseInt(grossPremium))

  prod.push(product[i].underwriter)
  //const popy = product.map(obj=> ({ ...obj, premium: basicPremium}))
  prem.push({premium:grossPremium,name:product[i].underwriter})


  }


}









  
  
  





console.log(prod)
 





  
  for(let i=0;underwriters.length>i;i++){
    
    writer.push(underwriters[i].Name)
   
  }


const intersection = prod.filter(element => writer.includes(element));

for(let i = 0; intersection.length>i;i++){


  
  for(let j = 0;underwriters.length>j;j++){

    if(underwriters[j].Name===intersection[i]){
      obj.push({
        premium:prem[i].premium,
        id:product[i].product_id,
        name:underwriters[j].Name,
        desc:underwriters[j].description,
        path:underwriters[j].path
      })
    }
  }

}
//console.log(obj)






// const stampDuty = 40;
// const policyHolderCompensationFund = (0.25 / 100) * basicPremium;
// const trainingLevy = (0.2 / 100) * basicPremium;
// let grossPremium =
//   basicPremium + stampDuty + trainingLevy + policyHolderCompensationFund;
// const grossPremiums = Math.round(parseInt(grossPremium)) + totalSum;









//console.log(writer)
//console.log(description)
//console.log(path)

// const intersection = prod.filter(element => writer.includes(element));
// console.log('ours',intersection)



return(
  <>
  <Layout>

(
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
  <div>
    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
      Brand new
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
            id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
            x="0"
            y="0"
            width=".135"
            height=".30"
          >
            <circle cx="1" cy="1" r=".7" />
          </pattern>
        </defs>
        <rect
          fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
          width="52"
          height="24"
        />
      </svg>
   
    </span>{' '}
   Pick Underwriter
  </h2>
  <p className="text-base text-gray-700 md:text-lg">
  <p>Quotations for vehicle registration: <b>{registration}</b> &nbsp;Coverage: <b>{coverage}</b>&nbsp;
    for a period of  <b>{coverperiod}</b>. Choose your prefered underwriter below to continue:</p>
  </p>
</div>
<div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">{
    
    obj.map((item)=>
  <Link  key={item.id} href={{pathname:'detail/[id]',query:{id:item.id}}} >
  <a
   
    aria-label="View Item"
    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
  >
    <div className="flex flex-col h-full">

      
      <Image
        src={`/..${item.path}`}
        className="object-cover w-full h-48"
        height={200}
        width ={200}
        
      />
      <span
    className="px-4 py-2 rounded-full border border-gray-300 text-green-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    <b>Premium KES {item.premium} </b>
  </span>
      <div className="flex-grow border border-t-0 rounded-b">
        <div className="p-5">
          <h6 className="mb-2 font-semibold leading-5">
            {item.name}
          </h6>
          <p className="text-sm text-gray-900">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  </a>
  </Link>
  )}


 


 

</div>
<div className="text-center">
  <a
    href="/"
    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
  >
    Learn more
  </a>
</div>
</div>


  </Layout>
  </>
 
)
}






export async function getServerSideProps(context) {
  
      


   
   const cover = await excuteQuery({
    query:"SELECT * FROM `itbl_coverage`"
   });

   let covera = JSON.parse(JSON.stringify(cover));

    
   const under = await excuteQuery({
    query:"SELECT * FROM `itbl_underwriters`"
   });

   let underwriters = JSON.parse(JSON.stringify(under));

   
  

 
  return {
    props: {covera,underwriters}, // will be passed to our  page component as props
  };


}










// let headers = new Headers();
// headers.append("Content-Type", "application/json");
// headers.append("Authorization", "Bearer qV6oINJCw4shkvaHj6CXHbVWdPxJ");
// ​
// fetch("https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate", {
//   method: 'POST',
//   headers,
//   body: JSON.stringify({
//     "ShortCode": 600981,
//     "CommandID": "CustomerPayBillOnline",
//     "amount": "1",
//     "MSISDN": "254705912645",
//     "BillRefNumber": "WTF69",
//   })
// })
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


  
// {

//   "OriginatorCoversationID": "43066-90899053-1",

//   "ResponseCode": "0",
// "ResponseDescription": "Accept the service request successfully."

// }
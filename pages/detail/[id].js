import Layout from "../../frontie/Layout";
import excuteQuery from "../../lib/db";
import { useDispatch,useSelector } from "react-redux";

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
  setUnique
} from "../../features/counterSlice";
import React, { useMemo, useState } from "react";
import axios from "axios";
import {useRouter} from "next/router";

export const Content = ({ product, benefits }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  //function to set date
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;


 
  const productId = product[0].product_id;
  const optionalBenefits = product[0].optionalname;
  const underwriter = product[0].underwriter;

  const coverAge = useSelector(selectCoverage)
  const registration = useSelector(selectRegistration);
  const Insured = useSelector(selectSum);
  const Referrall = useSelector(selectReferall);
  const vClass = useSelector(selectVehicle);
  const coverPeriod = useSelector(selectPeriod);
  const clientEmail = useSelector(selectEmail);
  const clientName = useSelector(selectName);
  const clientphone = useSelector(selectNumber);
  let clientId = clientName + clientEmail + clientphone + dateTime;
 

  // method to hash
  String.prototype.hashCode = function () {
    var hash = 0,
      i,
      chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };
  const clientid = Math.abs(clientId.hashCode());
  console.log(clientid);

  const [checked, setChecked] = useState({});

  const totalSum = useMemo(
    () =>
      Object.entries(checked).reduce(
        (accumulator, [benefit_name, value]) =>
          value
            ? accumulator +
              benefits.find(
                (subscriber) => subscriber.benefit_name + "" === benefit_name
              ).benefit_freevalue
            : accumulator,
        0
      ),
    [checked]
  );

  let basicPremium = null;

  if (product[0].coverage === "Third Party Only") {
    if (coverPeriod === "1 week") {
      basicPremium = product[0].weeklyrates;
    } else if (coverPeriod === "2 weeks") {
      basicPremium = product[0].fortnightrates;
    } else if (coverPeriod === "1 month") {
      basicPremium = product[0].monthlyrates;
    } else if (coverPeriod === "1 year") {
      basicPremium = product[0].annualrates;
    } else {
      basicPremium = product[0].annualrates;
    }
  } else {
    basicPremium = parseInt(product[0].comp_rate) * sumInsured * 0.01;
    if (basicPremium < parseInt(product[0].minimumpremium)) {
      basicPremium = parseInt(product[0].minimumpremium);
    }
  }

  const stampDuty = 40;
  const policyHolderCompensationFund = (0.25 / 100) * basicPremium;
  const trainingLevy = (0.2 / 100) * basicPremium;
  let grossPremium =
    basicPremium + stampDuty + trainingLevy + policyHolderCompensationFund;
  const grossPremiums = Math.round(parseInt(grossPremium)) + totalSum;
  const quoteStatus = 'quoted'

  async function handlebuy(){

    const data ={
      clientid,clientName,clientEmail,clientphone,registration,
      vClass,coverPeriod,productId,optionalBenefits,underwriter,grossPremiums,
      Insured,Referrall,quoteStatus,coverAge }
      dispatch(setUnique(clientId));
    const res = await axios.post('/api/product/insert-quote',data);
    if (res.status === 200){ router.push('/logbook')
  }else{
    alert('Not inserted')
  }
    

  }

  return (
    <>
      <Layout>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
            <div className="grid gap-8 lg:col-span-2">
              <div></div>
              <div>
                <p className="mb-2 text-lg font-bold">Optional Benefits</p>
                {benefits.map(({ benefit_name, benefit_id }) => {
                  return (
                    <div key={benefit_id}>
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked={!!checked[benefit_name]}
                          onChange={() => {
                            setChecked({
                              ...checked,
                              [benefit_name]: !checked[benefit_name],
                            });
                          }}
                        />
                        {benefit_name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x bg-regal-blue text-white">
              <div className="flex flex-col justify-between p-10">
                <div>
                  <p className="text-lg font-semibold text-gray-800 sm:text-base">
                    Gross Premium
                  </p>
                  <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                    {grossPremiums}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800 sm:text-base">
                    Benefits
                  </p>
                  <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                    52
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800 sm:text-base">
                    Downloads
                  </p>
                  <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                    186M
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between p-10">
                <div>
                  <p className="text-lg font-semibold text-gray-800 sm:text-base">
                    Summary
                  </p>
                  <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-base ">
                    Full name : <span className="underline">{clientName}</span>
                  </p>
                  <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-base">
                    Email : <span className="underline">{clientEmail}</span>
                  </p>
                  <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-base">
                    Phone Number :{" "}
                    <span className="underline">{clientphone}</span>
                  </p>

                  <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-base">
                    Registration :
                    <span className="underline">{registration}</span>
                  </p>
                </div>

                <div></div>

                <div></div>
              </div>
              <button onClick={handlebuy} className="bg-red-500 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded h-10">
                Buy Now
              </button>
              <button className="bg-green-500 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded h-10">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
        {benefits.map(({ benefit_name,benefit_id }) => {
          return (
            <div key={benefit_id}>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={!!checked[benefit_name]}
                  onChange={() => {
                    setChecked({
                      ...checked,
                      [benefit_name]: !checked[benefit_name]
                    });
                  }}
                />
                {benefit_name}
              </label>
            </div>
          );
        })}
         <h2>Sum of optional benefits: {totalSum}</h2>
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
            { <h2>{grossPremiums}</h2>}
            </div>

            <button className="bg-red-500 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded h-10">
                 Buy Now
            </button>
            <button className="bg-green-500 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded h-10">
                 Share
            </button>
           
          </div>
        </div>
      </div> */}
      </Layout>
    </>
  );
};

export default Content;

export async function getStaticPaths() {
  let products = await excuteQuery({
    query: "SELECT * FROM itbl_product",
  });

  const paths = products.map((product) => ({
    params: { id: product.product_id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = await params.id;

  let products = await excuteQuery({
    query: "SELECT * FROM itbl_product WHERE product_id = ?",
    values: [id],
  });

  const product = JSON.parse(JSON.stringify(products));

  let obenefits = await excuteQuery({
    query: "SELECT * FROM `itbl_benefits` where product_id =?",
    values: [id],
  });

  const benefits = JSON.parse(JSON.stringify(obenefits));

  return { props: { product, benefits } };
}

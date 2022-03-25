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
  const sumInsured = useSelector(selectSum)
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
    basicPremium = parseInt(product[0].compr_rate) * sumInsured * 0.01;
    if (basicPremium < parseInt(product[0].minimumpremium)) {
      basicPremium = parseInt(product[0].minimumpremium);
    }
  }
  basicPremium =parseInt(basicPremium)
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

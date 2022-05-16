import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { useRouter } from "next/router";
import {setStk,setMpesa, selectEmail, selectLogbook, selectName, selectNumber, selectPremBen, selectReferall, selectSum } from "../features/counterSlice"
import axios from "axios";

function Spiner(){

    return(
        <>
                <div className="relative ...">


  <div className="absolute mt-10 bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
    <div className="flex items-center">
      <span className="text-3xl mr-4">Waiting & Processing Payment</span>
    
      <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
      </svg>
     
    </div>
  </div>


</div>

        </>
    )
}

export default function Confirmation(){
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch()
    const router = useRouter()
    const logInfo = useSelector(selectLogbook)
    const sumInsured = useSelector(selectSum)
    const policyholder = useSelector(selectName)
    const phone = useSelector(selectNumber)
    const email = useSelector(selectEmail)
    const policydata = useSelector(selectPremBen)

    const referall = useSelector(selectReferall)

    const registration =logInfo.Registration;
    const make =logInfo.Make
    const model = logInfo.Model
    const color = logInfo.Color
    const engine = logInfo.EngineNumber
    const chasis =logInfo.Chasis
    const cc =logInfo.CCRating
    const seats =logInfo.Passengers
    const year =logInfo.Manufactured
    const classInsurance =null
    const underwriter = policydata.underwriter
    const pin =logInfo.KraPin
    const idClient =logInfo.IdNumber
    const period =null
    
  
  

    console.log(logInfo);
    const amount = policydata.grossPremiums;

   

    const [phones,setPay] = useState()

    async function handlePay(e) {

        e.preventDefault()
       

        const info = {phones}
        //dispatch(setStk(phones))

  
           
        await axios({
            method: 'post',
            url:'./api/payment/lipa',
           
            data:info,
           
        })
        .then(async function (response) {
            console.log(response.data);
            const CheckoutRequestID = await response.data.CheckoutRequestID;
           
            
            dispatch(setStk(CheckoutRequestID));
            setIsShown(true);
           setTimeout(()=>router.push('/summary'),20000);
           
            
              
          })
        .catch(function (response) {
            console.log(response);
        });
    }

        
  return(
        isShown ?
        <Spiner/>:
        <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium ml-3">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your payment details below.</div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <div className="rounded-md">
                <form id="payment-form" method="POST" action="">
                    <section>
                    <div className="flex">
                    <div className="flex-initial ml-9 w-64">
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Policy Holder Details</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Name</span>
                                <input name="name" className="focus:outline-none px-6" placeholder={policyholder} disabled/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">ID</span>
                                <input name="email" type="email" className="focus:outline-none px-3" placeholder="try@example.com" disabled/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">KRA Pin</span>
                                <input name="address" className="focus:outline-none px-3" placeholder={logInfo.KraPin} disabled/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Phone</span>
                                <input name="city" className="focus:outline-none px-3" placeholder={phone} disabled/>
                            </label>
                            <label className="inline-flex w-2/4 border-gray-200 py-3">
                                <span className="text-right px-2">Email</span>
                                <input name="state" className="focus:outline-none px-3" placeholder={email} disabled/>
                            </label>
                            
                            
                        </fieldset>
                        </div>

                        <div className="flex-initial w-full ml-9 space-x-4">
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Vehicle Details</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Registration</span>
                                <input name="name" className="focus:outline-none px-3 " placeholder={logInfo.Registration} disabled/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Chassis/Frame Number</span>
                                <input name="email" type="email" className="focus:outline-none px-3 w-65" placeholder={logInfo.Chasis} disabled/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Engine Number</span>
                                <input name="address" className="focus:outline-none px-3" placeholder={logInfo.EngineNumber} disabled/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Manufacture Year</span>
                                <input name="city" className="focus:outline-none px-3" placeholder={logInfo.Manufactured} disabled/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Load Capacity</span>
                                <input name="city" className="focus:outline-none px-3" placeholder={logInfo.LoadCapacity}/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Sitting Capacity</span>
                                <input name="city" className="focus:outline-none px-3" placeholder={logInfo.Passengers} disabled/>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Tax className</span>
                                <input name="city" className="focus:outline-none px-3" placeholder={logInfo.TaxclassName} disabled/>
                            </label>
                           
                        </fieldset>
                        </div>
                        
                       </div> 
                    </section>
                </form>
            </div>
            <form onSubmit={handlePay}>
            <div className="rounded-md">
                <section>
                    
                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                    <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right px-2">Phone</span>
                            <input name="card" onChange={(e)=>setPay(e.target.value)} className="focus:outline-none px-3 w-full" placeholder="2547XXXXXXXX" required=""/>
                        </label>
                    </fieldset>
                </section>
            </div>
         
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full w-full text-xl font-semibold transition-colors  focus:ring focus:outline-none" type="submit">
                Pay
            </button>
            </form>
        </div>
       
        <div className="col-span-1 bg-white lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Summary</h1>
            <ul className="py-6 border-b space-y-6 px-8">
               
                <li className="grid grid-cols-6 gap-2 border-b-1">
                   
                   
                   
                </li>
            </ul>
            <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Premium</span>
                    <span className="font-semibold text-pink-500">{`KES ${policydata.grossPremium}.00`}</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Optional Benefits</span>
                    <span className="font-semibold text-pink-500">{policydata.totalSum?`KES ${policydata.totalSum}.00`:null}</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Gross Premium</span>
                <span>{`KES ${policydata.grossPremiums}.00`}</span>
            </div>
        </div>
    </div>
       
    )
}


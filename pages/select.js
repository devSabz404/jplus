import React from "react";
import Layout from "../frontie/Layout";
import { useSelector} from 'react-redux';
import{selectCoverage, selectPeriod, selectProduct,selectRegistration,setChoice} from '../features/counterSlice'
import Link from "next/link"

const Select = () =>{


    let product = useSelector(selectProduct)
    let registration = useSelector(selectRegistration)
    let coverage = useSelector(selectCoverage)
    let coverperiod =useSelector(selectPeriod)
    console.log(coverage)

   

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
          
          product.map((item)=>
        <Link  key={item.product_id} href={{pathname:'detail/[id]',query:{id:item.product_id}}}>
        <a
         
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  {item.underwriter}
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
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

export default Select;